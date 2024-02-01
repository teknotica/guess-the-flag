/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { useKeydown } from "../../hooks/useKeydown";
import publicPath from "../../utils/publicPath";
import styles from "./styles";

export const Modal = ({ onClose, children }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  const focusableElList =
    'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';

  useEffect(() => {
    // Focus on close button
    closeBtnRef.current.focus();

    const previousValue = document.body.style.overflow || "auto";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousValue;
    };
  }, []);

  const handleClick = (event) => {
    if (event.target === overlayRef.current) {
      onClose();
    }
  };

  const handleTabKey = (event) => {
    const focusableElements =
      modalRef?.current?.querySelectorAll(focusableElList);

    const firstElement = focusableElements && focusableElements[0];
    const lastElement =
      focusableElements && focusableElements[focusableElements.length - 1];

    if (
      !event.shiftKey &&
      firstElement &&
      document.activeElement !== firstElement
    ) {
      firstElement.focus();
      event.preventDefault();
    }

    if (
      event.shiftKey &&
      lastElement &&
      document.activeElement !== lastElement
    ) {
      lastElement.focus();
      event.preventDefault();
    }
  };

  useKeydown("Escape", onClose);
  useKeydown("Tab", handleTabKey);

  const modalRoot = document.getElementById("modal");

  return modalRoot
    ? createPortal(
        <div
          css={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-hidden="true"
          tabIndex={-1}
          onClick={handleClick}
          ref={overlayRef}
        >
          <div ref={modalRef} css={styles.modal}>
            <div css={styles.header}>
              <button
                aria-label="close modal"
                css={styles.button}
                onClick={onClose}
                ref={closeBtnRef}
              >
                <img
                  src={publicPath("/images/close.gif")}
                  alt="Close modal"
                  width="28"
                  height="30"
                />
              </button>
            </div>
            <div css={styles.content}>{children}</div>
          </div>
        </div>,
        modalRoot
      )
    : null;
};

export default Modal;

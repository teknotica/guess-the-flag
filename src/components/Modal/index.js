/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import publicPath from "../../utils/publicPath";
import styles from "./styles";

const Modal = ({ onClose, children }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
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
              >
                <img src={publicPath("/images/close.gif")} alt="Close modal" />
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

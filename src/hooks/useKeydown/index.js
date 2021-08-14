import { useEffect } from "react";

export const useKeydown = (key, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (event.key === key) {
        handler(event);
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handler, key]);
};

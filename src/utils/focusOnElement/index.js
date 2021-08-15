export const focusOnElement = (id) => {
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.focus();
    }
  }, 500);
};

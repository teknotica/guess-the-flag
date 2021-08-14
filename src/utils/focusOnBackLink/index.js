export const focusOnBackLink = () => {
  setTimeout(() => {
    const backLink = document.getElementById("top-link");
    if (backLink) {
      backLink.focus();
    }
  }, 500);
};

export const focusOnQuestion = (questionIndex) => {
  setTimeout(() => {
    const listWrapper = document.getElementById("questions-list");
    if (listWrapper) {
      const questionToFocus = listWrapper.children.item(questionIndex);
      const questionAnswers = questionToFocus.getElementsByTagName("button");

      // Focus on first answer button
      if (questionAnswers.item(0)) {
        questionAnswers.item(0).focus();
      }
    }
  }, 500);
};

import { QUIZ_QUESTIONS_COUNT } from "../const";

export const setLocalItem = (item, value) =>
  sessionStorage.setItem(item, value);

export const getLocalItem = (item) => sessionStorage.getItem(item);

export const increaseLocalItem = (item) => {
  const itemLocal = sessionStorage.getItem(item);
  if (!itemLocal) {
    return null;
  }
  setLocalItem(item, parseInt(itemLocal) + 1);

  return getLocalItem(item);
};

export const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const updateStorageVariables = ({ answer, correct, setShowScore }) => {
  const answeredCorrectly = answer === correct;

  if (answeredCorrectly) {
    increaseLocalItem("quiz_result");
  }

  const questions_counter = increaseLocalItem("quiz_answered_counter");

  // Check if all questions answered to show results
  if (parseInt(questions_counter) === QUIZ_QUESTIONS_COUNT) {
    setShowScore(true);
  }
};

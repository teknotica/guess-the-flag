import {
  QUIZ_ANSWERED_COUNTER,
  QUIZ_QUESTIONS_NUMBER,
  QUIZ_RESULT,
  QUIZ_SHOW_RESULTS,
} from "../../../const";

const setLocalItem = (item, value) => sessionStorage.setItem(item, value);

const getLocalItem = (item) => sessionStorage.getItem(item);

const increaseLocalItem = (item) => {
  const itemLocal = sessionStorage.getItem(item);
  if (!itemLocal) {
    return null;
  }
  setLocalItem(item, parseInt(itemLocal) + 1);

  return getLocalItem(item);
};

const updateStorageVariables = (answeredCorrectly) => {
  if (answeredCorrectly) {
    increaseLocalItem(QUIZ_RESULT);
  }

  const questions_counter = increaseLocalItem(QUIZ_ANSWERED_COUNTER);
  const answeredQuestions = parseInt(questions_counter);

  if (answeredQuestions === QUIZ_QUESTIONS_NUMBER) {
    setLocalItem(QUIZ_SHOW_RESULTS, "1");
  }
};

export default () => {
  return {
    setLocalItem,
    getLocalItem,
    updateStorageVariables,
  };
};

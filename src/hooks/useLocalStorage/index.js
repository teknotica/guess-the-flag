import { QUIZ_ANSWERED_COUNTER, QUIZ_RESULT } from "../../const";

const setLocalItem = (item, value) => sessionStorage.setItem(item, value);

const getLocalItem = (item) => sessionStorage.getItem(item);

const getAnsweredCount = () => parseInt(getLocalItem(QUIZ_ANSWERED_COUNTER));

const increaseLocalItem = (item) => {
  const itemLocal = sessionStorage.getItem(item);
  if (!itemLocal) {
    return null;
  }

  setLocalItem(item, parseInt(itemLocal) + 1);
};

const increaseResultVariables = (answeredCorrectly) => {
  if (answeredCorrectly) {
    increaseLocalItem(QUIZ_RESULT);
  }

  increaseLocalItem(QUIZ_ANSWERED_COUNTER);
};

export default () => ({
  setLocalItem,
  getLocalItem,
  getAnsweredCount,
  increaseResultVariables,
});

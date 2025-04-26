import {
  getAnsweredCount,
  getLocalItem,
  increaseResultVariables,
  setLocalItem
} from './useLocalStorage'


export default () => ({
  setLocalItem,
  getLocalItem,
  getAnsweredCount,
  increaseResultVariables,
});
import { API_URL } from "../const";

export const getFlagsByRegion = async (region) => {
  return fetch(`${API_URL}/${region}`).then((resp) => resp.json());
};

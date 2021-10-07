import publicPath from "../utils/publicPath";

export const getFlagsByRegion = (region) => {
  const filePath = publicPath(`/data/${region}.json`);

  return fetch(filePath).then((resp) => {
    return resp.json();
  });
};

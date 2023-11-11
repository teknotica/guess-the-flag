import publicPath from "../utils/publicPath";

export const getFlagsByRegion = async (region) => {
  const filePath = publicPath(`/data/${region}.json`);

  const response = await fetch(filePath);

  if (!response.ok) {
    throw Error(`Error fetching flags for: ${region}`);
  }

  return response.json();
};

import publicPath from "../utils/publicPath";

export const getFlagsByRegion = async (region) => {
  try {
    const response = await fetch(publicPath(`/data/${region}.json`));

    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
};

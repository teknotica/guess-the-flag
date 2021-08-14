export const regionTitle = (region) => {
  const suffix = region.charAt(region.length - 1) === "s" ? "'" : "'s";
  return region.charAt(0).toUpperCase() + region.slice(1) + suffix;
};

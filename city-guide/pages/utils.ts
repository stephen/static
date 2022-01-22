export const getImgPrefix = () => {
  const isProd = process.env.NODE_ENV === "production";
  return isProd ? "/city-guide" : "";
};

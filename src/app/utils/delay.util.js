export const delay = (millis) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(true), millis)
  });
};

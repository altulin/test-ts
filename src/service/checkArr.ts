// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkArr = (arr: any) => {
  return Array.isArray(arr) && arr.length > 0;
};

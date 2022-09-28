export const createParams = (paramsObj: any) => {
  const searchParams = new URLSearchParams(paramsObj);

  return searchParams;
};

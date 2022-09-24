import { TOption } from "../types/type";

export const getParams = (options: TOption[] = [], selectedValue: string = "") => {
  const data = options.find((item: TOption) => {
    if (item.name === selectedValue) {
      return item || {};
    }
  });

  return data;
};

  // Получение значение из массива типа {id: number, name: string} по id

import { TOption } from "../types/type";

  export const getItemById = (array: TOption[], id: number) => {
    let returnValue = "";

    array.forEach((item) => {
      if (item.id === id) {
        returnValue = item.name;
      }
    });

    return returnValue;
  };
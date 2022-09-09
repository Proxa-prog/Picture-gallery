import { getAuthorsAction } from "../redusers/Authors";
import { TOption } from "../types/type";
import { getPaintings } from "./painting";

// Получение списка авторов
export const getAuthors = (authors: any) => async (dispatch: any) => {
  await fetch("https://test-front.framework.team/authors")
    .then((response) => response.json())
    .then((json) => {
      dispatch(getAuthorsAction([...authors, ...json]));
    })
    .catch((error) => console.error(error));
};
 
// Фильтрация по авторам
export const filteringByAuthors = (dispatch: any, author: string, options: TOption[]) => {
  let url = '?authorId=';

  options.map((option: TOption) => {
    if (option.name === author) {
      url = url + option.id;

      return
    }
  });

  dispatch(getPaintings(url));
};

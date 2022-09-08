import { getAuthorsAction } from "../redusers/Authors";

// Получение списка авторов
export const getAuthors = (authors: any) => async (dispatch: any) => {
  await fetch("https://test-front.framework.team/authors")
    .then((response) => response.json())
    .then((json) => {
      dispatch(getAuthorsAction([...authors, ...json]));
    })
    .catch((error) => console.error(error));
};

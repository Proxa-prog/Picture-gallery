import { getAuthorsAction } from "../store/reduсers/Authors";

const fetchAuthors =async (authors: any, dispatch: any) => {
  const response = await fetch("https://test-front.framework.team/authors");
  const result = await response.json();

  dispatch(getAuthorsAction([...authors, ...result]));
}

// Получение списка авторов
export const getAuthors = (authors: any) => async (dispatch: any) => {
  try {
    fetchAuthors(authors, dispatch);
  } catch (error) {
    console.error(error);
  }
};
 
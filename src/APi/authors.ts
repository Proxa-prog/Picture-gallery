import axios from "axios";
import { MAIN_URL } from "../constants/links";
import { getAuthorsAction } from "../store/reduсers/authors";

const fetchAuthors = (authors: any, dispatch: any) => {
  return async () => {
    const response = await axios.get(`${MAIN_URL}/authors`);
    dispatch(getAuthorsAction([...authors, ...response.data]));
  };
};

// Получение списка авторов
export const getAuthors = (authors: any) => async (dispatch: any) => {
  try {
    fetchAuthors(authors, dispatch);
  } catch (error) {
    console.error(error);
  }
};

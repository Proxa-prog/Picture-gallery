import { IAuthors } from "../types/api/authors";

// Получение списка авторов
export const getAuthors = async (authors: IAuthors[], setAuthors: any) => {
  await fetch("https://test-front.framework.team/authors")
    .then((response) => response.json())
    .then((json) => {
      const newAuthorsArray = [...authors, ...json];
      setAuthors(newAuthorsArray);
    });
};

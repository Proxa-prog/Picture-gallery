import { IPaintings } from "../types/api/paintings";

// Получение списка картин
export const getPaintings = async (paintings: IPaintings[], setPaintings: any) => {
  await fetch("https://test-front.framework.team/paintings")
    .then((response) => response.json())
    .then((json) => {
      const newAuthorsArray = [...paintings, ...json];
      setPaintings(newAuthorsArray);
    });
};

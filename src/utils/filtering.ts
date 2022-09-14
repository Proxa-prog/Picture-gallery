import { getCurrentPaintingsAction } from "../redusers/CurrentPaintingsReduser";
import { IPaintings } from "../types/api/paintings";
import { TOption } from "../types/type";

  // Получение списка картин с фильтром
  export const getCurrentPaintings = (url: string) => async (dispatch: any) => {
    await fetch(`https://test-front.framework.team/paintings${url}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(getCurrentPaintingsAction([...json]));
      })
      .catch((error) => console.error(error));
  };

// Фильтрация по локациям
export const filteringByLocation = (dispatch: any, location: string, locations: TOption[]) => {
    let url: string = '';

    locations.forEach((item: TOption) => {
      if (location === item.name) {
        url = `?locationId=${item.id}`;

        return
      }
    });

    dispatch(getCurrentPaintings(url));
  };

// Фильтрация по локациям
export const filteringCreated = (dispatch: any, created: string, paintings: TOption[]) => {
    let url: string = '';

    paintings.forEach((item: TOption) => {
      if (created === item.name) {
        url = `?created=${item.name}`;

        return
      }
    });

    dispatch(getCurrentPaintings(url));
  };
  
  // Фильтрация по названиям
  export const filteringByPaintingName = (dispatch: any, paintingName: string, options: IPaintings[]) => {
    let url: string = '';
  
    options.forEach((option: IPaintings) => {
      if (paintingName === option.name) {
        url = `?id=${option.id}`;
      }
    })
  
    dispatch(getCurrentPaintings(url));
  };
  
  // Фильтрация по авторам
  export const filteringByAuthors = (dispatch: any, author: string, options: TOption[]) => {
    let url = '?authorId=';
  
    options.forEach((option: TOption) => {
      if (option.name === author) {
        url = url + option.id;
  
        return
      }
    });
  
    dispatch(getCurrentPaintings(url));
  };
  
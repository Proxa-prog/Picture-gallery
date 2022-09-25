import { url } from "../constants/Url";
import { getCurrentPaintingsAction } from "../store/reduсers/CurrentPaintings";

const fetchData = async (data: any, dispatch: any) => {
  if (data) {
    data = '?' + data;
  }

  const response = await fetch(`${url + data}`);
  const result = await response.json();

  dispatch(getCurrentPaintingsAction(result));
};


// Получение списка картин с фильтром
export const getCurrentPaintings = (data: any) => async (dispatch: any) => {
    try {
      await fetchData(data, dispatch);
    } catch (error) {
      console.error(error);
    }
  };

import axios from "axios";
import { MAIN_PAINTINGS_URL } from "../constants/links";
import { getCurrentPaintingsAction } from "../store/reduсers/currentPaintings";

const fetchData = async (queryParams: any, dispatch: any) => {
  if (queryParams) {
    queryParams = "?" + queryParams;
  }

  const response = await axios.get(`${MAIN_PAINTINGS_URL + queryParams}`);

  dispatch(getCurrentPaintingsAction(response.data));
};

// Получение списка картин с фильтром
export const getCurrentPaintings = (data: any) => async (dispatch: any) => {
  try {
    await fetchData(data, dispatch);
  } catch (error) {
    console.error(error);
  }
};

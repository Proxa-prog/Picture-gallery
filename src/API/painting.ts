import axios from "axios";
import { MAIN_PAINTINGS_URL } from "../constants/links";
import { getPageOfNumberAction } from "../store/reduсers/pagination";
import { getPaintingsAction } from "../store/reduсers/paintings";
import { howManyPages } from "../utils/getNumberOfPages";

const fetchPaintings = async (url: string, dispatch: any) => {
  const response = await axios.get(`${MAIN_PAINTINGS_URL}${url}`);

  dispatch(getPaintingsAction([...response.data]));
  dispatch(getPageOfNumberAction(howManyPages(response.data)));
};

// Получение списка картин
export const getPaintings = (url: string) => async (dispatch: any) => {
  try {
    await fetchPaintings(url, dispatch);
  } catch (error) {
    console.error(error);
  }
};

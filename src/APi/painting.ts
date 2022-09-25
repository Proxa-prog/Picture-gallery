import { getPageOfNumberAction } from "../store/reduсers/Pagination";
import { getPaintingsAction } from "../store/reduсers/Paintings";
import { howManyPages } from "../utils/getNumberOfPages";

const fetchPaintings = async (url: string, dispatch: any) => {
  const response = await fetch(`https://test-front.framework.team/paintings${url}`);
  const result = await response.json();

  dispatch(getPaintingsAction([...result]));
  dispatch(getPageOfNumberAction(howManyPages(result)));
};

// Получение списка картин
export const getPaintings = (url: string) => async (dispatch: any) => {
  try {
    await fetchPaintings(url, dispatch);
  } catch (error) {
    console.error(error);
  }
};

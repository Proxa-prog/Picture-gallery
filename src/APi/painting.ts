import { getPageOfNumberAction } from "../store/reduсers/Pagination";
import { getPaintingsAction } from "../store/reduсers/Paintings";
import { howManyPages } from "../utils/getNumberOfPages";

// Получение списка картин
export const getPaintings = (url: string) => async (dispatch: any) => {
  await fetch(`https://test-front.framework.team/paintings${url}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(getPaintingsAction([...json]));
      dispatch(
        getPageOfNumberAction(howManyPages(json))
      );
    })
    .catch((error) => console.error(error));
};

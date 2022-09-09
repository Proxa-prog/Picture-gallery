import { getPaintingsAction } from "../redusers/Paintings";

// Получение списка картин
export const getPaintings = (url: string) => async (dispatch: any) => {
  await fetch(`https://test-front.framework.team/paintings${url}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(getPaintingsAction([...json]));
    })
    .catch((error) => console.error(error));
};

import { getPaintingsAction } from "../redusers/Paintings";

// Получение списка картин
export const getPaintings = () => async (dispatch: any) => {
  await fetch("https://test-front.framework.team/paintings")
    .then((response) => response.json())
    .then((json) => {
      dispatch(getPaintingsAction([...json]));
    })
    .catch((error) => console.error(error));
};

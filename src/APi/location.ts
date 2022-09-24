import { getLocationsAction } from "../store/reduсers/Location";
import { ILocations, TOption } from "../types/type";

// Получение списка локаций
export const getLocations = () => async (dispatch: any) => {
  await fetch("https://test-front.framework.team/locations")
    .then((response) => response.json())
    .then((json) => {
      let newLocations: TOption[] = [];

      json.forEach((location: ILocations) => {
        newLocations = [
          ...newLocations,
          {
            id: location.id,
            name: location.location,
          },
        ];
      });
      dispatch(getLocationsAction([...newLocations]));
    })
    .catch((error) => console.error(error));
};

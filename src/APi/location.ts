import { getLocationsAction } from "../store/reduсers/Location";
import { ILocations, TOption } from "../types/type";

const fetchLocations = async (dispatch: any) => {
  const response = await fetch("https://test-front.framework.team/locations");
  const result = await response.json();

  let newLocations: TOption[] = [];

  result.forEach((location: ILocations) => {
    newLocations = [
      ...newLocations,
      {
        id: location.id,
        name: location.location,
      },
    ];
  });
  dispatch(getLocationsAction([...newLocations]));

}

// Получение списка локаций
export const getLocations = () => async (dispatch: any) => {
  try {
    fetchLocations(dispatch);
  } catch (error) {
    console.error(error);
  }
};

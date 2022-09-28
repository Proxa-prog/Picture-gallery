import axios from "axios";
import { MAIN_URL } from "../constants/links";
import { getLocationsAction } from "../store/reduсers/location";
import { ILocations, TOption } from "../types/type";

const fetchLocations = async (dispatch: any) => {
  const response = await axios.get(`${MAIN_URL}/locations`);

  let newLocations: TOption[] = [];

  response.data.forEach((location: ILocations) => {
    newLocations = [
      ...newLocations,
      {
        id: location.id,
        name: location.location,
      },
    ];
  });
  dispatch(getLocationsAction([...newLocations]));
};

// Получение списка локаций
export const getLocations = () => async (dispatch: any) => {
  try {
    fetchLocations(dispatch);
  } catch (error) {
    console.error(error);
  }
};

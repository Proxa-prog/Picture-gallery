import { locationsAction } from "../../../constants/LocationsAction";
import {
  ILocationsAction,
  ILocationsArray,
  TOption,
} from "../../../types/type";

const initialState: ILocationsArray = {
  locations: [],
};

export const locationReducer = (
  state = initialState,
  action: ILocationsAction
): ILocationsArray => {
  switch (action.type) {
    case locationsAction.GET_LOCATIONS:
      return { locations: action.payload };
    default:
      return state;
  }
};

export const getLocationsAction = (payload: TOption[]) => ({
  type: locationsAction.GET_LOCATIONS,
  payload,
});

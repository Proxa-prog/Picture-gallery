import { AuthorsAction } from "../../../constants/AuthorsAction";
import { IAuthorsAction, IAuthorsArray } from "../../../types/type";

const initialState: IAuthorsArray = {
  authors: [],
};

export const authorsReducer = (
  state = initialState,
  action: IAuthorsAction
): IAuthorsArray => {
  switch (action.type) {
    case AuthorsAction.GET_AUTHORS:
      return { ...state, authors: action.payload };
    default:
      return state;
  }
};

export const getAuthorsAction = (payload: any[]) => ({
  type: AuthorsAction.GET_AUTHORS,
  payload,
});

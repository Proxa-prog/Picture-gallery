import { AuthorsAction } from "../../constants/AuthorsAction";
import { IAuthors } from "../../types/api/authors";
import { IAuthorsAction, IAuthorsArray } from "../../types/type";

const initialState: IAuthorsArray = {
    authors: [{
        name: "Name",
        value: "default",
        inactive: true,
        isHidden: true,
        isSelected: true,
      }]
}

export const authorsReduser = (state = initialState , action: IAuthorsAction): IAuthorsArray => {
    switch (action.type) {
        case AuthorsAction.GET_AUTHORS:
            return {...state, authors: action.payload}
        default:
             return state;
    }
};

export const getAuthorsAction = (payload: IAuthors[]) => ({type: AuthorsAction.GET_AUTHORS, payload});
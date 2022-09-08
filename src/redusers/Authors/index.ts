import { AuthorsAction } from "../../constants/AuthorsAction";
import { IAuthors } from "../../types/api/authors";
import { IAuthorsAction, IAuthorsArray } from "../../types/type";

const initialState: IAuthorsArray = {
    authors: [],
}

export const authorsReduser = (state = initialState , action: IAuthorsAction): IAuthorsArray => {
    switch (action.type) {
        case AuthorsAction.GET_AUTHORS:
            return {authors: action.payload}
        default:
             return state;
    }
};

export const getAuthorsAction = (payload: IAuthors[]) => ({type: AuthorsAction.GET_AUTHORS, payload});
import { AuthorsAction } from "../constants/AuthorsAction";
import { ThemeAction } from "../constants/ThemeAction";
import { IAuthors } from "./api/authors";

export interface IAuthorsArray {
    authors: IAuthors[];
}

export interface IAuthorsAction {
    type: AuthorsAction;
    payload: any;
}

export interface ITheme {
    theme: boolean;
}

export interface IThemeAction {
    type: ThemeAction;
    payload: boolean;
}
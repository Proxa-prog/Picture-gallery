import { AuthorsAction } from "../constants/AuthorsAction";
import { PaintingsAction } from "../constants/PaintingsAction";
import { ThemeAction } from "../constants/ThemeAction";
import { IAuthors } from "./api/authors";
import { IPaintings } from "./api/paintings";

export interface IAuthorsArray {
    authors: IAuthors[];
}

export interface IAuthorsAction {
    type: AuthorsAction;
    payload: IAuthors[];
}

export interface IPaintingsArray {
    paintings: IPaintings[];
}

export interface IPaintingsAction {
    type: PaintingsAction;
    payload: IPaintings[];
}

export interface ITheme {
    theme: boolean;
}

export interface IThemeAction {
    type: ThemeAction;
    payload: boolean;
}
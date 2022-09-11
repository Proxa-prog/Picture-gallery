import { AuthorsAction } from "../constants/AuthorsAction";
import { locationsAction } from "../constants/LocationsAction";
import { currentPaintingsAction, PaintingsAction } from "../constants/PaintingsAction";
import { ThemeAction } from "../constants/ThemeAction";
import { IPaintings } from "./api/paintings";

export type TOption = {
    id: number;
    name: string;
  };

export interface IAuthorsArray {
    authors: TOption[];
}

export interface IAuthorsAction {
    type: AuthorsAction;
    payload: TOption[];
}

export interface IPaintingsArray {
    paintings: IPaintings[];
}

export interface ICurrentPaintingsArray {
    currentPaintings: IPaintings[];
}

export interface IPaintingsAction {
    type: PaintingsAction;
    payload: IPaintings[];
}

export interface ICurrentPaintingsAction {
    type: currentPaintingsAction;
    payload: IPaintings[];
}

export interface ITheme {
    theme: boolean;
}

export interface IThemeAction {
    type: ThemeAction;
    payload: boolean;
}

export interface ILocations {
    id: number;
    location: string;
}

export interface ILocationsArray {
    locations: TOption[];
}

export interface ILocationsAction {
    type: locationsAction;
    payload: TOption[];
}
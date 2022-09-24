import { ThemeAction } from "../../../constants/ThemeAction";
import { ITheme, IThemeAction } from "../../../types/type";

const initialState: ITheme = {
    theme: true,
}

export const themeReducer = (state = initialState , action: IThemeAction): ITheme => {
    switch (action.type) {
        case ThemeAction.CHANGE_THEME:
            return {theme: action.payload}
        default:
             return state;
    }
};

export const changeThemeAction = (payload: boolean) => ({type: ThemeAction.CHANGE_THEME, payload});
import { combineReducers } from "redux";

import { authorsReduser } from "./Authors";
import { themeReduser } from "./Theme";

export const rootReduser = combineReducers({
    authors: authorsReduser,
    theme: themeReduser,
});

export type RootState = ReturnType<typeof rootReduser>;
import { combineReducers } from "redux";

import { authorsReduser } from "./Authors";
import { paintingsReduser } from "./Paintings";
import { themeReduser } from "./Theme";

export const rootReduser = combineReducers({
    authors: authorsReduser,
    theme: themeReduser,
    paintings: paintingsReduser,
});

export type RootState = ReturnType<typeof rootReduser>;
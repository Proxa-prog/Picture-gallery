import { combineReducers } from "redux";

import { authorsReduser } from "./Authors";
import { currentPaintingsReduser } from "./CurrentPaintingsReduser";
import { locationReduser } from "./Location";
import { paintingsReduser } from "./Paintings";
import { themeReduser } from "./Theme";

export const rootReduser = combineReducers({
    authors: authorsReduser,
    theme: themeReduser,
    paintings: paintingsReduser,
    currentPaintings: currentPaintingsReduser,
    locations: locationReduser,
});

export type RootState = ReturnType<typeof rootReduser>;
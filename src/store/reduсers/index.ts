import { combineReducers } from "redux";
import { authorsReducer } from "./authors";
import { currentPaintingsReducer } from "./currentPaintings";

import { locationReducer } from "./location";
import { paginationReducer } from "./pagination";
import { paintingsReducer } from "./paintings";
import { themeReducer } from "./theme";

export const rootReducer = combineReducers({
    authors: authorsReducer,
    theme: themeReducer,
    paintings: paintingsReducer,
    currentPaintings: currentPaintingsReducer,
    locations: locationReducer,
    pageNumber: paginationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
import { combineReducers } from "redux";

import { authorsReducer } from "./Authors";
import { currentPaintingsReducer } from "./CurrentPaintings";
import { locationReducer } from "./Location";
import { paginationReducer } from "./Pagination";
import { paintingsReducer } from "./Paintings";
import { themeReducer } from "./Theme";

export const rootReducer = combineReducers({
    authors: authorsReducer,
    theme: themeReducer,
    paintings: paintingsReducer,
    currentPaintings: currentPaintingsReducer,
    locations: locationReducer,
    pageNumber: paginationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
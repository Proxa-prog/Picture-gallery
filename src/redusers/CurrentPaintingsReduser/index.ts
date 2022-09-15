import { currentPaintingsAction, PaintingsAction } from "../../constants/PaintingsAction";
import { IPaintings } from "../../types/api/paintings";
import { ICurrentPaintingsAction, ICurrentPaintingsArray, IPaintingsAction, IPaintingsArray } from "../../types/type";

const initialState: ICurrentPaintingsArray = {
    currentPaintings: [],
}

export const currentPaintingsReduser = (state = initialState , action: ICurrentPaintingsAction): ICurrentPaintingsArray => {
    switch (action.type) {
        case currentPaintingsAction.GET_CURRENT_PAINTINGS:
            return {currentPaintings: action.payload}
        default:
             return state;
    }
};

export const getCurrentPaintingsAction = (payload: IPaintings[]) => ({type: currentPaintingsAction.GET_CURRENT_PAINTINGS, payload});
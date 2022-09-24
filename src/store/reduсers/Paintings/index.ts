import { PaintingsAction } from "../../../constants/PaintingsAction";
import { IPaintings } from "../../../types/api/paintings";
import { IPaintingsAction, IPaintingsArray } from "../../../types/type";

const initialState: IPaintingsArray = {
    paintings: [],
}

export const paintingsReducer = (state = initialState , action: IPaintingsAction): IPaintingsArray => {
    switch (action.type) {
        case PaintingsAction.GET_PAINTINGS:
            return {paintings: action.payload}
        default:
             return state;
    }
};

export const getPaintingsAction = (payload: IPaintings[]) => ({type: PaintingsAction.GET_PAINTINGS, payload});
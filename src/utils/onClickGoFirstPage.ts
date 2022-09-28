import { PAINTINGS_LIMIT } from "../constants/PaintingsLimit";
import { getPageOfNumberAction, paginationAction } from "../store/reduсers/pagination";
import { IPaintings } from "../types/api/paintings";
import { createParams } from "./createParams";
import { getCurrentPaintings } from "./filtering";

export const onClickGoFirstPage = (dispatch: any, paintings: IPaintings[]) => {
  const getPageOfNumber = Math.ceil(Math.ceil(paintings.length / 12));

    // @ts-ignore
    dispatch(getCurrentPaintings(createParams({
      _page: '1',
      _limit: `${PAINTINGS_LIMIT}`,
    })));
    dispatch(paginationAction(1));
    dispatch(getPageOfNumberAction(getPageOfNumber));
  };
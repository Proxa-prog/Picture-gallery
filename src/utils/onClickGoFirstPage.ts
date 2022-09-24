import { url } from "../constants/Url";
import { getPageOfNumberAction, paginationAction } from "../store/reduсers/Pagination";
import { IPaintings } from "../types/api/paintings";
import { getCurrentPaintings } from "./filtering";
import { getParams } from "./getParams";

export const onClickGoFirstPage = (dispatch: any, paintings: IPaintings[]) => {
    // @ts-ignore
    dispatch(getCurrentPaintings({
      method: "GET",
      url: url,
      params: getParams(),
      query: "?_page=1_limit=12",
    }));
    dispatch(paginationAction(1));
    dispatch(getPageOfNumberAction(Math.ceil(paintings.length / 12)));
  };
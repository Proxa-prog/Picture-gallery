import { paginationType } from "../../../constants/PaginationAction";
import { IPagination, IPaginationAction } from "../../../types/type";

const initialState: IPagination = {
  pageNumber: 1,
  numberOfPages: 1,
};

export const paginationReducer = (
  state = initialState,
  action: IPaginationAction
): IPagination => {
  switch (action.type) {
    case paginationType.SET_PAGE_NUMBER:
      return { ...state, pageNumber: action.payload };
    case paginationType.GET_NUMBER_OF_PAGES:
      return { ...state, numberOfPages: action.payload };
    default:
      return state;
  }
};

export const paginationAction = (payload: number) => ({
  type: paginationType.SET_PAGE_NUMBER,
  payload,
});
export const getPageOfNumberAction = (payload: number) => ({
  type: paginationType.GET_NUMBER_OF_PAGES,
  payload,
});

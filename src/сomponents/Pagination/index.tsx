import { useDispatch } from "react-redux";

import { Pagination } from "fwt-internship-uikit";

import { getCurrentPaintings } from "../../utils/filtering";
import { createParams } from "../../utils/createParams";

import { PAINTINGS_LIMIT } from "../../constants/PaintingsLimit";

import { useTypedSelectors } from "../../hooks/useTypedSelectors";
import { paginationAction } from "../../store/reduсers/pagination";

import "./style.scss";

export const PaginationWrapper = () => {
  const dispatch = useDispatch();
  const { theme } = useTypedSelectors((state) => state.theme);
  const { pageNumber, numberOfPages } = useTypedSelectors((state) => state.pageNumber);

  return (
    <Pagination
      pagesAmount={numberOfPages}
      currentPage={pageNumber}
      isDarkTheme={theme}
      onChange={(currentValue) => {
        dispatch(paginationAction(currentValue));

        // @ts-ignore
        dispatch(getCurrentPaintings(
          createParams({
            _page: `${currentValue}`,
            _limit: `${PAINTINGS_LIMIT}`,
          })));
      }}
    />
  );
};

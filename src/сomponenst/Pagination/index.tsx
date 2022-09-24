import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Pagination } from "fwt-internship-uikit";

import { getCurrentPaintings } from "../../utils/filtering";

import { useTypedSelectors } from "../../hooks/useTypedSelectors";
import { paginationAction } from "../../store/reduсers/Pagination";
import { getParams } from "../../utils/getParams";
import { url } from "../../constants/Url";
import { PAINTINGS_LIMIT } from "../../constants/PaintingsLimit";

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
        dispatch(getCurrentPaintings({
          method: "GET",
          url: url,
          params: getParams(),
          query: `?_page=${currentValue}&_limit=${PAINTINGS_LIMIT}`,
          isPagination: true,
        }));
      }}
    />
  );
};

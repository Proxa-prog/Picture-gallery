import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthors } from "../../API/authors";
import { getLocations } from "../../API/location";

import { getPaintings } from "../../API/painting";
import { useTypedSelectors } from "../../hooks/useTypedSelectors";
import { getCurrentPaintings } from "../../utils/filtering";

import { Header } from "../Layout/Header";
import { PaintingList } from "../Layout/PaintingList";
import { PaginationWrapper } from "../Pagination";

import "./style.scss";

export const Page = () => {
  const dispatch = useDispatch();
  const { theme } = useTypedSelectors((state) => state.theme);
  const { authors } = useTypedSelectors((state) => state.authors);

  const paramsObj = {
    _page: "1",
    _limit: "12",
  };
  const searchParams = new URLSearchParams(paramsObj);

  useEffect(() => {
    // @ts-ignore
    dispatch(getPaintings(""));
    // @ts-ignore
    dispatch(getCurrentPaintings(searchParams));
    // @ts-ignore
    dispatch(getLocations());
        // @ts-ignore

    dispatch(getAuthors(authors));
  }, []);

  return (
    <section className={`page page_${theme ? "black" : "white"}-theme`}>
      <Header />
      <PaintingList />
      <PaginationWrapper />
    </section>
  );
};

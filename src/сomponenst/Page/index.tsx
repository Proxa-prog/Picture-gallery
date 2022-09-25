import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getLocations } from "../../APi/location";
import { getPaintings } from "../../APi/painting";
import { useTypedSelectors } from "../../hooks/useTypedSelectors";
import { getCurrentPaintings } from "../../utils/filtering";

import { Header } from "../Layout/Header";
import { PaintingList } from "../Layout/PaintingList";
import { PaginationWrapper } from "../Pagination";

import "./style.scss";

export const Page = () => {
  const dispatch = useDispatch();
  const { theme } = useTypedSelectors((state) => state.theme);
  const { currentPaintings } = useTypedSelectors((state) => state.currentPaintings);

  const paramsObj = {
    _page: '1',
    _limit: '12',
  };
  const searchParams = new URLSearchParams(paramsObj);


  useEffect(() => {
    // @ts-ignore
    dispatch(getPaintings(""));
    // @ts-ignore
    dispatch(getCurrentPaintings(searchParams));
    // @ts-ignore
    dispatch(getLocations());
  }, []);

  return (
    <section
      className={`page page_${theme ? "black" : "white"}-theme`}
    >
      <Header />
      <PaintingList paintingsArray={currentPaintings} />
      <PaginationWrapper />
    </section>
  );
};
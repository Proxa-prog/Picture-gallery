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
  // const router = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useTypedSelectors((state) => state.theme);
  const { currentPaintings } = useTypedSelectors((state) => state.currentPaintings);

  useEffect(() => {
    // @ts-ignore
    dispatch(getPaintings(''));
    // @ts-ignore
    dispatch(getCurrentPaintings(''));
    // @ts-ignore
    dispatch(getLocations());
  }, []);
  return (
    <section
      className={`page__wrapper page__${theme ? "black" : "white"}-theme`}
    >
      <Header />
      <PaintingList paintingsArray={currentPaintings} />
      <PaginationWrapper />
    </section>
  );
};

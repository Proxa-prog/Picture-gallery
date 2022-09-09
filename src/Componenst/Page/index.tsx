import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPaintings } from "../../APi/painting";
import { useTypedSelectors } from "../../hooks/useTypedSelectors";

import { Header } from "../Layout/Header";
import { PaintingList } from "../Layout/PaintingList";
import { PaginationWrapper } from "../Pagination";

import "./style.scss";

export const Page = () => {
  // const router = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useTypedSelectors((state) => state.theme);
  const { paintings } = useTypedSelectors((state) => state.paintings);

  useEffect(() => {
    // @ts-ignore
    dispatch(getPaintings(''));
  }, []);

  return (
    <section
      className={`page__wrapper page__${theme ? "black" : "white"}-theme`}
    >
      <Header />
      <PaintingList paintingsArray={paintings} />
      <PaginationWrapper />
    </section>
  );
};

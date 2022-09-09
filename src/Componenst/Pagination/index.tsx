import { Pagination } from "fwt-internship-uikit";
import { useTypedSelectors } from "../../hooks/useTypedSelectors";

import "./style.scss";

export const PaginationWrapper = () => {
    const { theme } = useTypedSelectors((state) => state.theme);

  return (
    <Pagination
      pagesAmount={100}
      currentPage={2}
      isDarkTheme={theme}
      onChange={function (currentPage: number): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};

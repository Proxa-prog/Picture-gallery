import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Button from "../../UI/Button";
import logo from "../../../img/logo.png";
import { IconsSVG } from "../../UI/IconsSVG";
import { Img } from "../../UI/Img";
import { SelectWrapper } from "../../UI/Select";

import { getPaintings } from "../../../APi/painting";
import { filteringByAuthors, getAuthors } from "../../../APi/authors";

import { changeThemeAction } from "../../../redusers/Theme";
import { useTypedSelectors } from "../../../hooks/useTypedSelectors";

import "./style.scss";
import { TOption } from "../../../types/type";

export const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useTypedSelectors((state) => state.theme);
  const { authors } = useTypedSelectors((state) => state.authors);
  const { paintings } = useTypedSelectors((state) => state.paintings);

  const onClickChangeTheme = () => {
    dispatch(changeThemeAction(!theme));
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(getAuthors(authors));
  }, []);

  return (
    <section className="page__header header">
      <div className="header__logo-wrapper">
        <Img src={logo} alt="Логотип" width="68" height="68" />
        <Button className="header__button" onClick={onClickChangeTheme}>
          <IconsSVG
            name={theme ? "sun" : "sun_black"}
            size="20"
            className="header__theme-button"
          />
        </Button>
      </div>

      <div className="header__selected-wrapper">
        <SelectWrapper
          disabled={false}
          isDarkTheme={theme}
          options={authors}
          value="Name"
          onChange={(author: string, options: TOption[]) => {filteringByAuthors(dispatch, author, options)}}
        />
        {/* <SelectWrapper 
          disabled={false}
          isDarkTheme={theme}
          options={authors}
          value="Author"
        />
        <SelectWrapper 
          disabled={false}
          isDarkTheme={theme}
          options={authors}
          value="Location"
        />
        <SelectWrapper 
          disabled={false}
          isDarkTheme={theme}
          options={authors}
          value="Created"
        /> */}
      </div>
    </section>
  );
};

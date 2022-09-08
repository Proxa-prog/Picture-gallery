import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Button from "../../UI/Button";
import { IconsSVG } from "../../UI/IconsSVG";
import { Img } from "../../UI/Img";
import { Select } from "../../UI/Select";
import { getAuthors } from "../../../APi/authors";
import logo from "../../../img/logo.png";

import { changeThemeAction } from "../../../redusers/Theme";
import { useTypedSelectors } from "../../../hooks/useTypedSelectors";

import "./style.scss";

export const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useTypedSelectors(state => state.theme);
  const { authors } = useTypedSelectors(state => state.authors);

  const handlerClick = () => {
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
        <Button
          className="header__button"
          onClick={handlerClick}
        >
          <IconsSVG
            name={theme ? 'sun' : 'sun_black'}
            size="20"
            className="header__theme-button"
          />
        </Button>
      </div>

      <div className="header__selected-wrapper">
        <Select name="name" className="header__select" optionsArray={authors} />
        <Select name="name" className="header__select" optionsArray={authors} />
        <Select name="name" className="header__select" optionsArray={authors} />
        <Select name="name" className="header__select" optionsArray={authors} />
      </div>
    </section>
  );
};

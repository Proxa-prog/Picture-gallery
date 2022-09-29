import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

import Button from "../../UI/Button";
import { IconsSVG } from "../../UI/IconsSVG";
import logo from "../../../images/logo.png";
import { Img } from "../../UI/Img";
import { PgSelect } from "../../UI/PgSelect";

import { IPaintings } from "../../../types/api/paintings";
import { getAuthors } from "../../../API/authors";
import { getCurrentPaintings } from "../../../utils/filtering";
import { onClickGoFirstPage } from "../../../utils/onClickGoFirstPage";

import { changeThemeAction } from "../../../store/reduсers/theme";
import { useTypedSelectors } from "../../../hooks/useTypedSelectors";

import "./style.scss";

export const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useTypedSelectors((state) => state.theme);
  const { authors } = useTypedSelectors((state) => state.authors);
  const { paintings } = useTypedSelectors((state) => state.paintings);
  const { locations } = useTypedSelectors((state) => state.locations);

  const onClickChangeTheme = () => {
    dispatch(changeThemeAction(!theme));
  };

  const createdArray = useMemo(() => {
    let newArray;
    return newArray = paintings.map((painting: IPaintings) => {
      return {
        id: painting.id,
        name: painting.created,
      };
    });
  }, [paintings]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getAuthors(authors));
  }, []);

  return (
    <section className="header">
      <div className="header__logo-wrapper">
        <Button
          className="header__logo-button"
          onClick={() => onClickGoFirstPage(dispatch, paintings)}
        >
          <Img src={logo} alt="Логотип" width="68" height="68" />
        </Button>

        <Button className="header__button" onClick={onClickChangeTheme}>
          <IconsSVG
            name={theme ? "sun" : "sun_black"}
            size="20"
            className="header__theme-button"
          />
        </Button>
      </div>

      <div className="header__selected-wrapper">
        <PgSelect
          name="id"
          disabled={false}
          isDarkTheme={theme}
          options={paintings}
          value="Name"
          onChangeValueFetch={getCurrentPaintings}
        />
        <PgSelect
          name="authorId"
          disabled={false}
          isDarkTheme={theme}
          options={authors}
          value="Author"
          onChangeValueFetch={getCurrentPaintings}
        />
        <PgSelect
          name="locationId"
          disabled={false}
          isDarkTheme={theme}
          options={locations}
          value="Location"
          onChangeValueFetch={getCurrentPaintings}
        />
        <PgSelect
          name="created"
          disabled={false}
          isDarkTheme={theme}
          options={createdArray}
          value="Created"
          onChangeValueFetch={getCurrentPaintings}
        />
      </div>
    </section>
  );
};

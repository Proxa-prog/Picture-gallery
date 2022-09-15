import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Button from "../../UI/Button";
import logo from "../../../img/logo.png";
import { IconsSVG } from "../../UI/IconsSVG";
import { Img } from "../../UI/Img";
import { SelectWrapper } from "../../UI/Select";

import { getAuthors } from "../../../APi/authors";
import {
  filteringByAuthors,
  filteringByLocation,
  filteringByPaintingName,
  filteringCreated,
} from "../../../utils/filtering";

import { changeThemeAction } from "../../../redusers/Theme";
import { useTypedSelectors } from "../../../hooks/useTypedSelectors";

import "./style.scss";
import { IPaintings } from "../../../types/api/paintings";

export const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useTypedSelectors((state) => state.theme);
  const { authors } = useTypedSelectors((state) => state.authors);
  const { paintings } = useTypedSelectors((state) => state.paintings);
  const { locations } = useTypedSelectors((state) => state.locations);

  const onClickChangeTheme = () => {
    dispatch(changeThemeAction(!theme));
  };

  const createdArray = paintings.map((painting: IPaintings) => {
    return {
      id: painting.id,
      name: painting.created,
    };
  });

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
          options={paintings}
          value="Name"
          onChange={(currentValue: string) => {
            filteringByPaintingName(
              dispatch, 
              currentValue, 
              paintings
            );
          }}
        />
        <SelectWrapper
          disabled={false}
          isDarkTheme={theme}
          options={authors}
          value="Author"
          onChange={(currentValue: string) => {
            filteringByAuthors(
              dispatch, 
              currentValue, 
              authors);
            
          }}
        />
        <SelectWrapper
          disabled={false}
          isDarkTheme={theme}
          options={locations}
          value="Location"
          onChange={(currentValue: string) => {
            filteringByLocation(
              dispatch, 
              currentValue, 
              locations
            );
          }}
        />
        <SelectWrapper
          disabled={false}
          isDarkTheme={theme}
          options={createdArray}
          value="Created"
          onChange={(currentValue: string) => {
            filteringCreated(
              dispatch, 
              currentValue, 
              createdArray
            );
          }}
        />
      </div>
    </section>
  );
};

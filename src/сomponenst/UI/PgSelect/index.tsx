import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Select } from "fwt-internship-uikit";
import { url } from "../../../constants/Url";

import { TOption } from "../../../types/type";
import { getCurrentPaintings } from "../../../utils/filtering";

import "./style.scss";
import { getParams } from "../../../utils/getParams";
import { useTypedSelectors } from "../../../hooks/useTypedSelectors";
import {
  getPageOfNumberAction,
  paginationAction,
} from "../../../store/reduсers/Pagination";

interface IProps {
  name: string;
  disabled: boolean;
  options: TOption[];
  isDarkTheme: boolean;
  value: string;
  onChangeValueFetch?: any;
}

export const PgSelect: FC<IProps> = (props) => {
  const { 
    name,
    disabled,
    options,
    isDarkTheme,
    value,
    onChangeValueFetch
  } = props;

  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState(value);
  const { currentPaintings } = useTypedSelectors((state) => state.currentPaintings);

  useEffect(() => {
    if (!onChangeValueFetch) {
      return;
    }

    dispatch(
      onChangeValueFetch({
        method: "GET",
        url: url,
        params: getParams(options, selectedValue),
        query: name,
      })
    );
    dispatch(getPageOfNumberAction(Math.ceil(currentPaintings.length / 12)));
  }, [selectedValue]);

  return (
    <Select
      disabled={disabled}
      options={options}
      isDarkTheme={isDarkTheme}
      value={selectedValue}
      onChange={(currentValue) => {
        setSelectedValue(currentValue);
      }}
    />
  );
};

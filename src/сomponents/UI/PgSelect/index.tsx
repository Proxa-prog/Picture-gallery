import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Select } from "fwt-internship-uikit";

import { TOption } from "../../../types/type";

import { getParams } from "../../../utils/getParams";
import { createParams } from "../../../utils/createParams";
import { useTypedSelectors } from "../../../hooks/useTypedSelectors";
import { getPageOfNumberAction } from "../../../store/reduсers/pagination";

import "./style.scss";

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
  const getNumberOfPages = Math.ceil(currentPaintings.length / 12);

  useEffect(() => {
    if (!onChangeValueFetch) {
      return;
    }

    const selectObj = getParams(options, selectedValue);
    if (selectObj !== undefined) {
      let paramsObj;

      if (name === 'created') {
        paramsObj = {
          [name]: `${selectObj?.name}`,
        };
      } else {
        paramsObj = {
          [name]: `${selectObj?.id}`,
        };
      }

      dispatch(onChangeValueFetch(createParams(paramsObj)));
    }

    dispatch(getPageOfNumberAction(getNumberOfPages));
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

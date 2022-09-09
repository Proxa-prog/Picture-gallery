import { FC } from "react";

import { Select } from "fwt-internship-uikit";

import { TOption } from "../../../types/type";

import './style.scss';

interface IProps {
    disabled: boolean;
    options: TOption[];
    isDarkTheme: boolean;
    value: string;
    onChange: (author: string, options: TOption[]) => void;
}

export const SelectWrapper: FC<IProps> = (props) => {
    const {
        disabled,
        options,
        isDarkTheme,
        value,
        onChange
    } = props;
    
  return (
    <Select
      disabled={disabled}
      options={options}
      isDarkTheme={isDarkTheme}
      value={value}
      onChange={(value) => {onChange(value, options)}}
    />
  );
};

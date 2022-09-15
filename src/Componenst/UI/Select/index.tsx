import { FC, useState } from "react";

import { Select } from "fwt-internship-uikit";

import { TOption } from "../../../types/type";

import './style.scss';

interface IProps {
    disabled: boolean;
    options: TOption[];
    isDarkTheme: boolean;
    value: string;
    onChange: (currentValue: string) => void;
}

export const SelectWrapper: FC<IProps> = (props) => {
    const {
        disabled,
        options,
        isDarkTheme,
        value,
        onChange
    } = props;

    const [selectedOption, setSelectedOption] = useState(value);

  return (
    <Select
        disabled={disabled}
        options={options}
        isDarkTheme={isDarkTheme}
        value={selectedOption}
        onChange={(currentValue) => {
            setSelectedOption(currentValue);
            onChange(currentValue);
        }}
    />
  );
};

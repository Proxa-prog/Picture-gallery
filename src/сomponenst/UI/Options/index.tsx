import { FC } from "react";

import { nanoid } from "nanoid";

interface IOptions {
    name: string;
    inactive?: boolean;
    isHidden?: boolean;
    isSelected?: boolean;
    value?: string;
}

export const Options: FC<IOptions> = (props) => {
    const {
        name,
        inactive,
        isHidden,
        isSelected,
        value
    } = props;

    const optionId = nanoid();

    return (
        <option 
            key={optionId}
            value={value}
            disabled={inactive}
            hidden={isHidden}
            selected={isSelected}
        >
            {name}
        </option>
    )
};
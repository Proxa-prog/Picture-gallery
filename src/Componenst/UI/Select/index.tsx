import { nanoid } from "nanoid";
import { FC } from "react";
import { Options } from "../Options";

interface ISelect {
    name: string;
    optionsArray?: any;
    className: string;
}

interface IOptiondArray {

}

export const Select: FC<ISelect> = (props) => {
    const {
        name,
        optionsArray,
        className,
    } = props;

    return (
        <select
            placeholder="Name"
            name={name}
            className={className}
            defaultValue='Name'
        >
            {optionsArray.length !== 0
            ?
            optionsArray.map((option: any) => {
                const optionId = nanoid();

                return (
                    <Options
                        name={option.name}
                        key={optionId}
                        value={option.value}
                        inactive={option.inactive}
                        isHidden={option.isHidden}
                        isSelected={option.isSelected}
                    />)
            })
            :
            null
            }
        </select>
    )
};
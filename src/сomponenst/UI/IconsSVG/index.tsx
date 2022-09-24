import { FC } from "react";
import Icons from "../../../images/Svg/Sprite/Sprite.svg";

interface IIconProps {
    name: string;
    size: string;
    className: string;
}

export const IconsSVG: FC<IIconProps> = (props) => {
    const {
        name,
        size,
        className,
    } = props;

    return (
        <svg
            name={name}
            className={className}
            width={size} 
            height={size}  
            xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${Icons}#${name}`}></use>
        </svg>
    )
};
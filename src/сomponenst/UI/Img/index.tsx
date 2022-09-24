import { FC } from "react";

interface IImg {
    src: string;
    alt: string;
    width: string;
    height: string;
    onClick?: () => void;
}

export const Img: FC<IImg> = (props) => {
    const {
        src,
        alt,
        width,
        height,
        onClick,
    } = props;

    return (
        <img 
            src={src}
            alt={alt}
            width={width}
            height={height}
            onClick={onClick}
        />
    )
};
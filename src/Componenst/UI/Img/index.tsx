import { FC } from "react";

interface IImg {
    src: string;
    alt: string;
    width: string;
    height: string;
}

export const Img: FC<IImg> = (props) => {
    const {
        src,
        alt,
        width,
        height
    } = props;

    return (
        <img 
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    )
};
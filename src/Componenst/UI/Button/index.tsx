import { FC } from "react";

interface IButton {
    width: string;
    height: string
    className: string;
    children?: any;
    onClick?: (event: any) => void;
}

const Button: FC<IButton>  = (props) => {
    const {
        width,
        height,
        className,
        children,
        onClick,
    } = props;

    return (
      <button 
        className={className}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  
import { FC } from "react";

interface IButton {
    className: string;
    children?: any;
    onClick?: (event: any) => void;
}

const Button: FC<IButton>  = (props) => {
    const {
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
  
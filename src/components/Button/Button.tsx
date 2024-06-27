import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button = ({
    onClick,
    children,
    color = "primary",
    disabled,
}: ButtonProps) => {
    return (
    <button 
        onClick={onClick} 
        className={`btn btn-${color}`} 
        disabled={disabled}
    >
        {children}
    </button>
);
};

export default Button;
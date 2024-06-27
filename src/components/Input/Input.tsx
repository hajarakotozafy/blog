import { FC } from "react";
import { InputProps } from "./Input.types";
import "./Input.scss";

const Input: FC<InputProps> = ({
    type,
    label,
    value,
    name,
    error,
    disabled,
    onChange,
    containsValue,
    errorMessage
}) => {
    
    return (
        <div className="input-wrapper">
            <input
                type={type}
                id={label}
                value={value}
                name={name}
                onChange={onChange}
                disabled={disabled}
                className={containsValue?'focus':''}
            />
            <label htmlFor={label} className="placeholder">{label}</label>
            {error && <p className="error">{errorMessage}</p>}
        </div>
)
}

export default Input;
import { FC, useContext } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./ThemeSwitcher.scss";

const ThemeSwitcher:FC = () => {
	const { theme, setTheme} = useContext(ThemeContext);

	const themeHandler = () => {
		if(theme === `light`){
			setTheme(`dark`);
		}else{
			setTheme(`light`);
		}
	};

	return (
		<div className="theme-switcher" onClick={themeHandler}>
			{
				theme === 'dark' ? (
					<FaSun/>
				): (
					<FaMoon/>
				)
			}
		</div>
	)	
}

export default ThemeSwitcher;
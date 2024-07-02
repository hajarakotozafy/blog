import { type ReactNode, useEffect, useState } from 'react';
import { ThemeContext, initialThemeState } from "../contexts/ThemeContext";

type Props = {
	children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState(initialThemeState.theme);

	useEffect(() => {
		const savedThemeLocal = localStorage.getItem(`globalTheme`);

		if(!!savedThemeLocal){
			setTheme(savedThemeLocal);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(`globalTheme`, theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className={`theme--${theme}`}>{children}</div>
		</ThemeContext.Provider>
	);

};

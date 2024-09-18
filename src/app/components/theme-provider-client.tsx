"use client";

import React from "react";
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ThemeProviderClientProps {
	children: React.ReactNode;
}

const ThemeProviderClient: React.FC<ThemeProviderClientProps> = ({
	children,
}) => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme: Theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? "dark" : "light",
				},
			}),
		[prefersDarkMode]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default ThemeProviderClient;

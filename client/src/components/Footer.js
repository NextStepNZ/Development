import React from "react";
import { GlobalStyles } from "./Themes/GlobalStyles";
import { lightTheme } from "./Themes/Themes";
import { darkTheme } from "./Themes/Themes";
import { ThemeProvider } from "styled-components";
import { useState } from "react";





const Footer = () => {
    const year = new Date().getFullYear();
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return <footer>{`Copyright © NextStep ${year}`}
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <div>
                <GlobalStyles />
                <button class="themeButton" onClick={themeToggler}>Switch Theme</button>
            </div>
        </ThemeProvider>
    </footer>;

};

export default Footer;
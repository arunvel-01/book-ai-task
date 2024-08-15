import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const Header = ({ toggleTheme, lightMode }) => {
    return (
        <header>
            <h1>Book Generator API</h1>
            <div className="button-container">
                <Tooltip title={lightMode ? "Toggle Dark Mode" : "Toggle Light Mode"}>
                    <IconButton
                        onClick={toggleTheme}
                        id="theme-toggle-button"
                        className="theme-toggle-button"
                        aria-label={lightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
                        aria-pressed={lightMode ? "false" : "true"}
                    >
                        {lightMode ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                </Tooltip>
            </div>
        </header>
    );
};

export default Header;

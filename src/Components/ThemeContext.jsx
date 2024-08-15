import React, { createContext, useContext } from 'react';

// Create a ThemeContext with a default value of true (light mode)
const ThemeContext = createContext(true);

// ThemeProvider component to provide the theme context to its children
export const ThemeProvider = ({ value, children }) => {
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
    return useContext(ThemeContext);
};

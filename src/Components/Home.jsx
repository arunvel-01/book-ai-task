import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Overview from './Overview';
import Authentication from './Authentication';
import Endpoints from './Endpoints';
import Tutorial from './Tutorial';
import CodeExamples from './CodeExamples';
import Pricing from './Pricing';
import { ThemeProvider } from './ThemeContext';


const Home = () => {
    const [lightMode, setLightMode] = useState(false); // Default to light mode

    const toggleTheme = () => {
        setLightMode(prevMode => !prevMode);
    };

    return (
        <ThemeProvider value={lightMode}>
            <div className={lightMode ? 'light-mode' : 'dark-mode'}>
                <Header toggleTheme={toggleTheme}  lightMode={lightMode}/>
                <Navbar />
                <main>
                    <Overview />
                    <Authentication />
                    <Endpoints />
                    <Tutorial />
                    <CodeExamples />
                    <Pricing />
                </main>
            </div>
        </ThemeProvider>
    );
};

export default Home;

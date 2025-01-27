import React, { useState, useEffect } from 'react';

const LightDark = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle theme mode
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Apply theme to the body
    // useEffect(() => {
    //     if (isDarkMode) {
    //         document.body.classList.add('dark');
    //     } else {
    //         document.body.classList.remove('dark');
    //     }
    // }, [isDarkMode]);

    return (
        <div className={`flex items-center justify-center m-10 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div
                className={`shadow-lg rounded-lg p-6 w-full max-w-xl ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
                    }`}
            >
                <h1 className="text-orange-500 text-4xl font-bold text-center mb-6">Light-Dark Mode</h1>
                <div className="flex flex-col gap-4 p-4 rounded-lg shadow-inner">
                    {/* Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className={`py-2 px-4 rounded-lg font-bold transition duration-200 ${isDarkMode
                            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                            : 'bg-blue-500 text-white hover:bg-blue-400'
                            }`}
                    >
                        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LightDark;

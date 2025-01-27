import React, { useState } from 'react';

const RandomColor = () => {
    const [hexSelected, setHexSelected] = useState(false);
    const [rgbSelected, setRgbSelected] = useState(false);
    const [color, setColor] = useState('');

    // Random HEX color generator
    const randomColorGenerator = () => {
        const colorLetter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += colorLetter[Math.floor(Math.random() * colorLetter.length)];
        }
        setColor(color);
    };

    // Random RGB color generator
    const randomRgbGenerator = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColor(`rgb(${r}, ${g}, ${b})`);
    };

    // Handle the color generation based on selected type
    const handleColorGeneration = () => {
        if (hexSelected) {
            randomColorGenerator();
        } else if (rgbSelected) {
            randomRgbGenerator();
        } else {
            alert('select color type')
            return
        }
    };

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-xl">
                <h1 className="text-orange-500 text-4xl font-bold text-center mb-6">Random Color</h1>
                <div className="flex justify-between bg-white text-black p-4 rounded-lg shadow-inner">
                    <button
                        onClick={() => {
                            setHexSelected(true);
                            setRgbSelected(false);
                        }}
                        className="bg-blue-700 text-white p-2 rounded hover:bg-blue-500"
                    >
                        HEX COLOR
                    </button>
                    <button
                        onClick={() => {
                            setRgbSelected(true);
                            setHexSelected(false);
                        }}
                        className="bg-orange-700 text-white p-2 rounded hover:bg-orange-500"
                    >
                        RGB
                    </button>
                    <button
                        onClick={handleColorGeneration}
                        className="bg-green-700 text-white p-2 rounded hover:bg-green-500"
                    >
                        RANDOM
                    </button>
                </div>
                <div className="flex flex-col mt-12 justify-between items-center">
                    <p className="text-orange-400">{hexSelected ? `HEX: ${color}` : `RGB: ${color}`}</p>
                    <div
                        className="mt-12 h-[400px] w-[400px]"
                        style={{ backgroundColor: color ? color : 'white' }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default RandomColor;

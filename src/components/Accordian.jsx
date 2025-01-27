import React, { useState } from 'react';
import data from '../accordianData.js';

const Accordion = () => {
    const [openSections, setOpenSections] = useState([]);
    const [multipleEnabled, setMultipleEnabled] = useState(false);

    const toggleSection = (index) => {
        if (multipleEnabled) {
            // Toggle multiple sections
            setOpenSections((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            );
        } else {
            // Toggle single section
            setOpenSections((prev) => (prev.includes(index) ? [] : [index]));
        }
    };

    const toggleMultipleMode = () => {
        setMultipleEnabled((prev) => !prev);
        setOpenSections([]);
    };

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-xl">
                <h1 className="text-orange-500 text-4xl font-bold text-center mb-6">Accordion</h1>
                <div className="flex flex-col gap-4 bg-white text-black p-4 rounded-lg shadow-inner">
                    <button
                        onClick={toggleMultipleMode}
                        className={`py-3 px-5 rounded-lg shadow-md font-semibold ${multipleEnabled
                            ? 'bg-green-800 text-white hover:bg-green-900'
                            : 'bg-gray-300 text-black hover:bg-gray-400'
                            } transition duration-300`}
                    >
                        {multipleEnabled ? 'Disable Multiple Sections' : 'Enable Multiple Sections'}
                    </button>
                    {data.map((item, index) => (
                        <div
                            key={item.id}
                            className="bg-cyan-800 text-white rounded-lg p-4 shadow-md transition duration-300"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">{item.question}</h3>
                                <button
                                    onClick={() => toggleSection(index)}
                                    className="bg-black rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition duration-300"
                                >
                                    {openSections.includes(index) ? '-' : '+'}
                                </button>
                            </div>
                            {openSections.includes(index) && (
                                <p className="text-sm mt-2">{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Accordion;

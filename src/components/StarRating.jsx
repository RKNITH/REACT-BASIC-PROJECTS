import React, { useState } from 'react';

const StarRating = () => {

    const [rating, setRating] = useState(0);

    const handleStarClick = (index) => {
        setRating(index + 1);
    };

    return (
        <div className="flex items-center justify-center m-10">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-xl">
                <h1 className="text-orange-500 text-4xl font-bold text-center mb-6">Rating</h1>
                <div className="flex flex-col gap-4 bg-white text-black p-4 rounded-lg shadow-inner">
                    <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((star, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                fill={rating >= star ? "yellow" : "gray"} // Change color based on rating
                                className="w-8 h-8 cursor-pointer"
                                viewBox="0 0 20 20"
                                onClick={() => handleStarClick(index)}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 15l-5.146 3.03 1.047-6.116L.79 6.974l6.196-.548L10 0l2.964 5.426 6.196.548-4.111 5.94 1.047 6.116L10 15z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ))}
                    </div>
                    <p className="text-center text-orange-400 mt-4">Rating: {rating} / 5</p>
                </div>
            </div>
        </div>
    );
};

export default StarRating;

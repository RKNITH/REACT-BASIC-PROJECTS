import React, { useEffect, useState } from 'react';

const ImageSlider = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const YOUR_ACCESS_KEY = import.meta.env.VITE_YOUR_ACCESS_KEY;


    // Fetch image data from Unsplash API
    useEffect(() => {
        const fetchImages = async () => {
            try {
                // Corrected URL with template literal to inject YOUR_ACCESS_KEY
                const response = await fetch(
                    `https://api.unsplash.com/photos?client_id=${YOUR_ACCESS_KEY}&per_page=10`
                );
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    // Go to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Go to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex items-center justify-center m-10">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-xl">
                <h1 className="text-orange-500 text-4xl font-bold text-center mb-6">Image Slider</h1>
                <div className="flex flex-col gap-4 bg-white text-black p-4 rounded-lg shadow-inner">
                    {images.length > 0 ? (
                        <>
                            <div className="flex justify-center mb-4">
                                <img
                                    src={images[currentIndex].urls.regular}
                                    alt="slider"
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={prevImage}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-full"
                                >
                                    Prev
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-full"
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className="text-center">Loading images...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;

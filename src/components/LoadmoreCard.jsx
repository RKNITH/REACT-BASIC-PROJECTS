import React, { useEffect, useState } from 'react';

const LoadmoreCard = () => {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [limitReached, setLimitReached] = useState(false);

    // Fetch product data from the API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                setProducts(data.products);
                setVisibleProducts(data.products.slice(0, 10));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    // Handle "Load More" button click
    const loadMoreProducts = () => {
        if (visibleProducts.length < products.length) {
            const nextProducts = products.slice(visibleProducts.length, visibleProducts.length + 10);
            setVisibleProducts([...visibleProducts, ...nextProducts]);


            if (visibleProducts.length + nextProducts.length >= 100) {
                setLimitReached(true);
                setHasMore(false);
            }
        }
    };

    return (
        <div className="flex items-center justify-center m-10">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-xl">
                <h1 className="text-orange-500 text-4xl font-bold text-center mb-6">Load More Products</h1>
                <div className="flex flex-col gap-4 bg-white text-black p-4 rounded-lg shadow-inner">
                    {visibleProducts.length > 0 ? (
                        visibleProducts.map((product) => (
                            <div key={product.id} className="flex flex-col bg-gray-200 p-4 rounded-lg mb-4 shadow-md">
                                <h2 className="text-xl font-bold">{product.title}</h2>
                                <p className="text-sm text-gray-600">{product.description}</p>
                                <p className="text-lg font-semibold text-gray-800">Price: ${product.price}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">Loading products...</p>
                    )}

                    {/* Load More Button or Message */}
                    {hasMore && !limitReached && (
                        <button
                            onClick={loadMoreProducts}
                            className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 w-full hover:bg-blue-700"
                        >
                            Load More
                        </button>
                    )}

                    {limitReached && (
                        <p className="text-center text-red-500 font-semibold mt-4">
                            You have reached the max product limit.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoadmoreCard;

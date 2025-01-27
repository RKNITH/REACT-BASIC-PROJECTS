import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    // Update scroll percentage on scroll
    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        setScrollPercentage(scrollPercent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Scroll Indicator */}
            <div
                style={{ width: `${scrollPercentage}%` }}
                className="fixed top-0 left-0 h-2 bg-orange-500 transition-all duration-200"
            ></div>


        </div>
    );
};

export default ScrollIndicator;

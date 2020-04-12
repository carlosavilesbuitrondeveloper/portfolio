import React from 'react';

const ScrollDown = () => {
    return (
        <div className="scroll-down light">
            <a href="#about" className="mouse-wrapper">
                <span>Scroll Down</span>
                <span className="mouse">
                    <span className="wheel" />
                </span>
            </a>
        </div>);
};

export default ScrollDown;
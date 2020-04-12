import React from 'react';

const ProgressBar = ({progress, colorHex, colorRGB}) => {
    return (
        <div className="progress">
            <div 
                className="progress-bar data-background" 
                role="progressbar" 
                aria-valuemin={0} 
                aria-valuemax={progress} 
                aria-valuenow={progress} 
                data-color={colorHex}
                style={{ backgroundColor: {colorRGB}, width: `${progress}%` }}>
            </div>
        </div>);
};

export default ProgressBar;
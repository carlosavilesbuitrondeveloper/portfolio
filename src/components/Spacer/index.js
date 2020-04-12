import React from 'react';

const Spacer = ({height, classListing}) =>{
    return(<div className={classListing} data-height={height} style={{ height: `${height}px` }} />);
};

export default Spacer;
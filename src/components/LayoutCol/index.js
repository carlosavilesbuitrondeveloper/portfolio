import React from 'react';

const LayoutCol = ({classList, children, delay}) =>{
    return(<div className={classList} data-wow-delay={delay ? "delay" : '0s'}>{children}</div>);
};

export default LayoutCol;
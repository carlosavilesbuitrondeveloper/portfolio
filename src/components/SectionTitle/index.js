import React from 'react';

const SectionTitle = ({title, visibility, animationName}) =>{
    return(
        <h2 className={`section-title wow ${animationName}`} style={{ visibility: visibility, animationName: animationName }}>{title}</h2>
    );
};

export default SectionTitle;
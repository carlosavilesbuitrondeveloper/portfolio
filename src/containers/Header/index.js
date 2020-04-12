import React from 'react';
//components
import MobileHeader from '../../components/MobileHeader';
import DesktopHeader from '../../components/DesktopHeader';

const Header = ({content}) =>{
    return(
    <>
        <MobileHeader content={content} />
        <DesktopHeader content={content} />
    </>
    );
};

export default Header;
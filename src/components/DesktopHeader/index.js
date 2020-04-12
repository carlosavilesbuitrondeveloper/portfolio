import React from 'react';
//components
import Nav from '../Nav';
import Footer from '../Footer';

const DesktopHeader = ({content}) => {
    return (
    <header className="desktop-header-1 light d-flex align-items-start flex-column">

        {/* logo image */}
        <div className="site-logo">
            <a href="/">
                <img src={process.env.PUBLIC_URL + content.logo} alt={content.siteTitle} />
            </a>
        </div>

        {/* main menu */}
        <Nav content={content.nav} />

        {/* site footer */}
        <Footer content={content.footer} />

    </header>
    );
};

export default DesktopHeader;
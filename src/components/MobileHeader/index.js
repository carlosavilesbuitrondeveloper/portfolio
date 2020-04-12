import React from 'react';
//components
import LayoutContainer from '../LayoutContainer';

const MobileHeader = ({content}) => {
    return (
        <header className="mobile-header-1 light">
            <LayoutContainer>

                {/* menu icon */}
                <div className="menu-icon d-inline-flex mr-4">
                    <button>
                        <span />
                    </button>
                </div>

                {/* logo image */}
                <div className="site-logo">
                    <a href="#home">
                        <img src={process.env.PUBLIC_URL + content.logo} alt={content.siteTitle} />
                    </a>
                </div>

                </LayoutContainer>
        </header>
    );
};

export default MobileHeader;
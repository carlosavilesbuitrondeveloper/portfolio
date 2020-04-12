import React from 'react';

const Nav = ({content}) => {

    const renderNav = () =>{
        const render = content.map((link, index)=>{
            return(
                <li key={index} className={index === 0 ? 'active' : ''}>
                    <a href={`${!link.isStatic ? '#': ''}${link.url}`} className="nav-link"><i className={link.icon} />{link.label}</a>
                </li>
            );
        });

        return render;
    };

    return (
        <nav>
            <ul className="vertical-menu scrollspy">
                {renderNav()}
            </ul>
        </nav>
    );
};

export default Nav;
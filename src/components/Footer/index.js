import React from 'react';

const Footer = ({content}) => {
    return (
    <div className="footer">
        {/* copyright text */}
        <span className="copyright">&copy; {content}</span>
    </div>);
};

export default Footer;
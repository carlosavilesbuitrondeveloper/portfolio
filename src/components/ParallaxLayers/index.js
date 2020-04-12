import React from 'react';
//plugins
import { FaAws, FaJsSquare,  FaHtml5, FaCss3Alt, FaReact, FaAngular, FaWordpress, FaGitSquare, FaNodeJs} from 'react-icons/fa';
import {DiPostgresql, DiMongodb} from 'react-icons/di';
 
const ParallaxLayers = () => {
    return (
        <div className="parallax" data-relative-input="true" style={{ transform: 'translate3d(0px, 0px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}>
            <FaAws width={15} height={23} data-depth="0.3" className="layer p1" style={{ transform: 'translate3d(-11.2175px, -326.871px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }} />
            <FaJsSquare width={26} height={26} data-depth="0.2" className="layer p2" style={{ transform: 'translate3d(-7.47833px, -217.914px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }} />
            <FaHtml5 width={30} height={25} data-depth="0.3" className="layer p3" style={{ transform: 'translate3d(-11.2175px, -326.871px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }} />
            <FaCss3Alt width={15} height={23} data-depth="0.6" className="layer p4" style={{ transform: 'translate3d(-22.435px, -653.742px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }} />
            <FaReact width={15} height={23} data-depth="0.2" className="layer p5" style={{ transform: 'translate3d(-7.47833px, -217.914px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }} />
            <FaAngular width={49} height={17} data-depth="0.5" className="layer p6" style={{ transform: 'translate3d(-18.6958px, -544.785px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }} />
            <FaWordpress width={26} height={26} data-depth="0.4" className="layer p7" style={{ transform: 'translate3d(-14.9567px, -435.828px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }} />
            <FaGitSquare width={19} height={21} data-depth="0.3" className="layer p8" style={{ transform: 'translate3d(-11.2175px, -326.871px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }} />
            <FaNodeJs width={30} height={25} data-depth="0.3" data-depth-y="-1.30" className="layer p9" style={{ transform: 'translate3d(-11.2175px, -326.871px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }} />
            <DiPostgresql width={47} height={29} data-depth="0.2" className="layer p10" style={{ transform: 'translate3d(-7.47833px, -217.914px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }} />
            <DiMongodb width={33} height={20} data-depth="0.5" className="layer p11" style={{ transform: 'translate3d(-18.6958px, -544.785px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }} />
        </div>
        );
};


export default ParallaxLayers;
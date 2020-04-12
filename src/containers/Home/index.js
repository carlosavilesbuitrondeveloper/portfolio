import React from 'react';
//components
import ParallaxLayers from '../../components/ParallaxLayers';
import ScrollDown from '../../components/ScrollDown';
import LayoutContainer from '../../components/LayoutContainer';


const Home = ({content}) => {

    const renderSocial = () =>{
        const render = content.social.map((site)=>{
            return(<li key={site.name} className="list-inline-item"><a href={site.link}><i className={`fab ${site.icon}`} /></a></li>);
        });

        return render;
    };

    return (
    <section id="home" className="home d-flex light align-items-center">

        <LayoutContainer>

            {/* intro */}
            <div className="intro">

                {/* avatar image */}
                <img src={process.env.PUBLIC_URL + content.img} alt="Carlos Aviles Buitron" className="mb-4" style={{borderRadius: '50%'}} />

                {/* info */}
                <h1 className="mb-2 mt-0">{content.name}</h1>
                <span>{content.title}</span>

                {/* social icons */}
                <ul className="social-icons light list-inline mb-0 mt-4">
                    {renderSocial()}
                </ul>

            </div>

            {/* scroll down mouse wheel */}
            <ScrollDown />

            {/* parallax layers */}
            <ParallaxLayers />
           
        </LayoutContainer>

    </section>
    );
};

export default Home;
import React from 'react';
//plugins
import { FaAws, FaJsSquare,  FaHtml5} from 'react-icons/fa';
//components
import LayoutContainer from '../../components/LayoutContainer';
import LayoutRow from '../../components/LayoutRow';
import LayoutCol from '../../components/LayoutCol';
import SectionTitle from '../../components/SectionTitle';
import Spacer from '../../components/Spacer';

const Services = ({content}) => {

    const renderIcon = (name) =>{
        switch(name){
            case 'aws':
                return(<FaAws/>);
                break;
            case 'js':
                return(<FaJsSquare/>);
                break;
            case 'html':
                return(<FaHtml5/>);
                break;
            default:
                return(<FaHtml5/>);
        }
    };

    const renderServices = () => {
        const render = content.list.map((service) => {
            return (
            <LayoutCol classList="col-md-4" key={service.name} delay={service.delay}> 
                <div 
                    className={`service-box rounded data-background padding-30 text-center ${service.textIsLight ? 'text-light': ''} ${service.shadowClass}`} 
                    data-color={service.colorHex}
                    style={{ backgroundColor: service.colorRGB }}

                >
                    {renderIcon(service.image)}
                    <h3 className="mb-3 mt-0">{service.name}</h3>
                    <p className="mb-0">{service.description}</p>
                </div>
                {service.hasSpacer && (<div className="spacer d-md-none d-lg-none" data-height={30} style={{ height: '30px' }} />)}
            </LayoutCol>);
        });

        return render;
    };

    return (
        <section id="skills">

            <LayoutContainer>

                {/* section title */}
                <SectionTitle title={content.sectionTitle} visibility="visible" animationName="fadeInUp" />

                <Spacer height={60} classListing="spacer" />

                <LayoutRow>
                    {/* services */}
                    {renderServices()}
                </LayoutRow>

                {/* Contact Link */}
                <div className="mt-5 text-center">
                    <p className="mb-0">Looking for a custom job? <a href="#contact">Click here</a> to contact me!</p>
                </div>

            </LayoutContainer>

        </section>
    );
};

export default Services;
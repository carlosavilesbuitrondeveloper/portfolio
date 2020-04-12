import React from 'react';
//components
import LayoutContainer from '../../components/LayoutContainer';
import LayoutRow from '../../components/LayoutRow';
import LayoutCol from '../../components/LayoutCol';
import SectionTitle from '../../components/SectionTitle';
import Spacer from '../../components/Spacer';


const Experience = ({content}) => {

    const TimelineWrapper = ({type, children}) =>{
        return(
            <div className={`timeline ${type} bg-white rounded shadow-dark padding-30 overflow-hidden`}>
    
                {children}
    
                {/* main line */}
                <span className="line" />
    
            </div>
        );
    };

    const renderTimeline = (timeline) => {
        const render = timeline.map((item) => {
            return (
                <div 
                    key={item.title} 
                    className="timeline-container wow fadeInUp" 
                    data-wow-delay={item.delay} 
                    style={{ visibility: 'visible', animationDelay: item.delay, animationName: 'fadeInUp' }}
                >
                    <div className="content">
                        <span className="time">{item.time}</span>
                        <h3 className="title">{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            );
        });

        return render;
    };

    return (
        <section id="experience">

            <LayoutContainer>

                {/* section title */}
                <SectionTitle title={content.sectionTitle} visibility="visible" animationName="fadeInUp" />

                <Spacer height={60} classListing="spacer" />

                <LayoutRow>

                    <LayoutCol classList="col-md-6">

                        {/* timeline education*/}
                        <TimelineWrapper type="exp">
                            {renderTimeline(content.timeLineExp)}
                        </TimelineWrapper>

                    </LayoutCol>

                    <LayoutCol classList="col-md-6">

                        {/* responsive spacer */}
                        <Spacer height={30} classListing="spacer d-md-none d-lg-none" />

                        {/* timeline experience*/}
                        <TimelineWrapper type="edu">
                            {renderTimeline(content.timeLineEdu)}
                        </TimelineWrapper>

                    </LayoutCol>

                </LayoutRow>

                <LayoutRow>
                    <LayoutCol classList="col-sm-12 text-center">

                        {/* responsive spacer */}
                        <Spacer height={30} classListing="spacer" />

                        <div className="mt-4">
                            <a href={content.resume} className="btn btn-default">Download Full CV</a>
                        </div>

                    </LayoutCol>
                </LayoutRow>

            </LayoutContainer>


            
            
            

        </section>
    );
};

export default Experience;
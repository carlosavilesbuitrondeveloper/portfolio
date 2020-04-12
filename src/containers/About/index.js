import React from 'react';
//components
import LayoutContainer from '../../components/LayoutContainer';
import LayoutRow from '../../components/LayoutRow';
import LayoutCol from '../../components/LayoutCol';
import SectionTitle from '../../components/SectionTitle';
import Spacer from '../../components/Spacer';
import ProgressBar from '../../components/ProgressBar';

const Home = ({ content }) => {

    const renderSkills = () => {
        const render = content.skills.map((skill) => {
            return (
                <div className="skill-item" key={skill.name}>

                    <div className="skill-info clearfix">
                        <h4 className="float-left mb-3 mt-0">{skill.name}</h4>
                        <span className="float-right">{skill.value}%</span>
                    </div>

                    <ProgressBar progress={skill.value} colorHex={skill.colorHex} colorRGB={skill.colorRGB} />
                    <Spacer height={20} classListing="spacer" />

                </div>
            );
        });

        return render;
    };

    return (
        <section id="about">

            <LayoutContainer>

                {/* section title */}
                <SectionTitle title="About Me" visibility="visible" animationName="fadeInUp" />

                <Spacer height={60} classListing="spacer" />

                <LayoutRow>

                    <LayoutCol classList="col-md-12">

                        <div className="rounded bg-white shadow-dark padding-30">

                            <LayoutRow>

                                <LayoutCol classList="col-md-6">

                                    {/* about text */}
                                    <p>{content.intro}</p>

                                    <div className="mt-3">
                                        <a href={content.cvUrl} className="btn btn-default">Download CV</a>
                                    </div>

                                    <Spacer height={30} classListing="spacer d-md-none d-lg-none" />

                                </LayoutCol>

                                <LayoutCol classList="col-md-6">

                                    {/* skill items */}
                                    {renderSkills()}

                                </LayoutCol>

                            </LayoutRow>

                        </div>

                    </LayoutCol>

                </LayoutRow>

                {/* row end */}
                <Spacer height={30} classListing="spacer" />

            </LayoutContainer>

        </section>
    );
}

export default Home;
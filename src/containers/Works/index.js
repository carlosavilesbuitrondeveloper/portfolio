import React from 'react';
//components
import LayoutContainer from '../../components/LayoutContainer';
import SectionTitle from '../../components/SectionTitle';
import Spacer from '../../components/Spacer';

const Works = ({content}) => {

    const renderCategoryMenu = (categoryType) => {

        const render = content.categoryList.map((category) => {

            if (categoryType === "mobile") {
                return (<option key={category} value={`.${category.toLowerCase()}`}>{category}</option>);
            }

            return (<li key={category} className="list-inline-item" data-filter={`.${category.toLowerCase()}`}>{category}</li>);
        });

        return render;
    };

    const renderPortfolioItem = () => {

        const render = content.portfolioList.map((item, index) => {

            let itemTypes = "";

            item.itemType.forEach((type)=>{
                itemTypes += type + ' ';
            });

            return (
                <div key={index} className={`col-md-4 col-sm-6 grid-item ${itemTypes}`}>
                    <a href={`#${index}_dialog`} className={item.modalType}>
                        <div className="portfolio-item rounded shadow-dark">
                            <div className="details">
                                <span className="term">{item.category}</span>
                                <h4 className="title">{item.title}</h4>
                                <span className="more-button"><i className="icon-options" /></span>
                            </div>
                            <div className="thumb">
                                <img src={process.env.PUBLIC_URL + item.thumb} alt={item.title} />
                                <div className="mask" />
                            </div>
                        </div>
                    </a>
                    <div id={`${index}_dialog`} className="white-popup zoom-anim-dialog mfp-hide">
                        <img src={process.env.PUBLIC_URL + item.modal.image} alt={item.title} />
                        <h2>{item.modal.title}</h2>
                        <p>{`${item.modal.content}`}</p>
                        <a href={item.modal.link} className="btn btn-default">View Project</a>
                    </div>
                </div>);
        });

        return render;
    };

    return (
        <section id="portfolio">

            <LayoutContainer>

                {/* section title */}
                <SectionTitle title={content.sectionTitle} visibility="visible" animationName="fadeInUp" />

                <Spacer height={60} classListing="spacer" />

                {/* portfolio filter (desktop) */}
                <ul className="portfolio-filter list-inline wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                    <li className="current list-inline-item" data-filter="*">Everything</li>
                    {renderCategoryMenu("desktop")}
                </ul>

                {/* portfolio filter (mobile) */}
                <div className="pf-filter-wrapper">
                    <select className="portfolio-filter-mobile">
                        <option value="*">Everything</option>
                        {renderCategoryMenu("mobile")}
                    </select>
                </div>

                {/* portolio wrapper */}
                <div className="row portfolio-wrapper">
                   {renderPortfolioItem()}
                </div>

            </LayoutContainer>

        </section>
    );
};

export default Works;
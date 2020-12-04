import React from 'react';

//containers
import Header from './containers/Header';
import Home from './containers/Home';
import About from './containers/About';
import Services from './containers/Services';
import Experience from './containers/Experience';
import Works from './containers/Works';
import Contact from './containers/Contact';

//components
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';



//content
import SiteContent from './data/content';


const App = () => {
  return (
    <div className="App">

      <Preloader />
      <Header content={SiteContent.header} />

      <main className="content">

        <Home content={SiteContent.home} />
        <About content={SiteContent.about} />
        <Services content={SiteContent.services} />
        <Experience content={SiteContent.expierience} />
        <Works content={SiteContent.works} />
        <Contact content={SiteContent.contact} />

        <div className="spacer" data-height={96} style={{ height: '96px' }} />

      </main>

      {/* Go to top button */}
      <BackToTop />

    </div>
  );
};

export default App;

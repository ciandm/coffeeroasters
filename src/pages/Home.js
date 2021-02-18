import React from 'react'
import homeData from './pageData/homeData';

// COMPONENTS
import SimpleSteps from '../components/shared/SimpleSteps';
import HeroImage from '../components/shared/HeroImage';
import Nav from '../components/shared/Nav';
import OurCollection from '../components/Home/OurCollection';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Footer from '../components/shared/Footer';

function Home() {
  return (
    <>
      <Nav />
      <HeroImage
        {...homeData.heroSection}
      />
      <OurCollection
        {...homeData.ourCollection}
      />
      <WhyChooseUs
        {...homeData.whyChooseUs}
      />
      <SimpleSteps
        variation="light"
        {...homeData.simpleSteps}
      />
      <Footer />
    </>
  )
}

export default Home

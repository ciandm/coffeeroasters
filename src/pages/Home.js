import React from 'react'
import homeData from './pageData/homeData';

// COMPONENTS
import SimpleSteps from '../components/shared/SimpleSteps';
import HeroImage from '../components/shared/HeroImage';
import Nav from '../components/shared/Nav';
import OurCollection from '../components/Home/OurCollection';
import WhyChooseUs from '../components/Home/WhyChooseUs/WhyChooseUs';

function Home() {
  return (
    <div>
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
    </div>
  )
}

export default Home

import React from 'react'
// COMPONENTS
import Nav from '../components/shared/Nav';
import HeroImage from '../components/shared/HeroImage';
import Footer from '../components/shared/Footer';
// DATA
import aboutData from '../pages/pageData/aboutData';
import OurCommitment from '../components/About/OurCommitment';
import UncompromisingQuality from '../components/About/UncompromisingQuality';
import Headquarters from '../components/About/Headquarters';

function About() {
  return (
    <>
      <Nav />
      <HeroImage
        {...aboutData.heroSection}
      />
      <OurCommitment
        {...aboutData.ourCommitment}
      />
      <UncompromisingQuality
        {...aboutData.uncompromisingQuality}
      />
      <Headquarters 
        {...aboutData.ourHeadquarters}
      />
      <Footer />
    </>
  )
}

export default About

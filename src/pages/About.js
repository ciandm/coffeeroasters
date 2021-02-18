import React from 'react'
// COMPONENTS
import Nav from '../components/shared/Nav';
import HeroImage from '../components/shared/HeroImage';
import Footer from '../components/shared/Footer';
// DATA
import aboutData from '../pages/pageData/aboutData';

function About() {
  return (
    <>
      <Nav />
      <HeroImage
        {...aboutData.heroSection}
      />
      <Footer />
    </>
  )
}

export default About

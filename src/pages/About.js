import React from 'react'
// COMPONENTS
import Nav from '../components/shared/Nav';
import HeroImage from '../components/shared/HeroImage';
// DATA
import aboutData from '../pages/pageData/aboutData';

function About() {
  return (
    <div>
      <Nav />
      <HeroImage
        {...aboutData.heroSection}
      />
    </div>
  )
}

export default About

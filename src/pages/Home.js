import React from 'react'
import homeData from './pageData/homeData';

// COMPONENTS
import SimpleSteps from '../components/shared/SimpleSteps';
import HeroImage from '../components/shared/HeroImage';

function Home() {
  return (
    <div>
      <HeroImage
        {...homeData.heroSection}
      />
      <SimpleSteps
        variation="light"
        {...homeData.simpleSteps}
      />
    </div>
  )
}

export default Home

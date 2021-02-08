import React from 'react'
import homeData from './pageData/homeData';

// COMPONENTS
import SimpleSteps from '../components/shared/SimpleSteps/SimpleSteps';

function Home() {
  return (
    <div>
      <SimpleSteps
        variation="light"
        {...homeData.simpleSteps}
      />
    </div>
  )
}

export default Home

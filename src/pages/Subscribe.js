import React from 'react'
import subscribeData from './pageData/subscribeData';
// COMPONENTS
import CoffeeSelection from '../components/Subscribe/CoffeeSelection';
import SubscriptionProvider from '../components/Subscribe/SubscriptionProvider';
import SimpleSteps from '../components/shared/SimpleSteps';
import HeroImage from '../components/shared/HeroImage/HeroImage';

function Subscribe() {
  return (
    <div>
      <HeroImage
        {...subscribeData.heroSection}
      />
      <SimpleSteps
        variation="dark"
        {...subscribeData.simpleSteps}
      />
      <SubscriptionProvider>
        <CoffeeSelection
          listItems={subscribeData.listItems}
          selectionOptions={subscribeData.selection}
        />
      </SubscriptionProvider>
    </div>
  )
}

export default Subscribe

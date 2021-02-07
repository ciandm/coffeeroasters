import React from 'react'
import CoffeeSelection from '../components/Subscribe/CoffeeSelection';
import subscribeData from './pageData/subscribeData';
import SubscriptionProvider from '../components/Subscribe/SubscriptionProvider';
import SimpleSteps from '../components/shared/SimpleSteps';

function Subscribe() {
  return (
    <div>
      <SimpleSteps
        variation="dark"
        steps={subscribeData.steps}
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

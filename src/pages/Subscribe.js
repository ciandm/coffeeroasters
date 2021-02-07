import React from 'react'
import CoffeeSelection from '../components/Subscribe/CoffeeSelection';
import subscribeData from './pageData/subscribeData';
import SubscriptionProvider from '../components/Subscribe/SubscriptionProvider';

function Subscribe() {
  return (
    <div>
      <SubscriptionProvider>
        <CoffeeSelection
          selectionOptions={subscribeData.selection}
        />
      </SubscriptionProvider>
    </div>
  )
}

export default Subscribe

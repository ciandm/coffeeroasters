import React, { useState, createContext, useContext } from 'react'

const SubscriptionContext = createContext({
  subscription: {},
  nextStep: null,
  selectOption: () => { },
})

const useSubscription = () => useContext(SubscriptionContext);

function SubscriptionProvider({ children }) {
  const [subscription, setSubscription] = useState({
    preference: '',
    type: '',
    weight: '',
    grind: '',
    delivery: ''
  })
  const [nextStep, setNextStep] = useState(1);

  const selectOption = option => {
    // if the user selects capsule, reset grind option
    if (option.name === 'Capsule') {
      setSubscription(prevSubscription => ({
        ...prevSubscription,
        [option.id]: option.name,
        grind: ''
      }))
    } else {
      // if the user selects and already selected option, deselect it.
      if (subscription[option.id] === option.name) {
        setSubscription(prevSubscription => ({
          ...prevSubscription,
          [option.id]: ''
        }))
      } else {
        // set option to users selected option
        setSubscription(prevSubscription => ({
          ...prevSubscription,
          [option.id]: option.name
        }))
      }
    }
    setNextStep(prevStep => prevStep + 1);
  }

  return (
    <SubscriptionContext.Provider
      value={{
        subscription,
        nextStep,
        selectOption
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  )
}

export default SubscriptionProvider

export {
  useSubscription
}

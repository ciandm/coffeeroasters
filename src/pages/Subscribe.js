import React, { useState } from 'react'
import subscribeData from './pageData/subscribeData';
// COMPONENTS
import Nav from '../components/shared/Nav';
import CoffeeSelection from '../components/Subscribe/CoffeeSelection';
import SubscriptionProvider from '../components/Subscribe/SubscriptionProvider';
import SimpleSteps from '../components/shared/SimpleSteps';
import HeroImage from '../components/shared/HeroImage';
import Footer from '../components/shared/Footer';
import Modal from '../components/Subscribe/Modal';

function Subscribe() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Nav />
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
          openModal={openModal}
        />
        <Modal 
          isOpen={modalOpen}
          closeModal={closeModal}
        />
      </SubscriptionProvider>
      <Footer />
    </>
  )
}

export default Subscribe

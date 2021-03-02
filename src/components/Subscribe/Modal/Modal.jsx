import React from 'react'
import * as S from './styled';
import { useSubscription } from '../SubscriptionProvider';
import summarizeOrder from '../CoffeeSelection/OrderSummary/summarizeOrder/summarizeOrder';
import Button from '../../shared/Button';
import getTotalCost from '../CoffeeSelection/OrderSummary/getTotalCost/getTotalCost';
import useWindowSize from '../../../hooks/useWindowSize';

function Modal({ isOpen, closeModal }) {

  const { subscription } = useSubscription();
  const { selection } = subscription;
  const summarySentences = summarizeOrder(selection);
  const isMobile = useWindowSize() < 767;

  if(!isOpen) return null;
  return (
    <S.Overlay>
      <S.Modal>
        <S.Header>
          <S.Title>Order Summary</S.Title>
        </S.Header>
        <S.Content>
          <S.Summary>
            {
              summarySentences
            }
          </S.Summary>
          <S.Paragraph>
            Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. 
          </S.Paragraph>
          {
            isMobile ? (
              <Button as="button" label={`Checkout - $${getTotalCost(selection.delivery, selection.weight)} / mo`} clickHandler={() => closeModal()}/>
            ) : (
              <S.ButtonContainer>
                <S.Price>{`${getTotalCost(selection.delivery, selection.weight)} / mo`}</S.Price>
                  <Button as="button" label="Checkout" clickHandler={() => closeModal()}/>
              </S.ButtonContainer>
            )
          }
        </S.Content>
      </S.Modal>
    </S.Overlay>
  )
}

export default Modal

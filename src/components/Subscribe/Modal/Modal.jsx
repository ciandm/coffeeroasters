import React from 'react'
import * as S from './styled';
import { useSubscription } from '../SubscriptionProvider';
import summarizeOrder from '../CoffeeSelection/OrderSummary/summarizeOrder/summarizeOrder';

function Modal() {

  const { subscription } = useSubscription();
  const { selection } = subscription;
  const summarySentences = summarizeOrder(selection);
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
        </S.Content>
      </S.Modal>
    </S.Overlay>
  )
}

export default Modal

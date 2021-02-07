import React from 'react'
import * as S from './styled';
import summarizeOrder from './summarizeOrder/summarizeOrder';
import { useSubscription } from '../../SubscriptionProvider/SubscriptionProvider'

function OrderSummary() {

  const { subscription } = useSubscription();
  const { selection } = subscription;
  const orderSummarySentences = summarizeOrder(selection);
  return (
    <S.OrderSummary>
      <S.Title>Order summary</S.Title>
      <S.Summary>
        {
          orderSummarySentences
        }
      </S.Summary>
    </S.OrderSummary>
  )
}

export default OrderSummary
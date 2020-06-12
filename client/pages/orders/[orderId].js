import React from 'react';
import { useEffect, useState } from 'react';
import Roter, { Router } from 'next/router';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';

import buildClient from '../../api/build-client';

const OrderShow = ({ order, currentuser }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id,
    },
    onSuccess: (payment) => Router.push('/orders'),
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };
    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {
    return <div>Order expired</div>;
  }

  return (
    <div>
      Time left to pay: {timeLeft} seconds
      <StripeCheckout
        token={({ id }) => doRequest({ token: id })}
        stripeKey="pk_test_51GspEECwRtLgDbWH3Ik2fVCD2hOoDqgvUH932TxMnYv8ZW5WoR81hIDM9gXqD3XvWT6Ui4HHXjdbND9NLZpeBgju00WBtqV3DD"
        amount={order.ticket.price * 100}
        email={currentuser.email}
      />
      {errors}
    </div>
  );
};

export async function getServerSideProps(context) {
  const client = buildClient(context);
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { props: { order: data } };
}

export default OrderShow;

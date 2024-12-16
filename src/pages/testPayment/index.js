import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentStatus, setPaymentStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Call the backend to create a PaymentIntent
        const response = await fetch('/order/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 1000, currency: 'usd' }) // 10.00 USD
        });

        const { clientSecret } = await response.json();

        // Confirm the card payment
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: 'Customer Name',
                },
            },
        });

        if (result.error) {
            setPaymentStatus(`Payment failed: ${result.error.message}`);
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                setPaymentStatus('Payment successful!');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
            {paymentStatus && <p>{paymentStatus}</p>}
        </form>
    );
};

export default PaymentForm;

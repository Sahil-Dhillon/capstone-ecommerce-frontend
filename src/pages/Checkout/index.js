import React, { useState } from 'react';
import { FaShoppingCart, FaCreditCard, FaPaypal, FaMoneyBillAlt, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [selectedPayment, setSelectedPayment] = useState('');
    const [selectedAddress, setSelectedAddress] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);

    const orderDetails = {
        items: [
            { name: 'Wireless Headphones', quantity: 1, price: 49.99 },
            { name: 'Bluetooth Speaker', quantity: 1, price: 29.99 },
        ],
        subtotal: 79.98,
        shipping: 5.99,
        total: 85.97,
    };

    const addresses = [
        {
            id: 1,
            name: 'John Doe',
            phone: '123-456-7890',
            addressLine: '123 Main Street',
            city: 'Springfield',
            state: 'IL',
            country: 'USA',
            pincode: '62701',
        },
        {
            id: 2,
            name: 'Jane Smith',
            phone: '987-654-3210',
            addressLine: '456 Oak Avenue',
            city: 'Austin',
            state: 'TX',
            country: 'USA',
            pincode: '73301',
        },
        {
            id: 3,
            name: 'Alice Brown',
            phone: '555-666-7777',
            addressLine: '789 Pine Lane',
            city: 'Seattle',
            state: 'WA',
            country: 'USA',
            pincode: '98101',
        },
    ];

    const handlePaymentSelection = (paymentMethod) => {
        setSelectedPayment(paymentMethod);
    };

    const handlePlaceOrder = () => {
        if (selectedPayment && selectedAddress) {
            setOrderPlaced(true);
        } else {
            alert('Please select both a payment method and a delivery address!');
        }
    };

    const handleAddAddress = () => {
        alert('Add address functionality is not implemented yet!');
    };

    if (orderPlaced) {
        return (
            <div className="container text-center mt-5">
                <h2 className="text-success">Order Placed Successfully!</h2>
                <p>Your order will be shipped shortly. Thank you for shopping with us!</p>
                <a href="/" className="btn btn-primary mt-4">Go to Homepage</a>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">
                <FaShoppingCart /> Checkout
            </h2>
            <div className="row">
                {/* Order Details */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h4>Order Details</h4>
                            <ul className="list-group">
                                {orderDetails.items.map((item, index) => (
                                    <li key={index} className="list-group-item d-flex justify-content-between">
                                        <span>{item.name} (x{item.quantity})</span>
                                        <span>${item.price.toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <strong>Subtotal:</strong>
                                <span>${orderDetails.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <strong>Shipping:</strong>
                                <span>${orderDetails.shipping.toFixed(2)}</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <strong>Total:</strong>
                                <span>${orderDetails.total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Address and Payment Options */}
                <div className="col-md-6">
                    {/* Address Selection */}
                    <div className="card mb-4">
                        <div className="card-body">
                            <h4 className="d-flex justify-content-between align-items-center">
                                Delivery Address
                                <FaPlus
                                    className="text-primary cursor-pointer"
                                    onClick={handleAddAddress}
                                    style={{ cursor: 'pointer' }}
                                    title="Add New Address"
                                />
                            </h4>
                            <div
                                className="list-group overflow-auto"
                                style={{ maxHeight: '200px', whiteSpace: 'nowrap', overflowX: 'auto' }}
                            >
                                {addresses.map((address) => (
                                    <div
                                        key={address.id}
                                        className={`position-relative list-group-item list-group-item-action p-3 ${selectedAddress === address.id ? 'active' : ''}`}
                                        onClick={() => setSelectedAddress(address.id)}
                                    >
                                        {/* Label */}
                                        <div
                                            className="position-absolute"
                                            style={{
                                                top: '5px',
                                                right: '5px',
                                                border: '1px solid #ccc',
                                                borderRadius: '5px',
                                                padding: '2px 6px',
                                                fontSize: '12px',
                                                // backgroundColor: 'white',
                                            }}
                                        >
                                            Address {address.id}
                                        </div>
                                        {/* Address Content */}
                                        <div>
                                            <strong>{address.name}</strong> <br />
                                            Phone: {address.phone} <br />
                                            {address.addressLine}, {address.city}, {address.state}, {address.country} - {address.pincode}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Payment Options */}
                    <div className="card">
                        <div className="card-body">
                            <h4>Payment Options</h4>
                            <div className="list-group">
                                <button
                                    className={`list-group-item list-group-item-action ${selectedPayment === 'credit-card' ? 'active' : ''}`}
                                    onClick={() => handlePaymentSelection('credit-card')}
                                >
                                    <FaCreditCard className="me-2" /> Credit/Debit Card
                                </button>
                                <button
                                    className={`list-group-item list-group-item-action ${selectedPayment === 'paypal' ? 'active' : ''}`}
                                    onClick={() => handlePaymentSelection('paypal')}
                                >
                                    <FaPaypal className="me-2" /> PayPal
                                </button>
                                <button
                                    className={`list-group-item list-group-item-action ${selectedPayment === 'cash' ? 'active' : ''}`}
                                    onClick={() => handlePaymentSelection('cash')}
                                >
                                    <FaMoneyBillAlt className="me-2" /> Cash on Delivery
                                </button>
                            </div>
                            <Link
                                to="/OrderSuccess"
                                className="btn btn-success mt-4 w-100"
                                onClick={handlePlaceOrder}
                            >
                                Place Order
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

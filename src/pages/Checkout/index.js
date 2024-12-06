import React, { useContext, useEffect, useState } from 'react';
import { FaShoppingCart, FaCreditCard, FaPaypal, FaMoneyBillAlt, FaPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { Form, Modal } from 'react-bootstrap';

const Checkout = () => {
    const [selectedPayment, setSelectedPayment] = useState('');
    const [selectedAddress, setSelectedAddress] = useState();
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [showAddressModal, setShowAddressModal] = useState(false);
    const { order, setOrder, authToken, setCart, userData, updateUserData } = useContext(AppContext);
    const orderDetails = order
    const navigate = useNavigate()
    useEffect(() => { console.log(order) }, [])


    const handlePaymentSelection = (paymentMethod) => {
        setSelectedPayment(paymentMethod);
    };

    const handlePlaceOrder = () => {

        if (selectedPayment && selectedAddress) {
            console.log("Selected Address Id: ", selectedAddress)
            axios.post('/order/placeorder', {
                ...order,
                addressId: selectedAddress,
                orderStatus: "Completed",
                payment: {
                    "paymentMethod": selectedPayment,
                    "totalAmount": order.totalAmount,
                    // "createdAt": "",
                    "status": "Completed"
                }
            }, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                }
            }).then((x) => {
                setOrderPlaced(true);
                setOrder(x.data)
                axios.put('/cartitem/emptyCart', {}, {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                })
                updateUserData()
                navigate("/OrderSuccess")
            })
        } else {
            alert('Please select both a payment method and a delivery address!');
        }
    };

    const handleAddAddress = (address) => {
        axios.put('/users/me/addresses/add', { ...address }, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            }
        }).then((res) => {
            console.log(res.data)
            updateUserData()
        })
        setShowAddressModal(false);
        alert("Address added successfully.")
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
                            {order &&
                                <ul className="list-group">
                                    {orderDetails.listOfOrderItems.map((item, index) => (
                                        <li key={index} className="list-group-item d-flex justify-content-between">
                                            <span>{item.name} (x{item.quantity})</span>
                                            <span>₹{item.price.toFixed(2)}</span>
                                        </li>
                                    ))}
                                </ul>
                            }
                            <hr />
                            <div className="d-flex justify-content-between">
                                <strong>Subtotal:</strong>
                                <span>₹{orderDetails.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <strong>Shipping:</strong>
                                <span>₹{orderDetails.shipping.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between ">
                                <strong>Discount Applied:</strong>
                                <span className='text-success'>-₹{orderDetails.discount.toFixed(2)}</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <strong>Total:</strong>
                                <span>₹{orderDetails.totalAmount.toFixed(2)}</span>
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
                                    onClick={() => setShowAddressModal(true)}
                                    style={{ cursor: 'pointer' }}
                                    title="Add New Address"
                                />
                            </h4>
                            <div
                                className="list-group overflow-auto"
                                style={{ maxHeight: '200px', whiteSpace: 'nowrap', overflowX: 'auto' }}
                            >
                                {userData && userData.listOfUserAdresses.map((address, index) => {
                                    address.id = index
                                    return (
                                        <div
                                            key={address.addressId}
                                            className={`position-relative list-group-item list-group-item-action p-3 ${selectedAddress === address.addressId ? 'active' : ''}`}
                                            onClick={() => setSelectedAddress(address.addressId)}
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
                                                {address.label}
                                            </div>
                                            {/* Address Content */}
                                            <div>
                                                <strong>{address.recepientName}</strong> <br />
                                                Phone: {address.addressMobile} <br />
                                                {address.addressLine1}<br />
                                                {address.addressLine2}, {address.city}, {address.state}, {address.country} - {address.pincode}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* Address Modal */}
                    <Modal show={showAddressModal} onHide={() => setShowAddressModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Address</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const newAddress = {
                                        recepientName: e.target.recipientName.value,
                                        addressMobile: e.target.phone.value,
                                        addressLine1: e.target.addressLine1.value,
                                        addressLine2: e.target.addressLine2.value,
                                        city: e.target.city.value,
                                        state: e.target.state.value,
                                        country: e.target.country.value,
                                        pincode: e.target.pincode.value,
                                        label: e.target.label.value,
                                    };
                                    handleAddAddress(newAddress);
                                }}
                            >
                                <Form.Group controlId="recipientName">
                                    <Form.Label>Recipient Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        defaultValue={selectedAddress?.recepientName || ""}
                                    />
                                </Form.Group>
                                <Form.Group controlId="phone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="text"
                                        defaultValue={selectedAddress?.addressMobile || ""}
                                    />
                                </Form.Group>
                                <Form.Group controlId="addressLine1">
                                    <Form.Label>Address Line 1</Form.Label>
                                    <Form.Control
                                        type="text"
                                        defaultValue={selectedAddress?.addressLine1 || ""}
                                    />
                                </Form.Group>
                                <Form.Group controlId="addressLine2">
                                    <Form.Label>Address Line 2</Form.Label>
                                    <Form.Control
                                        type="text"
                                        defaultValue={selectedAddress?.addressLine2 || ""}
                                    />
                                </Form.Group>
                                <Form.Group controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        defaultValue={selectedAddress?.city || ""}
                                    />
                                </Form.Group>
                                <Form.Group controlId="state">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        type="text"
                                        defaultValue={selectedAddress?.state || ""}
                                    />
                                </Form.Group>
                                <Form.Group controlId="country">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control
                                        type="text"
                                        defaultValue={selectedAddress?.country || ""}
                                    />
                                </Form.Group>
                                <Form.Group controlId="pincode">
                                    <Form.Label>Pincode</Form.Label>
                                    <Form.Control
                                        type="text"
                                        defaultValue={selectedAddress?.pincode || ""}
                                    />
                                </Form.Group>
                                <Form.Group controlId="label">
                                    <Form.Label>Label (e.g., Home, Work)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        defaultValue={selectedAddress?.label || ""}
                                    />
                                </Form.Group>


                                <button className="btn btn-dark btn-sm my-2" type="submit">
                                    {selectedAddress ? "Update Address" : "Add Address"}
                                </button>
                            </Form>
                        </Modal.Body>
                    </Modal>

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
                            <button

                                className="btn btn-success mt-4 w-100"
                                onClick={handlePlaceOrder}
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

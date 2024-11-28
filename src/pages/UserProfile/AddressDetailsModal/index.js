import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const OrderDetailsModal = ({ show, order, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Order Details - {order.orderId}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Status: {order.status}</h5>
        <p>Order Details: {order.details}</p>
        <p>Order ID: {order.orderId}</p>
        <p>Additional Information: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderDetailsModal;

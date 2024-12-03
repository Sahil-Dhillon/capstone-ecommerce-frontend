// import React from "react";
import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Order = () => {
  // Initial state for orders
  const [orders, setOrders] = useState([
    { id: 1, status: "Completed", details: "Order 1 details", payment: "$150" },
    { id: 2, status: "In-Transit", details: "Order 2 details", payment: "$200" },
    { id: 3, status: "Failed", details: "Order 3 details", payment: "$120" },
    { id: 4, status: "In-Transit", details: "Order 4 details", payment: "$80" },
    { id: 5, status: "Completed", details: "Order 5 details", payment: "$50" },
  ]);

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [currentOrderDetails, setCurrentOrderDetails] = useState("");
  const [currentOrderPayment, setCurrentOrderPayment] = useState("");
  const [editStatusModal, setEditStatusModal] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  // Function to open modal for order details
  const handleShowDetails = (details) => {
    setCurrentOrderDetails(details);
    setShowDetailsModal(true);
  };

  // Function to open modal for order payment
  const handleShowPayment = (payment) => {
    setCurrentOrderPayment(payment);
    setShowPaymentModal(true);
  };

  // Function to delete an order
  // const handleDelete = (id) => {
  //   const updatedOrders = orders.filter((order) => order.id !== id);
  //   setOrders(updatedOrders);
  // };

  // Function to edit the order status
  const handleEditStatus = (order) => {
    setEditingOrder(order);
    setNewStatus(order.status);
    setEditStatusModal(true);
  };

  // Function to save the new order status
  const handleSaveStatus = () => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === editingOrder.id ? { ...order, status: newStatus } : order
      )
    );
    setEditStatusModal(false);
  };

  return (
    <div className="order">
      <div className="d-flex">
        <div className="order-content container mt-4">
          <h3>Orders</h3>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Order Status</th>
                <th>Order Details</th>
                <th>Order Payment</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {/* Dynamically generate rows for each order */}
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>
                    <Button
                      variant={order.status === "Completed" ? "success" : order.status === "In-Transit" ? "warning" : "danger"}
                      size="sm"
                      onClick={() => handleEditStatus(order)}
                    >
                      {order.status}
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="info"
                      size="sm"
                      onClick={() => handleShowDetails(order.details)}
                    >
                      View Details
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="info"
                      size="sm"
                      onClick={() => handleShowPayment(order.payment)}
                    >
                      View Payment
                    </Button>
                  </td>
                  {/* <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(order.id)}
                    >
                      Delete
                    </Button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Modal for Order Details */}
          <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Order Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{currentOrderDetails}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowDetailsModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Modal for Order Payment */}
          <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Order Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{currentOrderPayment}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowPaymentModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Modal for Editing Order Status */}
          <Modal show={editStatusModal} onHide={() => setEditStatusModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit Order Status</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Order Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                  >
                    <option value="Completed">Completed</option>
                    <option value="In-Transit">In-Transit</option>
                    <option value="Failed">Failed</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setEditStatusModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSaveStatus}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Order;


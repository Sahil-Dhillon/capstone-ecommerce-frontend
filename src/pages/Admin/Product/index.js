
import React, { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
  // Array of product data
  const [products, setProducts] = useState([
    { id: 1, name: "Wireless Earbuds", vendor: "TechSound", description: "High-quality wireless earbuds with noise cancellation.", status: "" },
    { id: 2, name: "Running Shoes", vendor: "ActiveFit", description: "Comfortable running shoes with great grip.", status: "" },
    { id: 3, name: "Smart Watch", vendor: "GadgetPro", description: "Feature-packed smart watch with health tracking.", status: "" },
    { id: 4, name: "Gaming Console", vendor: "GameZone", description: "Next-gen gaming console for immersive gameplay.", status: "" },
    { id: 5, name: "Electric Kettle", vendor: "KitchenAid", description: "Stylish electric kettle with fast heating.", status: "" },
  ]);

  // State to control the modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle Accept action
  const handleAccept = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, status: "Accepted" } : product
      )
    );
  };

  // Handle Decline action
  const handleDecline = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, status: "Denied" } : product
      )
    );
  };

  // Handle Product Details
  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="product">
      <div className="d-flex flex-column">
        <h3>Products</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Vendor Name</th>
              <th>Product Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Dynamically generate rows for each product */}
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.vendor}</td>
                <td>
                  <Button variant="info" onClick={() => handleShowDetails(product)}>
                    <FaInfoCircle /> View Details
                  </Button>
                </td>
                <td>
                  {product.status ? (
                    <strong
                      style={{
                        color: product.status === "Accepted" ? "green" : "red",
                      }}
                    >
                      {product.status}
                    </strong>
                  ) : (
                    <>
                      <Button
                        variant="success"
                        className="me-2"
                        onClick={() => handleAccept(product.id)}
                      >
                        <FaCheckCircle /> Accept
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDecline(product.id)}
                      >
                        <FaTimesCircle /> Decline
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal for Product Details */}
      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Product Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Name:</strong> {selectedProduct.name}</p>
            <p><strong>Vendor:</strong> {selectedProduct.vendor}</p>
            <p><strong>Description:</strong> {selectedProduct.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Product;

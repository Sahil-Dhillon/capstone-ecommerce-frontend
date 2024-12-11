
import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Loading from "../../../components/Loading";
import ErrorPage from "../../../components/Error";

const Product = () => {
  // Array of product data
  const [products, setProducts] = useState([
    // { id: 1, name: "Wireless Earbuds", vendor: "TechSound", description: "High-quality wireless earbuds with noise cancellation.", status: "" },
    // { id: 2, name: "Running Shoes", vendor: "ActiveFit", description: "Comfortable running shoes with great grip.", status: "" },
    // { id: 3, name: "Smart Watch", vendor: "GadgetPro", description: "Feature-packed smart watch with health tracking.", status: "" },
    // { id: 4, name: "Gaming Console", vendor: "GameZone", description: "Next-gen gaming console for immersive gameplay.", status: "" },
    // { id: 5, name: "Electric Kettle", vendor: "KitchenAid", description: "Stylish electric kettle with fast heating.", status: "" },
  ]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(()=>{
    axios.get('/product/requests').then((res)=>{
      setProducts(res.data)
      setLoading(false)
      setError(false)
    }).catch((res)=>{
      setError(res)
    })
  },[])

  
  // State to control the modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle Accept action
  const handleAccept = (id) => {
    axios.put(`/product/approve/${id}`).then((res)=>{
      console.log(res.data)
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.productId === id ? { ...product, status: "Accepted" } : product
        )
      );
    })
    
  };

  // Handle Decline action
  const handleDecline = (id) => {
    axios.put(`/product/reject/${id}`).then((res)=>{
      console.log(res.data)
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.productId === id ? { ...product, status: "Rejected" } : product
      )
    );
  })
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
  if(loading){
    return <Loading/>
  }
  if(error){
    return <ErrorPage message="Error Loading requests"/>
  }
  return (
    <div className="product container mt-3">
      <div className="d-flex flex-column">
        <h3>Product Requests</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Vendor Name</th>
              <th>Product Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Dynamically generate rows for each product */}
            {products.map((product,index) => (
              <tr key={product.productId}>
                <td>{index+1}</td>
                <td>{product.productId}</td>
                <td>{product.name}</td>
                <td>{product.vendorId}</td>
                <td>
                  <Button variant="info" onClick={() => handleShowDetails(product)}>
                    <FaInfoCircle /> View Details
                  </Button>
                </td>
                <td>
                  {product.status != "pending" ? (
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
                        onClick={() => handleAccept(product.productId)}
                      >
                        <FaCheckCircle /> Accept
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDecline(product.productId)}
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

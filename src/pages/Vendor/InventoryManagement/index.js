import React, { useState } from "react";
import { Table, Modal, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { HiPencilSquare } from "react-icons/hi2";

const InventoryManagement = () => {
  const [products, setProducts] = useState([
    { id: "P001", name: "Product 1", quantity: 50, available: true },
    { id: "P002", name: "Product 2", quantity: 30, available: true },
    { id: "P003", name: "Product 3", quantity: 0, available: false },
    { id: "P004", name: "Product 4", quantity: 70, available: true },
    { id: "P005", name: "Product 5", quantity: 25, available: true },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [newQuantity, setNewQuantity] = useState("");

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handleEditQuantity = (product) => {
    setCurrentProduct(product);
    setNewQuantity(product.quantity);
    setShowQuantityModal(true);
  };

  const handleUpdateQuantity = () => {
    setProducts(
      products.map((product) =>
        product.id === currentProduct.id
          ? { ...product, quantity: parseInt(newQuantity, 10) }
          : product
      )
    );
    setShowQuantityModal(false);
    setCurrentProduct(null);
    setNewQuantity("");
  };

  const handleEditAvailability = (product) => {
    setCurrentProduct(product);
    setShowAvailabilityModal(true);
  };

  const handleUpdateAvailability = () => {
    setProducts(
      products.map((product) =>
        product.id === currentProduct.id
          ? { ...product, available: !product.available }
          : product
      )
    );
    setShowAvailabilityModal(false);
    setCurrentProduct(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="inventory-management">
      <h3>Inventory Management</h3>

      {/* Search Bar */}
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search products..."
          aria-label="Search products"
          value={searchTerm}
          onChange={handleSearch}
        />
      </InputGroup>

      {/* Product Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.id}</td>

              {/* Quantity Column */}
              <td className="d-flex justify-content-between align-items-center">
                {product.quantity}
                <HiPencilSquare
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleEditQuantity(product)}
                />
              </td>

              {/* Availability Column */}
              <td className="">

                <div className="d-flex justify-content-between align-items-center">
                {product.available ? "Available" : "Not Available"}
                <HiPencilSquare
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleEditAvailability(product)}
                /></div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-between align-items-center">
        <Button
          variant="secondary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of{" "}
          {Math.ceil(filteredProducts.length / itemsPerPage)}
        </span>
        <Button
          variant="secondary"
          disabled={currentPage === Math.ceil(filteredProducts.length / itemsPerPage)}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>

      {/* Edit Quantity Modal */}
      <Modal show={showQuantityModal} onHide={() => setShowQuantityModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Quantity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="editQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                min="0"
                value={newQuantity}
                onChange={(e) => setNewQuantity(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowQuantityModal(false)}
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateQuantity}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Availability Modal */}
      <Modal
        show={showAvailabilityModal}
        onHide={() => setShowAvailabilityModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Availability</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Current availability is:{' '}
            <strong>
              {currentProduct && currentProduct.available
                ? "Available"
                : "Not Available"}
            </strong>
          </p>
          <p>Do you want to change the availability?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowAvailabilityModal(false)}
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateAvailability}>
            Change
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InventoryManagement;

import React, { useState } from 'react';
import { Table, Button, Modal, Form, Col, Row, Badge } from 'react-bootstrap';

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { id: 'P001', name: 'Sample Product', status: 'Pending' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    brand: '',
    description: '',
    tags: [],
    variations: [],
    listOfSpecs: [],
    price: '',
    quantity: '',
    category: '',
    subcategory: '',
    primaryImage: null,
    galleryImages: []
  });
  const [spec, setSpec] = useState({ title: '', body: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleTagKeyPress = (e, field) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      setNewProduct({
        ...newProduct,
        [field]: [...newProduct[field], e.target.value.trim()],
      });
      e.target.value = '';
    }
  };

  const handleRemoveTag = (field, index) => {
    setNewProduct({
      ...newProduct,
      [field]: newProduct[field].filter((_, i) => i !== index),
    });
  };

  const handleAddSpec = () => {
    if (spec.title && spec.body) {
      setNewProduct({ ...newProduct, listOfSpecs: [...newProduct.listOfSpecs, spec] });
      setSpec({ title: '', body: '' });
    }
  };

  const handleRemoveSpec = (index) => {
    setNewProduct({
      ...newProduct,
      specs: newProduct.specs.filter((_, i) => i !== index),
    });
  };

  const handleImageUpload = (e, type) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(
      (file) =>
        file.type === 'image/png' || file.type === 'image/jpeg'
    );

    if (type === 'primary') {
      setNewProduct({
        ...newProduct,
        primaryImage: validFiles.length > 0 ? validFiles[0] : null,
      });
    } else {
      setNewProduct({
        ...newProduct,
        galleryImages: [...newProduct.galleryImages, ...validFiles],
      });
    }
  };

  const handleSubmit = () => {
    const productRequest = 
      {
        "vendorId": "1",
        "name": newProduct.name,
        "brand": newProduct.brand,
        "description": newProduct.description,
        "listOfSpecs": newProduct.listOfSpecs,
        "price": newProduct.price,
        "quantity": 0,
        "isAvailable": true,
        "variations": newProduct.variations,
        "tags": newProduct.tags,
        "profileImgUrl":newProduct.primaryImage,
        "listOfImages":newProduct.galleryImages
      }
      

    setProducts([...products, productRequest]);
    setShowModal(false);
    setNewProduct({
      name: '',
      brand: '',
      description: '',
      tags: [],
      variations: [],
      specs: [],
      price: '',
      quantity: '',
      category: '',
      subcategory: '',
      primaryImage: null,
      galleryImages: [],
    });
  };

  return (
    <div className="product-management p-4">
      <h3>Product Management</h3>

      <Button className="mb-3" onClick={() => setShowModal(true)}>
        Add Product
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.id}</td>
              <td>{product.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add Product Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="productName">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="brand">
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter brand name"
                    name="brand"
                    value={newProduct.brand}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="description" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter product description"
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Row className="mt-3">
              <Col md={6}>
                <Form.Group controlId="tags">
                  <Form.Label>Tags</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter tags and press Enter"
                    onKeyPress={(e) => handleTagKeyPress(e, 'tags')}
                  />
                  <div className="mt-2">
                    {newProduct.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        pill
                        bg="secondary"
                        className="me-2"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleRemoveTag('tags', index)}
                      >
                        {tag} ×
                      </Badge>
                    ))}
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="variations">
                  <Form.Label>Variations</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter variations and press Enter"
                    onKeyPress={(e) => handleTagKeyPress(e, 'variations')}
                  />
                  <div className="mt-2">
                    {newProduct.variations.map((variation, index) => (
                      <Badge
                        key={index}
                        pill
                        bg="info"
                        className="me-2"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleRemoveTag('variations', index)}
                      >
                        {variation} ×
                      </Badge>
                    ))}
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="specs" className="mt-3">
              <Button onClick={() => setShowSpecsModal(true)} className="mb-2">
                Add Specs
              </Button>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>Tag</th>
                    <th>Value</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {newProduct.specs.map((spec, index) => (
                    <tr key={index}>
                      <td>{spec.title}</td>
                      <td>{spec.body}</td>
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleRemoveSpec(index)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Form.Group>
            <Row className="mt-3">
              <Col md={6}>
                <Form.Group controlId="primaryImage">
                  <Form.Label>Primary Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) => handleImageUpload(e, 'primary')}
                  />
                  {newProduct.primaryImage && (
                    <img
                      src={URL.createObjectURL(newProduct.primaryImage)}
                      alt="Primary"
                      className="mt-2"
                      style={{ width: '100%', maxWidth: '200px' }}
                    />
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="galleryImages">
                  <Form.Label>Gallery Images</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/png, image/jpeg"
                    multiple
                    onChange={(e) => handleImageUpload(e, 'gallery')}
                  />
                  <div className="mt-2">
                    {newProduct.galleryImages.map((img, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(img)}
                        alt={`Gallery ${index}`}
                        className="me-2"
                        style={{ width: '50px', height: '50px' }}
                      />
                    ))}
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit for Approval
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Specs Modal */}
      <Modal show={showSpecsModal} onHide={() => setShowSpecsModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Specifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="specTag">
                  <Form.Label>Tag</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter spec tag"
                    value={spec.title}
                    onChange={(e) => setSpec({ ...spec, title: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="specValue">
                  <Form.Label>Value</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter spec value"
                    value={spec.body}
                    onChange={(e) => setSpec({ ...spec, body: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSpecsModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddSpec}>
            Add Spec
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductManagement;

import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const User = () => {
  // Initial state for users
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", details: "John's profile details..." },
    { id: 2, name: "Jane Smith", email: "jane@example.com", details: "Jane's profile details..." },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", details: "Sam's profile details..." },
    { id: 4, name: "Lisa Brown", email: "lisa@example.com", details: "Lisa's profile details..." },
    { id: 5, name: "David Clark", email: "david@example.com", details: "David's profile details..." },
    { id: 6, name: "Emily Johnson", email: "emily@example.com", details: "Emily's profile details..." },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentUserDetails, setCurrentUserDetails] = useState("");

  const [editModal, setEditModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const [addUserModal, setAddUserModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", details: "" });

  // Function to open modal for user details
  const handleShowDetails = (details) => {
    setCurrentUserDetails(details);
    setShowModal(true);
  };

  // Function to delete a user
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  // Function to edit a user
  const handleEdit = (user) => {
    setEditingUser(user);
    setEditModal(true);
  };

  // Function to save edited user data
  const handleSaveEdit = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === editingUser.id ? editingUser : user
      )
    );
    setEditModal(false);
  };

  // Function to open the Add User modal
  const handleAddUser = () => {
    setAddUserModal(true);
  };

  // Function to handle form changes for adding a new user
  const handleNewUserChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  // Function to save the new user
  const handleSaveNewUser = () => {
    const newUserWithId = { ...newUser, id: users.length + 1 };
    setUsers([...users, newUserWithId]);
    setAddUserModal(false);
    setNewUser({ name: "", email: "", details: "" }); // Reset form
  };

  return (
    <div className="user">
      <div className="d-flex">
        <div className="user-content container mt-4">
          <h3>Users</h3>
          <Button variant="primary" className="mb-3" onClick={handleAddUser}>
            Add New User
          </Button>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>User Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Dynamically generate rows for each user */}
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button
                      variant="info"
                      size="sm"
                      onClick={() => handleShowDetails(user.details)}
                    >
                      View Details
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Modal for User Details */}
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>User Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{currentUserDetails}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Modal for Editing User */}
          <Modal show={editModal} onHide={() => setEditModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={editingUser?.name || ""}
                    onChange={(e) =>
                      setEditingUser({ ...editingUser, name: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={editingUser?.email || ""}
                    onChange={(e) =>
                      setEditingUser({ ...editingUser, email: e.target.value })
                    }
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setEditModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSaveEdit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Modal for Adding New User */}
          <Modal show={addUserModal} onHide={() => setAddUserModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Add New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleNewUserChange}
                    placeholder="Enter user name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleNewUserChange}
                    placeholder="Enter user email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Details</Form.Label>
                  <Form.Control
                    type="text"
                    name="details"
                    value={newUser.details}
                    onChange={handleNewUserChange}
                    placeholder="Enter user details"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setAddUserModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSaveNewUser}>
                Add User
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default User;



// import React, { useState } from "react";
// import { Table, Button, Modal, Form } from "react-bootstrap";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Category = () => {
//   // State for categories and modal visibility
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Electronics" },
//     { id: 2, name: "Clothing" },
//     { id: 3, name: "Footwear" },
//     { id: 4, name: "Books" },
//     { id: 5, name: "Home Appliances" },
//   ]);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [newCategoryName, setNewCategoryName] = useState("");
//   const [editCategory, setEditCategory] = useState(null);
//   const [editCategoryName, setEditCategoryName] = useState("");

//   // Function to handle adding a new category
//   const handleAddCategory = () => {
//     if (newCategoryName.trim()) {
//       const newCategory = {
//         id: categories.length + 1,
//         name: newCategoryName,
//       };
//       setCategories([...categories, newCategory]);
//       setNewCategoryName(""); // Reset input
//       setShowAddModal(false); // Close modal
//     }
//   };

//   // Function to handle editing category
//   const handleEditCategory = () => {
//     if (editCategoryName.trim()) {
//       const updatedCategories = categories.map((category) =>
//         category.id === editCategory.id
//           ? { ...category, name: editCategoryName }
//           : category
//       );
//       setCategories(updatedCategories);
//       setEditCategoryName(""); // Reset input
//       setEditCategory(null); // Close edit modal
//     }
//   };

//   // Function to handle deleting a category
//   const handleDeleteCategory = (id) => {
//     const updatedCategories = categories.filter((category) => category.id !== id);
//     setCategories(updatedCategories);
//   };

//   return (
//     <div className="category">
//       <div className="d-flex justify-content-between mt-4 mb-3">
//         <h3>Categories</h3>
//         <Button variant="primary" onClick={() => setShowAddModal(true)}>
//           Add New Category
//         </Button>
//       </div>

//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>Category</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* Dynamically generate rows for each category */}
//           {categories.map((category) => (
//             <tr key={category.id}>
//               <td>{category.name}</td>
//               <td>
//                 <Button
//                   variant="warning"
//                   size="sm"
//                   className="mx-2"
//                   onClick={() => {
//                     setEditCategory(category);
//                     setEditCategoryName(category.name);
//                   }}
//                 >
//                   <FaEdit />
//                 </Button>
//                 <Button
//                   variant="danger"
//                   size="sm"
//                   onClick={() => handleDeleteCategory(category.id)}
//                 >
//                   <FaTrash />
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Modal for adding a new category */}
//       <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Add New Category</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Category Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter category name"
//                 value={newCategoryName}
//                 onChange={(e) => setNewCategoryName(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowAddModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleAddCategory}>
//             Add Category
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Modal for editing a category */}
//       <Modal show={editCategory !== null} onHide={() => setEditCategory(null)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Category</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Category Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Edit category name"
//                 value={editCategoryName}
//                 onChange={(e) => setEditCategoryName(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setEditCategory(null)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleEditCategory}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Category;



import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Category = () => {
  const [categories, setCategories] = useState([]);  // Initialize categories state as an empty array
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [editCategory, setEditCategory] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState("");

  // Fetch categories from backend on component mount
  useEffect(() => {
    // Replace the URL below with the actual API endpoint
    fetch("/category/all")  // Your backend endpoint to get categories
      .then((response) => response.json())
      .then((data) => setCategories(data))  // Set the categories state to the response data
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Function to handle adding a new category
  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      const newCategory = {
        name: newCategoryName,
      };
      axios.post("/category/add",newCategory)
      // fetch("category/add", {
      //   method: "POST", // Assuming you're using POST to add a category
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(newCategory),
      // })
        .then((response) => response.data)
        .then((data) => {
          setCategories([...categories, data]);  // Add the new category to the categories state
          setNewCategoryName(""); // Reset input
          setShowAddModal(false); // Close modal
        })
        .catch((error) => console.error("Error adding category:", error));
    }
  };

  // Function to handle editing category
  const handleEditCategory = () => {
    if (editCategoryName.trim()) {
      const updatedCategory = { ...editCategory, name: editCategoryName };
      fetch(`/api/categories/${editCategory.id}`, {
        method: "PUT", // Assuming you're using PUT to update a category
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCategory),
      })
        .then((response) => response.json())
        .then((data) => {
          const updatedCategories = categories.map((category) =>
            category.id === data.id ? data : category
          );
          setCategories(updatedCategories);  // Update categories state with the updated category
          setEditCategoryName(""); // Reset input
          setEditCategory(null); // Close edit modal
        })
        .catch((error) => console.error("Error editing category:", error));
    }
  };

  // Function to handle deleting a category
  const handleDeleteCategory = (id) => {
    fetch(`/api/categories/${id}`, {
      method: "DELETE", // Assuming you're using DELETE to remove a category
    })
      .then(() => {
        const updatedCategories = categories.filter((category) => category.id !== id);
        setCategories(updatedCategories); // Remove deleted category from the state
      })
      .catch((error) => console.error("Error deleting category:", error));
  };

  return (
    <div className="category">
      <div className="d-flex justify-content-between mt-4 mb-3">
        <h3>Categories</h3>
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
          Add New Category
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Category</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {/* Dynamically generate rows for each category */}
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              {/* <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="mx-2"
                  onClick={() => {
                    setEditCategory(category);
                    setEditCategoryName(category.name);
                  }}
                >
                  <FaEdit />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteCategory(category.id)}
                >
                  <FaTrash />
                </Button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for adding a new category */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category name"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for editing a category */}
      <Modal show={editCategory !== null} onHide={() => setEditCategory(null)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit category name"
                value={editCategoryName}
                onChange={(e) => setEditCategoryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditCategory(null)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditCategory}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Category;



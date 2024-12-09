// import React, { useState } from "react";
// import { Accordion, ListGroup, Button, Modal, Form } from "react-bootstrap";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";

// const SubCategory = () => {
//   // Sample dynamic categories and subcategories
//   const [categories, setCategories] = useState([
//     {
//       id: 1,
//       name: "Electronics",
//       subCategories: ["Mobile Phones", "Laptops", "Cameras", "Accessories"],
//     },
//     {
//       id: 2,
//       name: "Clothing",
//       subCategories: ["Men", "Women", "Kids", "Footwear"],
//     },
//     {
//       id: 3,
//       name: "Home Appliances",
//       subCategories: ["Kitchen Appliances", "Furniture", "Decor", "Lighting"],
//     },
//     {
//       id: 4,
//       name: "Sports & Outdoors",
//       subCategories: ["Sportswear", "Fitness Equipment", "Outdoor Gear"],
//     },
//     {
//       id: 5,
//       name: "Books",
//       subCategories: ["Fiction", "Non-Fiction", "Comics", "Educational"],
//     },
//   ]);

//   const [showModal, setShowModal] = useState(false);
//   const [currentCategoryId, setCurrentCategoryId] = useState(null);
//   const [currentSubCategory, setCurrentSubCategory] = useState("");
//   const [newSubCategory, setNewSubCategory] = useState("");
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   // Add new subcategory
//   const handleAddSubCategory = () => {
//     setCategories((prevCategories) =>
//       prevCategories.map((category) =>
//         category.id === currentCategoryId
//           ? {
//               ...category,
//               subCategories: [...category.subCategories, newSubCategory],
//             }
//           : category
//       )
//     );
//     setShowModal(false);
//     setNewSubCategory("");
//   };

//   // Edit existing subcategory
//   const handleEditSubCategory = () => {
//     setCategories((prevCategories) =>
//       prevCategories.map((category) =>
//         category.id === currentCategoryId
//           ? {
//               ...category,
//               subCategories: category.subCategories.map((subCategory, idx) =>
//                 idx === editIndex ? newSubCategory : subCategory
//               ),
//             }
//           : category
//       )
//     );
//     setShowModal(false);
//     setIsEditMode(false);
//     setNewSubCategory("");
//     setEditIndex(null);
//   };

//   // Open the modal to add or edit a subcategory
//   const openModal = (categoryId, subCategory = "", index = null) => {
//     setCurrentCategoryId(categoryId);
//     setCurrentSubCategory(subCategory);
//     setNewSubCategory(subCategory); // Pre-fill for editing
//     setIsEditMode(index !== null); // Check if it's edit mode
//     setEditIndex(index);
//     setShowModal(true);
//   };

//   // Delete a subcategory
//   const handleDeleteSubCategory = (categoryId, subCategory) => {
//     setCategories((prevCategories) =>
//       prevCategories.map((category) =>
//         category.id === categoryId
//           ? {
//               ...category,
//               subCategories: category.subCategories.filter(
//                 (sc) => sc !== subCategory
//               ),
//             }
//           : category
//       )
//     );
//   };

//   return (
//     <div className="subcategory">
//       <div className="container mt-4">
//         <h3 className= "mb-4">Sub-Category</h3>
//         <Accordion>
//           {categories.map((category, index) => (
//             <Accordion.Item eventKey={index.toString()} key={category.id}>
//               <Accordion.Header>{category.name}</Accordion.Header>
//               <Accordion.Body>
//                 <ListGroup>
//                   {category.subCategories.map((subCategory, idx) => (
//                     <ListGroup.Item
//                       key={idx}
//                       className="d-flex justify-content-between align-items-center"
//                     >
//                       {subCategory}
//                       <div>
//                         <Button
//                           variant="outline-primary"
//                           size="sm"
//                           className="me-2"
//                           onClick={() =>
//                             openModal(category.id, subCategory, idx)
//                           }
//                         >
//                           <FaEdit />
//                         </Button>
//                         <Button
//                           variant="outline-danger"
//                           size="sm"
//                           onClick={() =>
//                             handleDeleteSubCategory(category.id, subCategory)
//                           }
//                         >
//                           <FaTrash />
//                         </Button>
//                       </div>
//                     </ListGroup.Item>
//                   ))}
//                 </ListGroup>
//                 <Button
//                   variant="outline-success"
//                   className="mt-3"
//                   onClick={() => openModal(category.id)}
//                 >
//                   Add SubCategory
//                 </Button>
//               </Accordion.Body>
//             </Accordion.Item>
//           ))}
//         </Accordion>
//       </div>

//       {/* Modal for Adding or Editing SubCategory */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {isEditMode ? "Edit SubCategory" : "Add SubCategory"}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>SubCategory Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter subcategory name"
//                 value={newSubCategory}
//                 onChange={(e) => setNewSubCategory(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Cancel
//           </Button>
//           <Button
//             variant="primary"
//             onClick={isEditMode ? handleEditSubCategory : handleAddSubCategory}
//           >
//             {isEditMode ? "Update SubCategory" : "Add SubCategory"}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default SubCategory;



// import React, { useState, useEffect } from "react";
// import { Accordion, ListGroup, Button, Modal, Form } from "react-bootstrap";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";

// const SubCategory = () => {
//   const [categories, setCategories] = useState([]); // Categories will be fetched from backend
//   const [showModal, setShowModal] = useState(false);
//   const [currentCategoryId, setCurrentCategoryId] = useState(null);
//   const [currentSubCategory, setCurrentSubCategory] = useState("");
//   const [newSubCategory, setNewSubCategory] = useState("");
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   // Fetch categories and subcategories from backend
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         // Replace this with your API call to fetch categories
//         const response = await fetch("http://localhost:8085/category/all");
//         const data = await response.json();
//         setCategories(data); // Set the fetched categories to state
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(()=>{

//   },[currentCategoryId])

//   // Add new subcategory
//   const handleAddSubCategory = () => {
//     setCategories((prevCategories) =>
//       prevCategories.map((category) =>
//         category.id === currentCategoryId
//           ? {
//               ...category,
//               subCategories: [...category.subCategories, newSubCategory],
//             }
//           : category
//       )
//     );
//     setShowModal(false);
//     setNewSubCategory("");
//   };

//   // Edit existing subcategory
//   const handleEditSubCategory = () => {
//     setCategories((prevCategories) =>
//       prevCategories.map((category) =>
//         category.id === currentCategoryId
//           ? {
//               ...category,
//               subCategories: category.subCategories.map((subCategory, idx) =>
//                 idx === editIndex ? newSubCategory : subCategory
//               ),
//             }
//           : category
//       )
//     );
//     setShowModal(false);
//     setIsEditMode(false);
//     setNewSubCategory("");
//     setEditIndex(null);
//   };

//   // Open the modal to add or edit a subcategory
//   const openModal = (categoryId, subCategory = "", index = null) => {
//     setCurrentCategoryId(categoryId);
//     setCurrentSubCategory(subCategory);
//     setNewSubCategory(subCategory); // Pre-fill for editing
//     setIsEditMode(index !== null); // Check if it's edit mode
//     setEditIndex(index);
//     setShowModal(true);
//   };

//   // Delete a subcategory
//   const handleDeleteSubCategory = (categoryId, subCategory) => {
//     setCategories((prevCategories) =>
//       prevCategories.map((category) =>
//         category.id === categoryId
//           ? {
//               ...category,
//               subCategories: category.subCategories.filter(
//                 (sc) => sc !== subCategory
//               ),
//             }
//           : category
//       )
//     );
//   };

//   return (
//     <div className="subcategory">
//       <div className="container mt-4">
//         <h3 className="mb-4">Sub-Category</h3>
//         <Accordion>
//           {categories.map((category, index) => (
//             <Accordion.Item eventKey={index.toString()} key={category.id}>
//               <Accordion.Header>{category.name}</Accordion.Header>
//               <Accordion.Body>
//                 <ListGroup>
//                   {/* {category.subCategories.map((subCategory, idx) => (
//                     <ListGroup.Item
//                       key={idx}
//                       className="d-flex justify-content-between align-items-center"
//                     >
//                       {subCategory}
//                       <div>
//                         <Button
//                           variant="outline-primary"
//                           size="sm"
//                           className="me-2"
//                           onClick={() =>
//                             openModal(category.id, subCategory, idx)
//                           }
//                         >
//                           <FaEdit />
//                         </Button>
//                         <Button
//                           variant="outline-danger"
//                           size="sm"
//                           onClick={() =>
//                             handleDeleteSubCategory(category.id, subCategory)
//                           }
//                         >
//                           <FaTrash />
//                         </Button>
//                       </div>
//                     </ListGroup.Item>
//                   ))} */}
//                 </ListGroup>
//                 <Button
//                   variant="outline-success"
//                   className="mt-3"
//                   onClick={() => openModal(category.id)}
//                 >
//                   Add SubCategory
//                 </Button>
//               </Accordion.Body>
//             </Accordion.Item>
//           ))}
//         </Accordion>
//       </div>

//       {/* Modal for Adding or Editing SubCategory */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {isEditMode ? "Edit SubCategory" : "Add SubCategory"}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>SubCategory Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter subcategory name"
//                 value={newSubCategory}
//                 onChange={(e) => setNewSubCategory(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Cancel
//           </Button>
//           <Button
//             variant="primary"
//             onClick={isEditMode ? handleEditSubCategory : handleAddSubCategory}
//           >
//             {isEditMode ? "Update SubCategory" : "Add SubCategory"}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default SubCategory;

import React, { useState, useEffect } from "react";
import { Accordion, ListGroup, Button, Modal, Form } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios"; // Import axios
import "bootstrap/dist/css/bootstrap.min.css";

const SubCategory = () => {
  const [categories, setCategories] = useState([]); // Categories to display in accordion
  const [subCategories, setSubCategories] = useState([]); // State to hold the subcategories fetched for a category
  const [showModal, setShowModal] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [currentSubCategory, setCurrentSubCategory] = useState("");
  const [newSubCategory, setNewSubCategory] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Fetch categories from the backend (static data for categories)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Replace this with your actual API call to fetch categories (e.g. a list of category names)
        const response = await axios.get("/category/all");
        setCategories(response.data); // Set the fetched categories to state
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch subcategories based on category name
  const fetchSubCategories = async (categoryName) => {
    try {
      const response = await axios.get(
        `/subcategory/byCategoryName/${categoryName}`
      );
      setSubCategories(response.data); // Set the fetched subcategories to state
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      setSubCategories([]); // Clear subcategories if error occurs
    }
  };

  // Add new subcategory
  const handleAddSubCategory = (categoryId) => {
    
    axios.post(`/subcategory/add/${categoryId}`,{
      "name": newSubCategory
    }).then((res)=>{
      setShowModal(false);
    fetchSubCategories(res.data.category.name)
    setNewSubCategory("");
    })
    
  };

  // Edit existing subcategory
  const handleEditSubCategory = () => {
    setSubCategories((prevSubCategories) =>
      prevSubCategories.map((subCategory, idx) =>
        idx === editIndex ? newSubCategory : subCategory
      )
    );
    setShowModal(false);
    setIsEditMode(false);
    setNewSubCategory("");
    setEditIndex(null);
  };

  // Open the modal to add or edit a subcategory
  const openModal = (categoryId, categoryName, subCategory = "", index = null) => {
    setCurrentCategoryId(categoryId);
    setCurrentSubCategory(subCategory);
    setNewSubCategory(subCategory); // Pre-fill for editing
    setIsEditMode(index !== null); // Check if it's edit mode
    setEditIndex(index);
    setShowModal(true);

    // Fetch subcategories based on category name when modal opens
    fetchSubCategories(categoryName);
  };

  // Delete a subcategory
  const handleDeleteSubCategory = (subCategory) => {
    setSubCategories((prevSubCategories) =>
      prevSubCategories.filter((sc) => sc !== subCategory)
    );
  };

  const handleAccordionSelect = (eventKey) => {
    // This function is triggered when an accordion item is opened.
    // You can run any logic here like fetching subcategories or performing other actions.
    console.log(`Accordion item ${eventKey} opened.`);
    fetchSubCategories(eventKey)

    // Here you can call your function to fetch subcategories or perform other actions.
  };

  return (
    <div className="subcategory">
      <div className="container mt-4">
        <h3 className="mb-4">Sub-Category</h3>
        <Accordion onSelect={handleAccordionSelect}>
          {categories.map((category, index) => (
            <Accordion.Item eventKey={category.name} key={category.id}>
              <Accordion.Header>{category.name}</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  {/* List subcategories dynamically */}
                  {subCategories.length > 0 ? (
                    subCategories.map((subCategory, idx) => (
                      <ListGroup.Item
                        key={idx}
                        className="d-flex justify-content-between align-items-center"
                      >
                        {subCategory.name}
                        <div>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            className="me-2"
                            onClick={() =>
                              openModal(category.categoryId, category.name, subCategory, idx)
                            }
                          >
                            <FaEdit />
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleDeleteSubCategory(subCategory)}
                          >
                            <FaTrash />
                          </Button>
                        </div>
                      </ListGroup.Item>
                    ))
                  ) : (
                    <ListGroup.Item>No subcategories available</ListGroup.Item>
                  )}
                </ListGroup>
                <Button
                  variant="outline-success"
                  className="mt-3"
                  onClick={() => openModal(category.categoryId, category.name)}
                >
                  Add SubCategory
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      {/* Modal for Adding or Editing SubCategory */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEditMode ? "Edit SubCategory" : "Add SubCategory"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>SubCategory Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subcategory name"
                value={newSubCategory}
                onChange={(e) => setNewSubCategory(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={isEditMode ? handleEditSubCategory : ()=>handleAddSubCategory(currentCategoryId)}
          >
            {isEditMode ? "Update SubCategory" : "Add SubCategory"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SubCategory;

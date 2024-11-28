// import React, { useState } from "react";
// import { Modal, Button, Form, Table } from "react-bootstrap";
// import { FaPen } from "react-icons/fa";

// const UserProfilePage = () => {
//   const [showImageModal, setShowImageModal] = useState(false);
//   const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
//   const [showOrderModal, setShowOrderModal] = useState(false);
//   const [showAddressModal, setShowAddressModal] = useState(false);
//   const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);
//   const [selectedAddress, setSelectedAddress] = useState(null);

//   const [userData, setUserData] = useState({
//     firstName: "John",
//     lastName: "Doe",
//     email: "john.doe@example.com",
//     mobile: "123-456-7890",
//     password: "******",
//     role: "User",
//     profileImage: "https://via.placeholder.com/200",
//   });

//   const [orders, setOrders] = useState([
//     {
//       id: "ORD123",
//       status: "Completed",
//       details: {
//         date: "2024-11-15",
//         totalAmount: "$150",
//         paymentMode: "Credit Card",
//         address: "123 Main Street, Springfield",
//       },
//     },
//     {
//       id: "ORD124",
//       status: "In Transit",
//       details: {
//         date: "2024-11-16",
//         totalAmount: "$200",
//         paymentMode: "Debit Card",
//         address: "456 Elm Street, Chicago",
//       },
//     },
//   ]);

//   const [addresses, setAddresses] = useState([
//     {
//       id: 1,
//       recipientName: "John Doe",
//       phone: "123-456-7890",
//       addressLine1: "123 Main Street",
//       addressLine2: "Apt 4B",
//       city: "Springfield",
//       state: "IL",
//       country: "USA",
//       pincode: "62704",
//       label: "Home",
//       primary: true,
//     },
//     {
//       id: 2,
//       recipientName: "Jane Smith",
//       phone: "987-654-3210",
//       addressLine1: "456 Elm Street",
//       addressLine2: "Suite 2A",
//       city: "Chicago",
//       state: "IL",
//       country: "USA",
//       pincode: "60616",
//       label: "Work",
//       primary: false,
//     },
//   ]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setUserData({ ...userData, profileImage: imageUrl });
//     }
//     setShowImageModal(false);
//   };

//   const handleOrderDetails = (orderDetails) => {
//     setSelectedOrderDetails(orderDetails);
//     setShowOrderModal(true);
//   };

//   const handleAddOrUpdateAddress = (address) => {
//     if (selectedAddress) {
//       setAddresses((prev) =>
//         prev.map((addr) => (addr.id === selectedAddress.id ? address : addr))
//       );
//     } else {
//       setAddresses((prev) => [
//         ...prev,
//         { ...address, id: Date.now(), primary: false },
//       ]);
//     }
//     setShowAddressModal(false);
//   };

//   const handleSetPrimary = (id) => {
//     setAddresses((prev) =>
//       prev.map((addr) =>
//         addr.id === id ? { ...addr, primary: true } : { ...addr, primary: false }
//       )
//     );
//   };

//   return (
//     <div className="container mt-5">
//       {/* Profile Image Section */}
//       <div className="text-center position-relative">
//         <img
//           src={userData.profileImage}
//           alt="Profile"
//           className="rounded-circle"
//           style={{ width: "200px", height: "200px" }}
//         />
//         <Button
//           variant="link"
//           onClick={() => setShowImageModal(true)}
//           className="position-absolute"
//           style={{ bottom: "0", right: "20%" }}
//         >
//           <FaPen style={{ fontSize: "20px" }} />
//         </Button>
//       </div>

//       {/* User Details */}
//       <div className="mt-4 d-flex justify-content-between align-items-center">
//         <h3>User Details</h3>
//         <FaPen
//           onClick={() => setShowUserDetailsModal(true)}
//           style={{ cursor: "pointer", fontSize: "20px" }}
//         />
//       </div>
//       <Table striped bordered hover>
//         <tbody>
//           <tr>
//             <td>First Name</td>
//             <td>{userData.firstName}</td>
//           </tr>
//           <tr>
//             <td>Last Name</td>
//             <td>{userData.lastName}</td>
//           </tr>
//           <tr>
//             <td>Email</td>
//             <td>{userData.email}</td>
//           </tr>
//           <tr>
//             <td>Mobile</td>
//             <td>{userData.mobile}</td>
//           </tr>
//           <tr>
//             <td>Role</td>
//             <td>{userData.role}</td>
//           </tr>
//         </tbody>
//       </Table>

//       {/* Address Section */}
//       <div className="mt-4 d-flex justify-content-between align-items-center">
//         <h3>Addresses</h3>
//         <Button onClick={() => setShowAddressModal(true)}>Add Address</Button>
//       </div>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Recipient</th>
//             <th>Phone</th>
//             <th>Address</th>
//             <th>City</th>
//             <th>State</th>
//             <th>Country</th>
//             <th>Pincode</th>
//             <th>Primary</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {addresses.map((address) => (
//             <tr key={address.id}>
//               <td>{address.recipientName}</td>
//               <td>{address.phone}</td>
//               <td>{`${address.addressLine1}, ${address.addressLine2}`}</td>
//               <td>{address.city}</td>
//               <td>{address.state}</td>
//               <td>{address.country}</td>
//               <td>{address.pincode}</td>
//               <td>
//                 <Form.Check
//                   type="radio"
//                   name="primaryAddress"
//                   checked={address.primary}
//                   onChange={() => handleSetPrimary(address.id)}
//                 />
//               </td>
//               <td>
//                 <Button
//                   variant="link"
//                   onClick={() => {
//                     setSelectedAddress(address);
//                     setShowAddressModal(true);
//                   }}
//                 >
//                   Edit
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Orders Section */}
//       <div className="mt-4">
//         <h3>Orders</h3>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Order ID</th>
//               <th>Status</th>
//               <th>Order Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id}>
//                 <td>{order.id}</td>
//                 <td>{order.status}</td>
//                 <td>
//                   <Button
//                     variant="link"
//                     onClick={() => handleOrderDetails(order.details)}
//                   >
//                     View Details
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       {/* Address Modal */}
//       <Modal show={showAddressModal} onHide={() => setShowAddressModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>{selectedAddress ? "Edit Address" : "Add Address"}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form
//             onSubmit={(e) => {
//               e.preventDefault();
//               const newAddress = {
//                 ...selectedAddress,
//                 recipientName: e.target.recipientName.value,
//                 phone: e.target.phone.value,
//                 addressLine1: e.target.addressLine1.value,
//                 addressLine2: e.target.addressLine2.value,
//                 city: e.target.city.value,
//                 state: e.target.state.value,
//                 country: e.target.country.value,
//                 pincode: e.target.pincode.value,
//                 label: e.target.label.value,
//                 primary: e.target.primary.checked,
//               };
//               handleAddOrUpdateAddress(newAddress);
//             }}
//           >
//             <Form.Group controlId="recipientName">
//               <Form.Label>Recipient Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 defaultValue={selectedAddress?.recipientName || ""}
//               />
//             </Form.Group>
//             <Form.Group controlId="phone">
//               <Form.Label>Phone</Form.Label>
//               <Form.Control
//                 type="text"
//                 defaultValue={selectedAddress?.phone || ""}
//               />
//             </Form.Group>
//             <Form.Group controlId="addressLine1">
//               <Form.Label>Address Line 1</Form.Label>
//               <Form.Control
//                 type="text"
//                 defaultValue={selectedAddress?.addressLine1 || ""}
//               />
//             </Form.Group>
//             <Form.Group controlId="addressLine2">
//               <Form.Label>Address Line 2</Form.Label>
//               <Form.Control
//                 type="text"
//                 defaultValue={selectedAddress?.addressLine2 || ""}
//               />
//             </Form.Group>
//             <Form.Group controlId="city">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 type="text"
//                 defaultValue={selectedAddress?.city || ""}
//               />
//             </Form.Group>
//             <Form.Group controlId="state">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 type="text"
//                 defaultValue={selectedAddress?.state || ""}
//               />
//             </Form.Group>
//             <Form.Group controlId="country">
//               <Form.Label>Country</Form.Label>
//               <Form.Control
//                 type="text"
//                 defaultValue={selectedAddress?.country || ""}
//               />
//             </Form.Group>
//             <Form.Group controlId="pincode">
//               <Form.Label>Pincode</Form.Label>
//               <Form.Control
//                 type="text"
//                 defaultValue={selectedAddress?.pincode || ""}
//               />
//             </Form.Group>
//             <Form.Group controlId="label">
//               <Form.Label>Label (e.g., Home, Work)</Form.Label>
//               <Form.Control
//                 type="text"
//                 defaultValue={selectedAddress?.label || ""}
//               />
//             </Form.Group>
//             <Form.Group controlId="primary">
//               <Form.Check
//                 type="checkbox"
//                 label="Primary Address"
//                 defaultChecked={selectedAddress?.primary || false}
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               {selectedAddress ? "Update Address" : "Add Address"}
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>

//       {/* Order Details Modal */}
//       <Modal show={showOrderModal} onHide={() => setShowOrderModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Order Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedOrderDetails && (
//             <>
//               <p><strong>Date:</strong> {selectedOrderDetails.date}</p>
//               <p><strong>Total Amount:</strong> {selectedOrderDetails.totalAmount}</p>
//               <p><strong>Payment Mode:</strong> {selectedOrderDetails.paymentMode}</p>
//               <p><strong>Address:</strong> {selectedOrderDetails.address}</p>
//             </>
//           )}
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default UserProfilePage;





import React, { useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import { FaPen } from "react-icons/fa";

const UserProfilePage = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    mobile: "123-456-7890",
    password: "******",
    role: "User",
    profileImage: "https://via.placeholder.com/200",
  });

  const [orders, setOrders] = useState([
    {
      id: "ORD123",
      status: "Completed",
      details: {
        date: "2024-11-15",
        totalAmount: "$150",
        paymentMode: "Credit Card",
        address: "123 Main Street, Springfield",
      },
    },
    {
      id: "ORD124",
      status: "In Transit",
      details: {
        date: "2024-11-16",
        totalAmount: "$200",
        paymentMode: "Debit Card",
        address: "456 Elm Street, Chicago",
      },
    },
  ]);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      recipientName: "John Doe",
      phone: "123-456-7890",
      addressLine1: "123 Main Street",
      addressLine2: "Apt 4B",
      city: "Springfield",
      state: "IL",
      country: "USA",
      pincode: "62704",
      label: "Home",
      primary: true,
    },
    {
      id: 2,
      recipientName: "Jane Smith",
      phone: "987-654-3210",
      addressLine1: "456 Elm Street",
      addressLine2: "Suite 2A",
      city: "Chicago",
      state: "IL",
      country: "USA",
      pincode: "60616",
      label: "Work",
      primary: false,
    },
  ]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a local URL for the selected image
      setUserData((prevData) => ({ ...prevData, profileImage: imageUrl }));
    }
    setShowImageModal(false); // Close the modal after the image is selected
  };

  const handleOrderDetails = (orderDetails) => {
    setSelectedOrderDetails(orderDetails);
    setShowOrderModal(true);
  };

  const handleAddOrUpdateAddress = (address) => {
    if (selectedAddress) {
      setAddresses((prev) =>
        prev.map((addr) => (addr.id === selectedAddress.id ? address : addr))
      );
    } else {
      setAddresses((prev) => [
        ...prev,
        { ...address, id: Date.now(), primary: false },
      ]);
    }
    setShowAddressModal(false);
  };

  const handleSetPrimary = (id) => {
    setAddresses((prev) =>
      prev.map((addr) =>
        addr.id === id ? { ...addr, primary: true } : { ...addr, primary: false }
      )
    );
  };

  return (
    <div className="container mt-5">
      {/* Profile Image Section */}
      <div className="text-center position-relative">
        <img
          src={userData.profileImage}
          alt="Profile"
          className="rounded-circle"
          style={{ width: "200px", height: "200px" }}
        />
        <Button
          variant="link"
          onClick={() => setShowImageModal(true)}
          className="position-absolute"
          style={{ bottom: "0", right: "20%" }}
        >
          <FaPen style={{ fontSize: "20px" }} />
        </Button>
      </div>

      {/* User Details */}
      <div className="mt-4 d-flex justify-content-between align-items-center">
        <h3>User Details</h3>
        <FaPen
          onClick={() => setShowUserDetailsModal(true)}
          style={{ cursor: "pointer", fontSize: "20px" }}
        />
      </div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{userData.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{userData.lastName}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{userData.email}</td>
          </tr>
          <tr>
            <td>Mobile</td>
            <td>{userData.mobile}</td>
          </tr>
          <tr>
            <td>Role</td>
            <td>{userData.role}</td>
          </tr>
        </tbody>
      </Table>

      {/* Address Section */}
      <div className="mt-4 d-flex justify-content-between align-items-center">
        <h3>Addresses</h3>
        <Button onClick={() => setShowAddressModal(true)}>Add Address</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Recipient</th>
            <th>Phone</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Pincode</th>
            <th>Primary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((address) => (
            <tr key={address.id}>
              <td>{address.recipientName}</td>
              <td>{address.phone}</td>
              <td>{`${address.addressLine1}, ${address.addressLine2}`}</td>
              <td>{address.city}</td>
              <td>{address.state}</td>
              <td>{address.country}</td>
              <td>{address.pincode}</td>
              <td>
                <Form.Check
                  type="radio"
                  name="primaryAddress"
                  checked={address.primary}
                  onChange={() => handleSetPrimary(address.id)}
                />
              </td>
              <td>
                <Button
                  variant="link"
                  onClick={() => {
                    setSelectedAddress(address);
                    setShowAddressModal(true);
                  }}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Orders Section */}
      <div className="mt-4">
        <h3>Orders</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>Order Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.status}</td>
                <td>
                  <Button
                    variant="link"
                    onClick={() => handleOrderDetails(order.details)}
                  >
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Address Modal */}
      <Modal show={showAddressModal} onHide={() => setShowAddressModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedAddress ? "Edit Address" : "Add Address"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              const newAddress = {
                ...selectedAddress,
                recipientName: e.target.recipientName.value,
                phone: e.target.phone.value,
                addressLine1: e.target.addressLine1.value,
                addressLine2: e.target.addressLine2.value,
                city: e.target.city.value,
                state: e.target.state.value,
                country: e.target.country.value,
                pincode: e.target.pincode.value,
                label: e.target.label.value,
                primary: e.target.primary.checked,
              };
              handleAddOrUpdateAddress(newAddress);
            }}
          >
            <Form.Group controlId="recipientName">
              <Form.Label>Recipient Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={selectedAddress?.recipientName || ""}
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                defaultValue={selectedAddress?.phone || ""}
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
            <Form.Group controlId="primary">
              <Form.Check
                type="checkbox"
                label="Primary Address"
                defaultChecked={selectedAddress?.primary || false}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {selectedAddress ? "Update Address" : "Add Address"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Profile Image Update Modal */}
      <Modal show={showImageModal} onHide={() => setShowImageModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Choose Image</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>
            <Button variant="primary" onClick={() => setShowImageModal(false)}>
              Upload
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Order Details Modal */}
      <Modal show={showOrderModal} onHide={() => setShowOrderModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrderDetails && (
            <>
              <p><strong>Date:</strong> {selectedOrderDetails.date}</p>
              <p><strong>Total Amount:</strong> {selectedOrderDetails.totalAmount}</p>
              <p><strong>Payment Mode:</strong> {selectedOrderDetails.paymentMode}</p>
              <p><strong>Address:</strong> {selectedOrderDetails.address}</p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserProfilePage;

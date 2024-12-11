import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { AppContext } from "../../../context/AppContext";
import axios from "axios";
import Loading from "../../../components/Loading";
import AWS from 'aws-sdk'

const UserProfilePage = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);
  const [selectedOrderItemDetails, setselectedOrderItemDetails] = useState([])
  const [selectedAddress, setSelectedAddress] = useState(null);
  const { userData, authToken, updateUserData } = useContext(AppContext);
  // const [profileImg, setProfileImg] = useState("")
  var userImageUrl = ""


  // const [userData, setUserData] = useState({
  //   firstName: "John",
  //   lastName: "Doe",
  //   email: "john.doe@example.com",
  //   mobile: "123-456-7890",
  //   password: "******",
  //   role: "User",
  //   profileImage: "https://via.placeholder.com/200",
  // });

  useEffect(() => {
    if (selectedOrderDetails?.listOfOrderItems) {
      const fetchProducts = async () => {
        const itemsWithDetails = await Promise.all(
          selectedOrderDetails.listOfOrderItems.map(async (item) => {
            try {
              const res = await axios.get(`/product/${item.productId}`);
              return {
                ...item,
                name: res.data?.name || "Unknown",
                image: res.data?.profileImgUrl || "",
                price: res.data?.price
              };
            } catch (err) {
              console.error(`Error fetching product ${item.productId}:`, err);
              return { ...item, name: "Error fetching data" };
            }
          })
        );
        console.log(itemsWithDetails)
        setselectedOrderItemDetails(itemsWithDetails)
        // setOrderItems(itemsWithDetails);
      };

      fetchProducts();
    }
  }, [selectedOrderDetails]);

  AWS.config.update({
    accessKeyId: 'AKIAX7XJSL7WNCGGVJN3',
    secretAccessKey: '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',
    region: 'ap-south-1',
  });

  const s3 = new AWS.S3();

  const uploadImage = (file) => {
    return new Promise((resolve, reject) => {
      const params = {
        Bucket: 'ecom-imgs',
        Key: `user/${file.name}`,
        Body: file,
        ContentType: file.type,
      };
  
      s3.upload(params, function (err, data) {
        if (err) {
          reject(err); // Reject if error occurs
        } else {
          resolve(data.Location); // Resolve with the URL if upload is successful
        }
      });
    });
  };


  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // const imageUrl = URL.createObjectURL(file); // Create a local URL for the selected image
      userImageUrl = await uploadImage(file);
    }
    setShowImageModal(false); // Close the modal after the image is selected
  };

  const handleOrderDetails = (orderDetails) => {
    setSelectedOrderDetails(orderDetails);
    setShowOrderModal(true);
  };

  const areObjectsEqual = (obj1, obj2) => {
    return Object.keys(obj1).every(key => obj1[key] === obj2[key]);
  };

  const handleUpdateUser = (user) => {
    if (userData) {
      if (!areObjectsEqual(user, userData)) {
        console.log(user)
        axios.put("/users/me", { ...user }, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }).then((res) => {
          console.log(res.data)
          updateUserData()
          console.log(userData)
        })
      } else {
        setShowUserDetailsModal(false)
      }
    }
    setShowUserDetailsModal(false)
  }

  const handleAddOrUpdateAddress = (address) => {
    if (address.addressId) {
      axios.put('/users/me/addresses/update', { ...address }, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        }
      }).then((res) => {
        console.log(res.data)
        updateUserData()
      })
    }else{
      axios.put('/users/me/addresses/add', { ...address }, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        }
      }).then((res) => {
        console.log(res.data)
        updateUserData()
      })
    }

    setShowAddressModal(false);
  };

  if (!userData) {
    return <Loading />
  }
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">

        {/* Profile Image Section */}
        <div className="text-center position-relative w-50">
          <img
            // src={userData.profileImg}
            src={userData.profileImg}
            alt="Profile"
            className="rounded-circle img-fluid"
            style={{ width: "200px", height: "200px", objectFit: 'cover' }}
          />

        </div>

        {/* User Details */}
        <div className="w-50">

          <div className="mt-4 d-flex justify-content-between align-items-center">
            <h3>User Details</h3>
            <FaPen
              onClick={() => setShowUserDetailsModal(true)}
              style={{ cursor: "pointer", fontSize: "20px" }}
            />
          </div>
          <Table striped bordered hover >
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
                <td>{userData.roles}</td>
              </tr>
              <tr>
                <td>Wallet Balance</td>
                <td>₹{userData.walletBalance.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      {/* Address Section */}
      <div className="mt-4 d-flex justify-content-between align-items-center">
        <h3>Addresses</h3>
        <button className="btn btn-outline-secondary btn-sm" onClick={() => setShowAddressModal(true)}>Add Address</button>
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
            <th>Label</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.listOfUserAdresses.map((address) => (
            <tr key={address.addressId}>
              <td>{address.recepientName}</td>
              <td>{address.addressMobile}</td>
              <td>{`${address.addressLine1}, ${address.addressLine2}`}</td>
              <td>{address.city}</td>
              <td>{address.state}</td>
              <td>{address.country}</td>
              <td>{address.pincode}</td>
              {/* <td>
                <Form.Check
                  type="radio"
                  name="primaryAddress"
                  checked={address.is_primary}
                  onChange={() => handleSetPrimary(address.addressId)}
                />
              </td> */}
              <td><div
                className=""
                style={{
                  top: '5px',
                  right: '5px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  padding: '2px 6px',
                  fontSize: '12px',
                  // backgroundColor: 'white',
                }}
              >
                {address.label}
              </div></td>
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
            {userData.orderList.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.orderStatus}</td>
                <td>
                  <Button
                    variant="link"
                    onClick={() => handleOrderDetails(order)}
                  >
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {/* {User Details Modal} */}
      <Modal show={showUserDetailsModal} onHide={() => setShowUserDetailsModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{userData ? "Edit User Details" : "No User Data"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              const newUser = {
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                mobile: e.target.phone.value,
                profileImgUrl: userImageUrl,
              };
              handleUpdateUser(newUser);
            }}
          >
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={userData?.firstName || ""}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={userData?.lastName || ""}
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control
                type="number"
                defaultValue={userData?.mobile || ""}
              />
            </Form.Group>
            <Form.Group controlId="profileImg">
              <Form.Label>Choose Image</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>
            <button className="btn btn-dark btn-sm my-2" type="submit">
              {userData ? "Update" : "Add Address"}
            </button>
          </Form>
        </Modal.Body>
      </Modal>

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
                recepientName: e.target.recipientName.value,
                addressMobile: e.target.phone.value,
                addressLine1: e.target.addressLine1.value,
                addressLine2: e.target.addressLine2.value,
                city: e.target.city.value,
                state: e.target.state.value,
                country: e.target.country.value,
                pincode: e.target.pincode.value,
                label: e.target.label.value,
              };
              handleAddOrUpdateAddress(newAddress);
            }}
          >
            <Form.Group controlId="recipientName">
              <Form.Label>Recipient Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={selectedAddress?.recepientName || ""}
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                defaultValue={selectedAddress?.addressMobile || ""}
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


            <button className="btn btn-dark btn-sm my-2" type="submit">
              {selectedAddress ? "Update Address" : "Add Address"}
            </button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Profile Image Update Modal */}
      {/* <Modal show={showImageModal} onHide={() => setShowImageModal(false)}>
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
      </Modal> */}

      {/* Order Details Modal */}
      <Modal show={showOrderModal} onHide={() => setShowOrderModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrderDetails && (
            <>
              <p><strong>Date:</strong> {new Date(selectedOrderDetails.createdAt).toLocaleString()}</p>
              <p><strong>Total Amount:</strong> {selectedOrderDetails.totalAmount}</p>
              <p><strong>Payment Mode:</strong> {selectedOrderDetails.payment.paymentMethod}</p>
              <p>
                <strong>Address:</strong>{" "}
                {(() => {
                  const matchedAddress = userData.listOfUserAdresses.find(
                    (x) => x.addressId === selectedOrderDetails.addressId
                  );
                  return matchedAddress
                    ? `${matchedAddress.addressLine1}, ${matchedAddress.addressLine2}, ${matchedAddress.city}`
                    : "N/A";
                })()}
              </p>


              <h5>Ordered Items:</h5>
              {selectedOrderDetails.listOfOrderItems && selectedOrderDetails.listOfOrderItems.length > 0 ? (
                <ul className="list-group">
                  {selectedOrderItemDetails.map((item, index) => (
                    <li className="list-group-item p-3" key={index}>
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <img
                            src={item.image || 'https://via.placeholder.com/100'}
                            alt={item.name}
                            className="img-fluid rounded"
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                          />
                        </div>
                        <div className="flex-grow-1">
                          <p className="mb-1"><strong>Name:</strong> {item.name}</p>
                          {item.variations != "undefined"  && 
                          <p className="mb-1"><strong>Size:</strong> {item.variations}</p>
                          }
                          <p className="mb-1"><strong>Quantity:</strong> {item.quantity}</p>
                          <p className="mb-1"><strong>Price:</strong> ₹{item.price}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

              ) : (
                <p>No items found in this order.</p>
              )}
            </>
          )}
        </Modal.Body>

      </Modal>
    </div>
  );
};

export default UserProfilePage;

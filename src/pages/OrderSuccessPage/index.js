import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button, Alert } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import Loading from '../../components/Loading';

const OrderSuccessPage = () => {
  const { order, userData } = useContext(AppContext);
  const [deliveryAddress, setDeliveryAddress] = useState("")
  useEffect(() => {
    if(userData){

      userData.listOfUserAdresses.forEach((x)=>{
        if(x.addressId == order.addressId){
          setDeliveryAddress(x.addressLine1 + ", " + x.addressLine2 + ", "+ x.city)
        }
      })
    }
  }, [userData,order])
  
  if(!userData){
    return <Loading/>
  }
  
  if(!order){
    return <Loading/>
  }
  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          {/* Success Message */}
          <div className="d-flex justify-content-center mb-4">
            <Alert variant="success" className="text-center w-75 py-3">
              <FaCheckCircle size={50} className="mb-2" />
              <h4>Order Successfully Placed!</h4>
              <p>Your order has been successfully placed and will be delivered soon.</p>
            </Alert>
          </div>

          {/* User Details Section */}
          {/*<div className="text-center mb-4">
            <h3 className="text-primary">Order Summary</h3>
            <Table striped bordered hover responsive className="mt-3">
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
              </tbody>
            </Table>
          </div>8/}

          
          {/* Button to go back or proceed */}
          <div className="text-center mt-4">
            <Button variant="primary" size="lg" href="/">Go to Home</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderSuccessPage;

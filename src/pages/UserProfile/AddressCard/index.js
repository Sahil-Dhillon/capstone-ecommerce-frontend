import React, { useState } from 'react';

const AddressCard = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, street: '123 Main St', city: 'New York', state: 'NY', zip: '10001' },
    { id: 2, street: '456 Oak St', city: 'Los Angeles', state: 'CA', zip: '90001' },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [newAddress, setNewAddress] = useState('');

  const handleEditAddress = () => {
    setIsEditing(true);
  };

  const handleSaveAddress = () => {
    setAddresses([...addresses, newAddress]);
    setIsEditing(false);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">User Addresses</h5>
        <ul className="list-group">
          {addresses.map((address, index) => (
            <li key={index} className="list-group-item">
              {address.street}, {address.city}, {address.state}, {address.zip}
            </li>
          ))}
        </ul>
        {isEditing ? (
          <div>
            <input
              type="text"
              placeholder="New Address"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              className="form-control mt-2"
            />
            <button onClick={handleSaveAddress} className="btn btn-success mt-2">
              Save Address
            </button>
          </div>
        ) : (
          <button onClick={handleEditAddress} className="btn btn-primary mt-3">
            Add New Address
          </button>
        )}
      </div>
    </div>
  );
};

export default AddressCard;

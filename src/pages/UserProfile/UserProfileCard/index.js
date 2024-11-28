import React from 'react';

const UserProfileCard = () => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    role: 'Admin',
    createdAt: '2023-01-15',
    profileImage: 'https://thehub.incedoinc.com/Style%20Library/Images/CEOConenctNew.png',
  };

  return (
    <div className="card">
      <img src={user.profileImage} className="card-img-top" alt="User Profile" />
      <div className="card-body">
        <h5 className="card-title">{user.firstName} {user.lastName}</h5>
        <p className="card-text">Email: {user.email}</p>
        <p className="card-text">Phone: {user.phone}</p>
        <p className="card-text">Role: {user.role}</p>
        <p className="card-text">Member Since: {user.createdAt}</p>
      </div>
    </div>
  );
};

export default UserProfileCard;

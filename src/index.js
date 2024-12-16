import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AppProvider } from './context/AppContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Replace with your publishable key
const stripePromise = loadStripe("pk_test_51MW0YNSDTmbZIMwFbrzQsF7YROxgt69zlWdDLMYgBu0HtvEzCNVxOXBeE7DFy6aN9CfG5uvZNAfxPZE7GqgemS6300YxqhEXjK");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
    <Elements stripe={stripePromise}>
    <App />
  </Elements>,
    </AppProvider>
  </React.StrictMode>
);


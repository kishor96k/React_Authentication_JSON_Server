import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import Customer from './Customer';
import AppHeader from './AppHeader';

const Four = () => {
  return (
    <>
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </Router>
    </>
  );
};

const Home = () => {
  return <div>Home Page</div>;
};

export default Four;

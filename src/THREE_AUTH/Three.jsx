import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import UsersList from './Pages/UsersList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';
import './Components/Three.css'
const Three = () => {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/profile" element={<HomePage />} />
                    <Route path="/users" element={<UsersList />} />
                </Routes>
                <Footer/>

            </Router>
        </>
    );
};

export default Three;

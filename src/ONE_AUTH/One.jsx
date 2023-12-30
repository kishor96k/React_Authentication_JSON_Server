import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Header from './Header';
import Details from './Details';

const One = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<SignUp />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/details" element={<Details />} />
                </Routes>
            </Router>
        </>
    );
};

export default One;

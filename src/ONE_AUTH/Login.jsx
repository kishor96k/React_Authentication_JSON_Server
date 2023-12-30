import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import profilebg from '../assets/images/loginbg.png';
import { NavLink, useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();
    const [inpval, setInpval] = useState({
        email: '',
        password: ''
    })

    const onInputChange = (e) => {
        const { value, name } = e.target;
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const getUser = localStorage.getItem('userauthone');

        const { email, password } = inpval;

        if (email === '' || password === '') {
            alert("please add the corresponding field");
        } else if (!email.includes('@')) {
            alert("please add the email in proper format")
        } else if (password.length < 5) {
            alert("password length must be greater than 5")
        } else {

            if (getUser && getUser.length) {
                const userData = JSON.parse(getUser);
                const userLogin = userData.filter((value, index) => {
                    return value.email === email && value.password === password;
                })

                if (userLogin.length === 0) {
                    alert("invalid credentials");
                } else {
                    alert("login Success");
                    localStorage.setItem('loginauthone', JSON.stringify(userLogin));
                    navigate('/details');
                }
            }

        }
    }


    return (
        <div className='mt-4'>
            <div className="container">
                <section className='d-flex justify-content-between'>
                    <div className="left-data col-lg-4 p-4">
                        <h3>Log In</h3>
                        <Form>
                            <Form.Group className="mb-3 ">
                                <Form.Control type="email" name="email" onChange={onInputChange} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" name="password" onChange={onInputChange} placeholder="Enter Password" />
                            </Form.Group>
                            <Button onClick={onSubmit} variant="primary" type="submit" className='col-lg-12'>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-4'>Dont have any account! <span ><NavLink to='/signup'>Create an account</NavLink></span></p>
                    </div>
                    <div className="right-data col-lg-4  p-4">
                        <img src={profilebg} alt="" style={{ maxWidth: "380px", maxHeight: "380px" }} />
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Login;
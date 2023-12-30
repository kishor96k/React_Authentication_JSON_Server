import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import userbg from '../assets/images/userbg.png';
import { NavLink, useNavigate } from 'react-router-dom';




const SignUp = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [inpval, setInpval] = useState({
        name: '',
        email: '',
        date: '',
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
        const { name, email, date, password } = inpval;
        if (name === '' || email === '' || date === '' || password === '') {
            alert("please add the corresponding field");
        } else if (!email.includes('@')) {
            alert("please add the email in proper format")
        } else if (password.length < 5) {
            alert("password length must be greater than 5")
        } else {
            localStorage.setItem('userauthone', JSON.stringify([...data, inpval]));
            navigate('/login');
        }
    }


    return (
        <div className='mt-4'>
            <div className="container">
                <section className='d-flex justify-content-between'>
                    <div className="left-data col-lg-4 p-4">
                        <h3>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 ">
                                <Form.Control type="text" name="name" onChange={onInputChange} placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3 ">
                                <Form.Control type="email" name="email" onChange={onInputChange} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 ">
                                <Form.Control type="date" name='date' onChange={onInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="password" name="password" onChange={onInputChange} placeholder="Enter Password" />
                            </Form.Group>

                            <Button onClick={onSubmit} variant="primary" type="submit" className='col-lg-12'>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-4'>Already have an account <span><NavLink to='/login'>Sign In</NavLink></span></p>
                    </div>
                    <div className="right-data col-lg-4  p-4">
                        <img src={userbg} alt="" style={{ maxWidth: "380px", maxHeight: "380px" }} />
                    </div>
                </section>
            </div>

        </div>
    );
};

export default SignUp;
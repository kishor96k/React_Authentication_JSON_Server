import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import Home from './Home';

const Signup = () => {

    const name = useRef();
    const email = useRef();
    const password = useRef();
    const [showhome, setShowHome] = useState(false);
    const [show, setShow] = useState(false);

    const localSignUp = localStorage.getItem('twoauthsignin');
    const localEmail = localStorage.getItem('twoauthemail');
    const localName = localStorage.getItem('twoauthname');
    const localPassword = localStorage.getItem('twoauthpassword');

    useEffect(() => {
        if (localSignUp) {
            setShowHome(true);
        } else if (localEmail) {
            setShow(true);
        }
    }, [])

    const handleSignup = (e) => {
        e.preventDefault();
        if (name.current.value && email.current.value && password.current.value) {
            localStorage.setItem('twoauthname', name.current.value);
            localStorage.setItem('twoauthemail', email.current.value);
            localStorage.setItem('twoauthpassword', password.current.value);
            localStorage.setItem('twoauthsignin', email.current.value);
            alert("account created successfully");
            window.location.reload();
        }
    }
    
    const handleLogIn = (e) => {
        e.preventDefault();
        if (email.current.value === localEmail && password.current.value === localPassword) {
            localStorage.setItem('twoauthsignin', email.current.value);
            alert("login successfully");
            window.location.reload();
        } else {
            alert("please check the valida credentials");
        }
    }

    return (
        <div>
            {showhome ? <Home /> :
                (show ?
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4">
                            <div className="container">
                                <h2>Login In Form</h2>
                                <h4>{localName}</h4>
                                <div className="form-group mt-3 mb-3">
                                    <input type="email" ref={email} name="email" id="email" className='form-control' placeholder='enter email' />
                                </div>
                                <div className="form-group mt-3 mb-3">
                                    <input type="password" ref={password} name="password" id="password" className='form-control' placeholder='enter password' />
                                </div>
                                <div className="form-group mt-3 mb-3">
                                    <button className='btn btn-info mt-4' onClick={handleLogIn}>Log in</button>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4">
                            <div className="container">
                                <h2>Sign In Form</h2>
                                <div className="form-group mt-3 mb-3">
                                    <input type="text" ref={name} name="name" id="name" className='form-control' placeholder='enter name' />
                                </div>
                                <div className="form-group mt-3 mb-3">
                                    <input type="email" ref={email} name="email" id="email" className='form-control' placeholder='enter email' />
                                </div>
                                <div className="form-group mt-3 mb-3">
                                    <input type="password" ref={password} name="password" id="password" className='form-control' placeholder='enter password' />
                                </div>
                                <div className="form-group mt-3 mb-3">
                                    <button className='btn btn-primary mt-4' onClick={handleSignup}>Sign In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Signup;
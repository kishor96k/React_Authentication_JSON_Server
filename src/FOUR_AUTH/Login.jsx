import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');
    const navigate = useNavigate();

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            alert('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            alert('Please Enter Password');
        }
        return result;
    }


    const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            let inputobj = {
                "username": username,
                "password": password
            };
            fetch('http://localhost:3001/users/Authenticate', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((response) => {
                console.log(response)
                if (Object.keys(response).length === 0) {
                    alert('Login failed, invalid credentials');
                } else {
                    alert('Success');
                    sessionStorage.setItem('username', username);
                    sessionStorage.setItem('jwttoken', response.jwtToken);
                    navigate('/')
                }
            }).catch((err) => {
                alert(err, 'error occurs');
            })
        }
    }

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:3001/users/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                if (Object.keys(resp).length === 0) {
                    alert('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        alert('Success');
                        sessionStorage.setItem('username', username);
                        sessionStorage.setItem('userrole', resp.role);
                        navigate('/')
                    } else {
                        alert('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                alert('Login Failed due to :' + err.message);
            });
        }
    }


    return (
        <>
            <div className="row">
                <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                    <form onSubmit={ProceedLogin} className="container">
                        <div className="card">
                            <div className="card-header">
                                <h2>User Login</h2>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>User Name <span className="errmsg">*</span></label>
                                    <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Password <span className="errmsg">*</span></label>
                                    <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary me-2">Login</button>
                                <Link className="btn btn-success" to={'/register'}>New User</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
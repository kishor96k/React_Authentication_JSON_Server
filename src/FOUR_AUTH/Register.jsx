import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {

    const navigate = useNavigate();

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [country, countrychange] = useState("india");
    const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("female");

    const IsValidate = () => {
        let isproceed = true;
        let errmsg = `Please enter the value in `;

        if (id === null && id === '') {
            isproceed = false;
            errmsg += ' Username';
        }
        if (name === null && name === '') {
            isproceed = false;
            errmsg += 'Fullname';
        }
        if (password === null && password === '') {
            isproceed = false;
            errmsg += 'Password';
        }
        if (email === null && email === '') {
            isproceed = false;
            errmsg += 'Email';
        }
        if (!isproceed) {
            alert(errmsg)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            } else {
                isproceed = false;
                alert('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let registerobj = { id, name, password, email, phone, country, address, gender };
        if (IsValidate()) {
            fetch('http://localhost:3001/users', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(registerobj)
            }).then((res) => {
                alert("Account created successfully!!!");
                navigate('/login');
            }).catch((err) => {
                alert(err, 'error occurs');
            })
        }
    }


    return (

        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h2>User Registration</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="">User Name<span className='danger'>*</span></label>
                                        <input value={id} onChange={(e) => idchange(e.target.value)} type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="">Password <span className='danger'>*</span></label>
                                        <input value={password} onChange={(e) => passwordchange(e.target.value)} type="password " className='form-control' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="">Full Name <span className='danger'>*</span></label>
                                        <input value={name} onChange={(e) => namechange(e.target.value)} type="text " className='form-control' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="">Email <span className='danger'>*</span></label>
                                        <input value={email} onChange={(e) => emailchange(e.target.value)} type="email " className='form-control' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="">Phone <span className='danger'>*</span></label>
                                        <input value={phone} onChange={(e) => phonechange(e.target.value)} type="number " className='form-control' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Country <span className="errmsg">*</span></label>
                                        <select value={country} onChange={(e) => countrychange(e.target.value)} className="form-control">
                                            <option value="india">India</option>
                                            <option value="usa">USA</option>
                                            <option value="singapore">Singapore</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea onChange={e => addresschange(e.target.value)} value={address} className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <br></br>
                                        <input checked={gender === 'male'} onChange={e => genderchange(e.target.value)} type="radio" name="gender" value="male" className="app-check"></input>
                                        <label>Male</label>
                                        <input checked={gender === 'female'} onChange={e => genderchange(e.target.value)} type="radio" name="gender" value="female" className="app-check"></input>
                                        <label>Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary me-2">Register</button>
                            {/* <Link to={'/login'} className="btn btn-danger">Close</Link> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Register;
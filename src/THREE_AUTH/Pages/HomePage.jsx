import React, { useState } from "react";
// import { FaAlignCenter } from "react-icons/fa";
import { toast } from "react-toastify";
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';



const HomePage = () => {
    const profilePicDefault = 'https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg';
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(profilePicDefault);
    const [check, setChecked] = useState(false);


    // convert image into base 64
    const getbase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = resolve(reader.result);
            reader.onabort = (err) => reject(err);
            reader.readAsDataURL(file);
        })
    }

    //handle image

    const handleImage = (e) => {
        const file = e.target.files[0];
        getbase64(file).then((base64) => {
            localStorage['img'] = base64;
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || gender === '' || password === '' || check === '') {
            toast.error("please add the unfilled details")
        } else if (!email.includes('@')) {
            toast.error("email should be in proper format")
        } else if (password.length < 5) {
            toast.error("pass lenth must be greater than 5");
        }
        else {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('gender', gender);
            localStorage.setItem('password', password);
            localStorage.setItem('image', image);
            localStorage.setItem('check', check);
            toast.success("Account created successfully!!!");
            navigate('/users');
        }
    }


    return (
        <>
            <Header />
            <div className="container content mt-4">
                <h5> 📝 Add New User</h5>
                <div className="row border p-4">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label"> User Name</label>
                            <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">Email Address</label>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label"> Password </label>
                            <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" />
                        </div>
                        <div className="d-flex flex-row">
                            Gender :
                            <div className="form-check ms-2">
                                <input
                                    className="form-check-input" type="radio" name="Gender" value="Male" id="flexRadioDefault1"
                                    defaultChecked={gender === 'Male'} onClick={(e) => setGender(e.target.value)} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                            </div>
                            <div className="form-check ms-2">
                                <input className="form-check-input" type="radio" name="Gender" value="Female" id="flexRadioDefault2"
                                    defaultChecked={gender === 'Female'} onClick={(e) => setGender(e.target.value)} />
                                <label className="form-check-label" htmlFor="flexRadioDefault2"> Female</label>
                            </div>
                        </div>
                        <div className="form-check mt-3">
                            <input checked={check} onChange={(e) => { setChecked(e.target.value) }} className="form-check-input" type="checkbox" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault"> I Acept Terms And Conditions </label>
                        </div>
                        <button type="submit" className="form__submit-btn" onClick={handleSubmit}> Submit  </button>
                    </div>

                    <div className="col-md-4">
                        <div className="profile_section">
                            <p>Select Profile Picture :</p>
                            <img src={profilePicDefault} alt="" className="img-thumbnail" height={250} width={250} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">  Default file input example</label>
                            <input onChange={handleImage} name="file" className="form-control" type="file" id="formFile" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HomePage;
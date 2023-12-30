import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate();
    const [logindata, setLoginData] = useState([]);
    var today = new Date();
    var year = today.getFullYear();
    var month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because months are zero-indexed
    var day = String(today.getDate()).padStart(2, '0');
    var formattedDate = year + '-' + month + '-' + day;


    const getBirthDay = () => {
        const getLoginUser = localStorage.getItem('loginauthone');
        if (getLoginUser && getLoginUser.length) {
            const currentLoginUser = JSON.parse(getLoginUser);
            setLoginData(currentLoginUser);
            const userBirth = logindata.map((val, ind) => {
                return val.date === formattedDate;
            })
            if (userBirth) {
                setTimeout(() => {
                    handleShow();
                    console.log('user birth checks');
                }, 3000);
            }
        }
    }

    const logout = () => {
        alert('logged off');
        localStorage.removeItem('loginauthone');
        navigate('/login');
    }

    useEffect(() => {
        getBirthDay()
    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {logindata.length === 0 ? "error" :
                <>
                    <h4>Details Page</h4>
                    <h4>{logindata[0].name}</h4>
                    <button className='btn btn-success d-flex justify-content-end' onClick={logout}>Logout</button>
                    {
                        logindata[0].date === formattedDate ?
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>BirthDay Wishes</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, happy BirthDay to youuuuuuuuu {logindata[0].name}</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="info" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            : null
                    }
                </>
            }
        </>
    );
};

export default Details;



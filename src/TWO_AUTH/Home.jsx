import React from 'react';

const Home = () => {

    const onDelete = () => {
        localStorage.clear();
        window.location.reload();
    }

    const onLogOut = () => {
        localStorage.removeItem('twoauthsignin');
        window.location.reload();
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <button className='btn btn-secondary' onClick={onLogOut}>LogOut</button>
                </div>
                <div className="col-md-3">
                    <button className='btn btn-danger' onClick={onDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React, { useContext } from 'react';
import { logout } from '../utils/users-utils.js';
import { Context } from '../context-API/ContextProvider.js';

const Navbar = () => {

    const { currUser } = useContext(Context);
    const image = currUser?.pp ? <img src={currUser?.pp} alt='' className='img' />
        : <div className='img'>{currUser?.displayName?.slice(0, 2).toUpperCase()}</div>;

    return (
        <div className='navbar'>
            <span className="logo">Chat App</span>
            <div className="display-name-n-btn">
                <div className='image'>{image}</div>
                <p className="username">{currUser.displayName}</p>
                <button className="logout" onClick={() => logout()}>Log out</button>
            </div>
        </div>
    );
}

export default Navbar;
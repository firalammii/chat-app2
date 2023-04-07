import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';

import { createUser } from '../utils/users-utils.js';

const Register = () => {

    const [user, setUser] = useState({
        displayName: '', email: '', password: '', pp: ''
    });

    const [error, setError] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit (e) {
        e.preventDefault();
        try {
            const { displayName, email, password } = user;
            if (!displayName || !email || !password) {
                throw error;
            }
            await createUser(user);
            setUser({ displayName: '', email: '', password: '', pp: '' });
            navigate('/login');
            setError(false);
        } catch (err) {
            setError(true);
            console.log(err);
        }

    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };
    const { displayName, email, password, pp } = user;

    return (
        <div className='form-container'>
            {/* <img src={imgState} alt='' /> */}
            <div className='form-wrapper'>
                <span className='logo'>Lama Chat App</span>
                <span className='title'>Register</span> <hr />
                {error && <div className='error'>
                    <p>Soryy! problem occurred</p>
                </div>}
                <form onSubmit={handleSubmit}>
                    <input
                        name='displayName' type='text' placeholder='display name' className='inputs'
                        value={displayName}
                        onChange={handleChange}
                    />
                    <input
                        name='email'
                        type='email' placeholder='email' className='inputs'
                        value={email}
                        onChange={handleChange}
                    />
                    <input
                        name='password'
                        type='password' placeholder='password' className='inputs'
                        value={password}
                        onChange={handleChange}
                    />

                    <div className='inputs' >
                        <FileBase value={pp} type="file" multiple={false} onDone={({ base64 }) => setUser({ ...user, pp: base64 })} />
                    </div>

                    <button>Sign up</button>
                </form>
                {error && <div className='error'>
                    <p>Soryy! problem occurred</p>
                </div>}
                <p>have account already? <Link to='/login'>Login</Link></p>

            </div>

        </div>
    );
};

export default Register;
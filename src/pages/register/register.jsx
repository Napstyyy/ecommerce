import React from "react";
import './register.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import encriptador from "../../encripter";

const URI = 'http://localhost:3001/users/';

const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {username: name, password: password});
        navigate('/');
    }

    return (
        <div className="register-form">
            <h2>register</h2>
            <form onSubmit={store} action="/auth" method="post">
                <input 
                value={name}
                onChange={ (e) => setName(e.target.value)}
                type="text" name="user" id="user" placeholder="user"/>
                <input 
                value={password}
                onChange={ (e) => setPassword(encriptador.enmascarador(e.target.value))}
                type="password" name="pass" id="pass" placeholder="password"/>
                <input type="submit" className="btn-login" value="register"/>
            </form>
        </div>
    )
}

export default Register;
import React from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import encriptador from "../../encripter";

const URI = 'http://localhost:3001/users/';

const Login = () => {
    const navigate = useNavigate();
    const navigatePro = () => {
        navigate(`/register`);
    }

    const [entrada, SetEntrada] = useState('');
    const [entradaP, SetEntradaP] = useState('');

    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async() => {
        const res = await axios.get(URI)
        setUsers(res.data)
    }

    const compare = (e) => {
        users.map((user) => {
            if ((user.username === entrada) && (user.password === entradaP)) {
                navigate('/shop');
            }
        })
    }

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={compare}>
                <input 
                    value={entrada}
                    onChange={(e) => SetEntrada(e.target.value)}
                    type="text" name="user" id="user" placeholder="user" />
                <input 
                    value={entradaP}
                    onChange={(e) => SetEntradaP(encriptador.enmascarador(e.target.value))}
                    type="password" name="pass" id="pass" placeholder="password" />
                <input type="submit" className="btn-login" value="Login" />
            </form>
            <div href="register" className="btn-register" onClick={navigatePro}>register</div>
        </div>
    )
}

export default Login;
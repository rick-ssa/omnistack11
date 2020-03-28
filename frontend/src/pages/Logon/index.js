import React from 'react';
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom';
import './style.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
import { useState } from 'react';
import api from '../../services/api'

export default function Logon(){

    const [id,setId] = useState('');
    const history = useHistory();
    const handleLogon = async e=>{
        e.preventDefault();

        try {
            const response = await api.post('sessions',{id});
            
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);

            history.push('/profile');

        } catch(err) {
            alert('Login failed, please try again');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="be the hero"/>

                <form onSubmit={handleLogon}>
                    <h1>Login</h1>
                    <input 
                        placeholder="Type your id"
                        value = {id}
                        onChange = {e=>setId(e.target.value)}
                    />
                    <button className="button" type="submit">Enter</button>
                    <Link className = 'back-link' to="/register">
                        <FiLogIn size={16} color='#e02041'/> 
                        Not registered yet
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="heroes"/>
        </div>
    );
}
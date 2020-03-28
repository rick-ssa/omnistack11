import React from 'react';
import logoImg from '../../assets/logo.svg';
import {Link,useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api'

import './style.css';
import { useState } from 'react';
import { hydrate } from 'react-dom';

export default function Register() {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[whatsApp, setWhatsApp] = useState('');
    const[city, setCity] = useState('');
    const[Uf, setUf] = useState('');
    
    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault();
        
        const data = {
            name,
            email,
            whatsapp: whatsApp,
            city,
            uf:Uf,
        }

        try {
            const response = await api.post('ongs',data);
            alert(`your id ${response.data.id}`);
            history.push('/')
        }
        catch(err) {
            console.log(err);
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Register</h1>
                    <p>
                        Register, get in and help people to find your ONG incident.
                    </p>

                    <Link className = 'back-link' to="/">
                        <FiArrowLeft size={16} color='#e02041'/> 
                        Already registered
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="ONG name"
                        onChange = {e=>setName(e.target.value)}
                        value = {name}
                    />

                    <input 
                        type="email" 
                        placeholder="E-mail"
                        onChange = {e=>setEmail(e.target.value)}
                        value = {email}
                    />

                    <input 
                        placeholder="WhatsApp"
                        onChange = {e=>setWhatsApp(e.target.value)}
                        value = {whatsApp}
                    />

                    <div className='input-group'>
                        <input 
                            placeholder="City"
                            value = {city}
                            onChange = {e=>setCity(e.target.value)}
                        />

                        <input 
                            placeholder="UF" 
                            style={{width:'80px'}}
                            onChange = {e=>setUf(e.target.value)}
                            value = {Uf}
                        />

                    </div>

                    <button className="button">Register</button>
                </form>
            </div>
        </div>
    )
}
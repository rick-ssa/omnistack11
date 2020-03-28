import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';

import './style.css'

export default function NewIncident(){
    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[value, setValue] = useState('')     
    const history = useHistory()
    
    const ongId = localStorage.getItem('ongId')
    
    function handleNewIncident(e) {
        e.preventDefault();

        try {
                api.post('incidents',{title,description,value},{
                    headers: {
                        authorization: ongId
                    }
                }).then(response=>history.push('/profile'));
        } catch(err) {
            alert(`something goes wrong: ${err}`)
        }

    }

    return(
        <div className="newIncident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Register</h1>
                    <p>
                        Register, get in and help people to find your ONG incident.
                    </p>

                    <Link className = 'back-link' to="/profile">
                        <FiArrowLeft size={16} color='#e02041'/> 
                        Go back to home
                    </Link>
                </section>
                <form>
                    <input type="text" 
                        placeholder="Incident Title"
                        value = {title}
                        onChange = {(e)=>setTitle(e.target.value)}
                    />

                    <textarea 
                        placeholder="Description"
                        value = {description}
                        onChange = {(e)=>setDescription(e.target.value)}
                    />

                    <input type="text" 
                        placeholder="Value"
                        value = {value}
                        onChange = {(e)=>setValue(e.target.value)}
                    />


                    <button onClick = {handleNewIncident} className="button">Register</button>
                </form>
            </div>
        </div>

    )
}
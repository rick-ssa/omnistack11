import React from 'react';
import {FiLogIn} from 'react-icons/fi'

import './style.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="be the hero"/>

                <form >
                    <h1>Login</h1>
                    <input type="text" placeholder="Type your id"/>
                    <button className="button" type="submit">Enter</button>
                    <a href="/register"><FiLogIn size={16} color='#e02041'/> Not registered yet</a>
                </form>
            </section>
            <img src={heroesImg} alt="heroes"/>
        </div>
    );
}
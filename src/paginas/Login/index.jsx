import React from "react";
import './style.css';
import CabecalhoSemBt from '../../componentes/CabecalhoSemBt';
import Conect from '../../imagens/imgLogin.png';
/* import {Link} from 'react-router-dom'; */

function Login() {
    return (
        <div className="tela-login">
            <CabecalhoSemBt/>
            <img src={Conect} id='imgLogin' alt='some-value'/>
            <div className="container-login">   
                <h1>Login</h1>
                <div className="inserir">
                    <div className="campo-texto">
                        <input type='email' name="email" placeholder="E-mail"/>
                    </div>
                    <div className="campo-texto">
                        <input type='password' name='senha' placeholder='Senha'/>
                    </div>
                    <p>Esqueceu a senha?</p>
                    <button className="login">Login</button>
                    <button className="CriarConta">Ainda não sou cliente</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
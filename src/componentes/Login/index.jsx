import React from "react";
import  './style.css';
import Info from '../../imagens/info1.svg';


function Login() {
    return (
        <div className="CorpoLogin">
            <h2 id="slogan">O banco pensado pro futuro!</h2>
            <h2>Sem tarifas escondidas, tudo transparente.</h2>
                <img src={Info} id='img-info1' alt='some value'/>
            <div className="login">
                <h1>Acesse sua conta na Pro-Fitable!</h1>
            </div>
        </div>
    )
}
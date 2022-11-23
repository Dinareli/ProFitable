import React from "react";
import  './style.css';
import Logo from '../../imagens/logo.svg';

function CabecalhoSemBt() {
    return (
        <div className="cabecalho">
            <img src={Logo} id='logo' alt="some value"/>
            <div className="profitable">
                <h1>Pro-Fitable</h1>
            </div>
        </div>
    );
}

export default CabecalhoSemBt;
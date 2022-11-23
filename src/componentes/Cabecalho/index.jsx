import React from "react";
import  './style.css';
import Logo from '../../imagens/logo.svg';

function Cabecalho() {
    return (
        <div className="cabecalho">
            <img src={Logo} id='logo' alt="some value"/>
            <div className="profitable">
                <h1>Pro-Fitable</h1>
            </div>
            <button id='btPro'>
                Quero ser Pro!
            </button>
        </div>
    );
}

export default Cabecalho;
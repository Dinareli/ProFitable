import React from "react";
import './style.css';
import CabecalhoSemBt from "../../componentes/CabecalhoSemBt";
import Cartao from '../../imagens/cartaodecredito.png';
/* import {Link} from 'react-router-dom'; */


function Conta() {
    return(
        <div className="Cadastro">
            <CabecalhoSemBt/>
            <div className="infos">
                <h2>Complete os campos para abrir sua conta e pedir seu cartão de crédito!</h2>
                <img src={Cartao} id='ImgCartao' alt='some-value'/>
            </div>
            <div className="Caixa-cadastro">
                <div className="campo-texto">
                    <input type='number' name="CPF" placeholder="CPF"/>
                </div>
                <div className="campo-texto">
                    <input type='text' name='Nome' placeholder='Nome Completo'/>
                </div>
                <div className="campo-texto">
                    <input type='number' name='Celular' placeholder='Celular'/>
                </div>
                <div className="campo-texto">
                    <input type='email' name='email' placeholder='E-mail'/>
                </div>
                <div className="campo-texto">
                    <input type='email' name='email' placeholder='Confirmação do e-mail'/>
                </div>
                <button className="AbrirConta">Abrir Conta</button>
            </div>
        </div>
    );
}

export default Conta;
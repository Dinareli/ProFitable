import React from "react";
import './style.css';
import Cabecalho from "../../componentes/Cabecalho";
import Imagem1 from '../../imagens/image.png';

function Home() {
    return(
        <div className="Pagina-home">
            <Cabecalho/>
            <div className="part1">
                <h2 className="primeiro">O banco pensado pro futuro!</h2>
                <h2 className="segundo">Sem tarifas escondidas, tudo transparente.</h2>
                <img src={Imagem1} id='Img1' alt='some-value'/>
            </div>
            <div className="login-cpf">
                <h2>Acesse sua conta na Pro-Fitable!</h2>
                <div className="campo-texto">
                    <input type='number' name="CPF" placeholder="Digite seu CPF"/>
                </div>
                <button className="Login">Login</button>
            </div>
        </div>
    );
}

export default Home;
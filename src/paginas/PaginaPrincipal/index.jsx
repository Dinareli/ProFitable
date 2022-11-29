import React from "react";
import './style.css';
import CabecalhoSemBt from '../../componentes/CabecalhoSemBt';
import Perfil from '../../imagens/Img_perfil.png';
import Saldo from '../../imagens/Vz_saldo.png';
import Duvidas from '../../imagens/duvida.png';
import Pix from '../../imagens/Pix.png';
import Pagar from '../../imagens/pagar.png';
import Transferir from '../../imagens/transferir.png';
import Depositar from '../../imagens/depositar.png';
import Investir from '../../imagens/investir.png';
import Cartoes from '../../imagens/cartoes.png';
/* import {Link} from 'react-router-dom'; */

function PaginaPrincipal() {
    return (
       
        <div className="pagina-principal">
             <CabecalhoSemBt/>
            <div className="navbar">
                <img src={Perfil} id='imgPerfil' alt='some-value'/>
                <h2>Olá, *****</h2>
                <img src={Saldo} id='ImgSaldo' alt="some-value"/>
                <img src={Duvidas} id='ImgDuvida' alt="some-value"/>
                <img src={Pix} id='ImgPix' alt="some-value"/>
            </div>
            <div className="atalhos">
                <h2>R$ 100,00</h2>        
                <div className="btAtalhos">
                    <img src={Pagar} id='ImgPagar' alt="some-value"/>
                    <img src={Transferir} id='ImgTransferir' alt="some-value"/>      
                    <img src={Depositar} id='ImgDepositar' alt="some-value"/>
                    <img src={Investir} id='ImgInvestir' alt="some-value"/>      
                    <img src={Cartoes} id='ImgCartoes' alt="some-value"/>
                </div>      
            </div>
            <div className="fatura">
                <div className="CartaoCredito">
                    <h2>Cartão de Crédito</h2>
                    <h4>Saldo Positivo</h4>
                    <h2 className="valor">R$ 300,00</h2>
                    <button>Parcelar compras</button>
                </div>
                <div className="Limite">
                    <h2>Limite disponível</h2>
                    <h2 className="valor">R$1500,00</h2>
                    <button>Solicitar aumento</button>
                </div>
            </div>
            <div className="Extrato">
                <h2>Extrato</h2>
                <div>
                <table border="1">
                    <tr>
                        <td>Data</td>
                        <td>Estabelecimento</td>
                        <td>Valor</td>
                        <td>Horário</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>29/10/2022</td>
                        <td>iFood</td>
                        <td>R$30,00</td>
                        <td>14:55</td>
                    </tr>
                    <tr>
                        <td>20/10/2022</td>
                        <td>Uber</td>
                        <td>R$20,00</td>
                        <td>23:20</td>
                    </tr>
                    <tr>
                        <td>19/10/2022</td>
                        <td>Mc Donald's</td>
                        <td>R$39,90</td>
                        <td>17:00</td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
    );
}

export default PaginaPrincipal;
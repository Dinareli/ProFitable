import React from "react";
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import CabecalhoSemBt from './componentes/CabecalhoSemBt';
import Login from './paginas/Login';
import PaginaPrincipal from './paginas/PaginaPrincipal';
import Conta from "./paginas/Conta";
import Home from './paginas/Home';

function App() {
  return (
    <div className="Home">
      <Home/>
    </div>
  );
}

export default App;
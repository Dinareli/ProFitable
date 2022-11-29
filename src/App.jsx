import React from "react";
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import CabecalhoSemBt from './componentes/CabecalhoSemBt';
import Login from './paginas/Login';
import PaginaPrincipal from './paginas/PaginaPrincipal';
import Conta from "./paginas/Conta";

function App() {
  return (
    <div className="Conta">
      <Conta/>
    </div>
  );
}

export default App;
import React from "react";
import "./App.css";

import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmentos';
import TabelaProdutos from "./components/repeticao/TabelaProdutos";

// eslint-disable-next-line
export default () => (

  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">

    <Card titulo="#11 - Componente Controlado (Input)" color="#47c27d">
        <Input></Input>
      </Card>

    <Card titulo="#10 - Comunicação Indireta" color="#7fc7af">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#33a494">
        <DiretaPai></DiretaPai>
      </Card>

      <Card
        titulo="#08 - Renderezação Condicional"
        color="#35c19e"
      >
        <ParOuImpar
          numero={20}
        />
        <UsuarioInfo
          usuario={{ nome: 'Ferdinando' }}
        />
        <UsuarioInfo
          usuario={{ email: 'ferdinando@gmail.com' }}
        />
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#47c27d">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card
        titulo="#06 - Repetição"
        color="#7fc7af"
      >
        <ListaAlunos />
      </Card>

      <Card titulo="#5 - Componentes com Filhos" color="#33a494">
        <Familia sobrenome="Monteiro">
          <FamiliaMembro nome="Francisco" />
          <FamiliaMembro nome="Joana" />
          <FamiliaMembro nome="Lucas" />
        </Familia>
      </Card>

      <Card titulo="#4 - Desafio Aleatório" color="#35c19e">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#3 - Fragmento" color="#47c27d">
        <Fragmento />
      </Card>

      <Card titulo="#2 - Com Parâmetro" color="#7fc7af">
        <ComParametro
          titulo="Situação do Aluno:"
          aluno="Creytinho"
          nota={10.00}
        />
      </Card>

      <Card titulo="#1 - Primeiro Componente" color="#33a494">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
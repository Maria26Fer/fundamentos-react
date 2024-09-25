import React from "react";
import "./App.css";

import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmentos';

// eslint-disable-next-line
export default () => (

    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#06 - Repetição" color="#7fc7af">
                <ListaAlunos></ListaAlunos>
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

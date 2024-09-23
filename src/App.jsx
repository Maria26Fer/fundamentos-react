import React from "react";

import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmentos';

// eslint-disable-next-line
export default () => (

    <div id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio min={1} max={60} />
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno:"
            aluno="Creytinho"
            nota={10.00}
        />
        <Primeiro></Primeiro>
    </div>
);

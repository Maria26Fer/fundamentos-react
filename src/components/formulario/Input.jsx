/* eslint-disable import/no-anonymous-default-export */
import './Input.css'
import React, { useState } from "react";

export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Imput">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/*O onChange é um evento, que será chamado sempre que o usuario digitar algo */}
                <input value={valor} onChange={quandoMudar} /> {/*Componente controlado */}
                <input value={valor} readOnly /> {/*Componente somente leitura */}
                <input value={undefined} /> {/*Componente não controlado */}
            </div>
        </div>
    )
}
import React from 'react'

//usa para deixar uma função ou componentes disponiveis no projeto
export default function Primeiro() {
    const msg = 'Seja bem vindo!'
    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>{msg}</p>
        </div>
    )
}
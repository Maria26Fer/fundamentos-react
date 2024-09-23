import React from "react";

// eslint-disable-next-line
export default (props) => {
    const aleatorio = parseInt(Math.random() * (props.max - props.min)) + props.min
    const { min, max } = props
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo: </strong> {min}
            </p>

            <p>
                <strong>Valor Maximo: </strong> {max}
            </p>

            <p>
                <strong>Valor Escolhido: </strong> {aleatorio}
            </p>
        </div>
    )
}
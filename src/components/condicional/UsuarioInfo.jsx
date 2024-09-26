/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import If from "./If";

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test ={usuario && usuario.nome}>
            Seja Bem Vindo <strong>{ props.usuario.nome }</strong>!
            </If>

            <If test ={ !usuario || !usuario.nome}>
            Não Seja Bem Vindo <strong>...</strong>
            </If>
        </div>
    )
}
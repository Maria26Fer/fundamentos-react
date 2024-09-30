/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {

    //useState vai receber dois valores
    //1° que é o proprio valor que vou iniciar(no caso nome)
    //2° o segundo valor é a função que vou chamar que vai alterar o valor que iniciei
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    //Dessa forma é possivel alterar os valores e uma vez que estou
    //acessando os valores dentro dos meus componentes sempre que mudar(renderizar) ele 
    //vai alterar os valores para exibir os novos dados
    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong></span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}
import React from "react";
// eslint-disable-next-line no-unused-vars
import alunos from "../../data/alunos";
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    //const li1 = (<li>{alunos[0].id} {alunos[0].nome} {alunos[0].nota}</li>);

    const listaAlunos = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id})  {aluno.nome} -- {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {listaAlunos}
            </ul>
        </div>
    )
}
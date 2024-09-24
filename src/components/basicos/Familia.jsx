/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import FamiliaMembro from './FamiliaMembro';


export default props => {
    return (
        <div>
            <FamiliaMembro nome="Francisco" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Joana" {...props} />
            <FamiliaMembro nome="Lucas" sobrenome="Alvez" />
        </div>
    )
}
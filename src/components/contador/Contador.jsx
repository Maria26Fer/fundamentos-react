import "./Contador.css";
import React, { Component } from "react";

class Contador extends Component {
 state ={
  numero: this.props.numeroInicial || 0,
  passo: this.props.passoInicial || 5,
 };

 incremento = () => {
  this.setState({ 
    numero: this.state.numero + this.state.passo,
  });
 }

 decremento = () => {
  this.setState({ 
    numero: this.state.numero - this.state.passo,
  });
 }

 setPasso = (evento) => {
  this.setState({ passo: +evento.target.value, });
 }
  render() {
    return(
      <div className="Contador">
        <h2>Contador</h2>
        <h3>{this.state.numero}</h3>
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input id="passoInput" type="number" 
          value={this.state.passo} onChange={this.setPasso}></input>
        </div>
        <button onClick={this.incremento}> + </button>
        <button onClick={this.decremento}> - </button>
      </div>
    )
  }
}
export default Contador
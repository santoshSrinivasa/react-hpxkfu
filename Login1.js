import React from "react";

export default class Login1 extends React.Component{
  render(){
    const {fname : f,lname : l,gender : g} = this.props
    return (
        <div>
        <h3>{f} {l} {g}</h3>
        </div>
    );
  }
}
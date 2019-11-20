import React from "react";
import {render} from "react-dom";
import Login1 from "./Login1";
import Welcome from "./Welcome";
import UserLogin from "./UserLogin";

class Login extends React.Component{
  state={
  fname:"santosh",
  lname:"s",
  gender:"male",
  guest:"asdas"
  }
  render(){
    return (
      <div>
        <h3>login page</h3>
        <Welcome name={this.state.fname}/>
        <UserLogin guestlogin={this.state.guest}/>
        <Login1 fname={this.state.fname} lname={this.state.lname} gender={this.state.gender}/>
      </div>
    );
  }
}

render(<Login/>,document.getElementById('root'));
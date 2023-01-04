
import React, { Component } from "react";
import General from "./Components/GeneratedGeneral";
import Education from "./Components/GeneratedEducation";
import Experience from "./Components/GeneratedExp";
import style from "./styles/App.css";
import uniqid from 'uniqid';

class App extends Component{
  constructor(){
    super()

    this.submitAction = this.submitAction.bind(this);

    this.state={
      general: {
        name: '',
        address:'',
        email: '',
        id: uniqid(),
    },
      generals: [],
    };
  }
  handleChangeName = (e) =>{
    this.setState({
      general:{
        name: e.target.value,
        address: this.state.general.address,
        email: this.state.general.email,
        id: this.state.general.id,
      }
    });
  };
  handleChangeAddress = (e) =>{
    this.setState({
      general:{
        name: this.state.general.name,
        address: e.target.value,
        email: this.state.general.email,
        id: this.state.general.id,
      }
    });
  };

  handleChangeEmail = (e) =>{
    this.setState({
      general:{
        name: this.state.general.name,
        address: this.state.general.address,
        email: e.target.value,
        id: this.state.general.id,
      }
    });
  };

  submitAction = (e) =>{
    e.preventDefault();
    this.setState({
      generals: this.state.generals = [],
      generals: this.state.generals.concat(this.state.general),
      general: {
        name: "",
        address:"",
        email: "",
        id: uniqid(),
      },
    });
  };
  render(){
    const {general, generals} = this.state;
    return(
      <div>
        <h1 id="main-title">CV Generator</h1>
        <div id="content">
          <div id="form-side">
          <form onSubmit={this.submitAction}>
            <h3 htmlFor="General" className="subhead">General Information</h3>
            <label htmlFor="name">Name:</label>
            <input id="name" value={general.name} onChange={this.handleChangeName}></input>
            <label htmlFor="address">Address:</label>
            <input id="address" value={general.address} onChange={this.handleChangeAddress}></input>
            <label htmlFor="email">Email:</label>
            <input id="email" value={general.email} onChange={this.handleChangeEmail}></input>
            <button type="submit" >Generate CV</button>
          </form>
          </div>
          <div id="generated-side">
            <div id="generated-content">
              <General generals={generals}/>
              <Education/>
              <Experience/>
            </div>
          </div>
        </div>
      </div>

    )
  }
}


export default App;


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

      education: {
        school: '',
        subject: '',
        time: '',
        id: uniqid(),
      },
      educations:[]
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
  handleChangeSchool = (e) =>{
    this.setState({
      education:{
        school: e.target.value,
        subject: this.state.education.subject,
        time: this.state.education.time,
        id: this.state.education.id,
      }
    });
  };
  handleChangeSubject = (e) =>{
    this.setState({
      education:{
        school: this.state.education.school,
        subject: e.target.value,
        time: this.state.education.time,
        id: this.state.education.id,
      }
    });
  };
  handleChangeTime = (e) =>{
    this.setState({
      education:{
        school: this.state.education.school,
        subject: this.state.education.subject,
        time: e.target.value,
        id: this.state.education.id,
      }
    });
  };

  submitAction = (e) =>{
    e.preventDefault();
    this.setState({
      generals: this.state.generals = [],
      generals: this.state.generals.concat(this.state.general),
      educations: this.state.educations.concat(this.state.education),
      general: {
        name: "",
        address:"",
        email: "",
        id: uniqid(),
      },
      education: {
        school: "",
        subject:"",
        time: "",
        id: uniqid(),
      },
    });
  };
  render(){
    const {general, generals, education, educations} = this.state;
    return(
      <div>
        <h1 id="main-title">CV Generator</h1>
        <div id="content">
          <div id="form-side">
          <form onSubmit={this.submitAction}>
            <h3 className="subhead">General Information</h3>
            <label htmlFor="name">Name:</label>
            <input id="name" value={general.name} onChange={this.handleChangeName}></input>
            <label htmlFor="address">Address:</label>
            <input id="address" value={general.address} onChange={this.handleChangeAddress}></input>
            <label htmlFor="email">Email:</label>
            <input id="email" value={general.email} onChange={this.handleChangeEmail}></input>

            <h3 className="subhead">Education</h3>
            <label htmlFor="school">School Name:</label>
            <input id="school" value={education.school} onChange={this.handleChangeSchool}></input>
            <label htmlFor="subject">Subject:</label>
            <input id="subject" value={education.subject} onChange={this.handleChangeSubject}></input>
            <label htmlFor="time">From - To:</label>
            <input id="time" value={education.time} onChange={this.handleChangeTime}></input>
          
            <button type="submit" >Generate CV</button>
          </form>
          </div>
          <div id="generated-side">
            <div id="generated-content">
              <General generals={generals}/>
              <Education educations={educations}/>
              <Experience/>
            </div>
          </div>
        </div>
      </div>

    )
  }
}


export default App;

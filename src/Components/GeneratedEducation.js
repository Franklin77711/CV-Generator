import React, { Component } from "react";
import style from "../styles/GeneratedEducation.css"


class Education extends Component{
    constructor(props){
        super(props)
    }
   render(){
       let {educations} = this.props;
    return(
            <div>
                {educations.map((education) => {
                    return (
                        <div key={education.id} id="render-education">
                            <h3 className="subtitle">Education</h3>
                            <p id="render-school" ><span id="time">{education.time}</span> <strong>{education.school}</strong></p>
                            <p id="render-subject">{education.subject}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
    }

export default Education
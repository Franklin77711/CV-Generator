import React, { Component } from "react";
import style from "../styles/GeneratedExp.css"


class Experience extends Component{
    constructor(props){
        super(props)
    }
   render(){
       let {experiences} = this.props;
    return(
            <div>
                {experiences.map((experience) => {
                    return (
                        <div key={experience.id} id="render-education">
                            <h3 className="subtitleExp">Experience</h3>
                            <p id="render-school" ><span id="time">{experience.time}</span> <strong>{experience.company}</strong></p>
                            <p id="render-subject">{experience.position}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
    }

export default Experience
import React, { Component } from "react";
import style from "../styles/GeneratedGeneral.css"


class General extends Component{
    constructor(props){
        super(props)
    }
   render(){
       let {educations} = this.props;
    return(
            <div>
                <h3>Education</h3>
                {educations.map((education) => {
                    return (
                        <div key={education.id} id="render-education">
                            <p id="render-school" >{education.school}</p>
                            <p id="render-subject">{education.subject}</p>
                            <p id="render-time" >{education.time}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
    }

export default General
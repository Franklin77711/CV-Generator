import React, { Component } from "react";
import style from "../styles/GeneratedGeneral.css"


class General extends Component{
    constructor(props){
        super(props)
    }
   render(){
       let {generals} = this.props;
    return(
            <div>
                {generals.map((general) => {
                    return (
                        <div key={general.id} id="render-general">
                            <h1 id="render-name" >{general.name}</h1>
                            <p id="render-address">{general.address}</p>
                            <p id="render-email" >{general.email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
    }

export default General
import React, { Component } from "react";
import './index.css';

//class Titulo : Component
class Titulo extends Component {
    render() {
        return(
            <div className="background">
                <h1>{this.props.texto}</h1>
            </div>
        )
    }
}

export default Titulo;
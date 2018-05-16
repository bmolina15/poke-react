import React, { Component } from "react";
import "./Info.css";

class Info extends Component {


    render() {
        return (
            <div className="flex-container">
                {this.props.pokeid && <
                    div className="card">

                    <img src={this.props.sprite} alt="pokemon" />
                </div>}
                {this.props.pokeid&&<div className="card info">
                    {this.props.pokeid && <p>ID:   {this.props.pokeid} </p>}
                    {this.props.pokeid && <p>NAME: {this.props.name}</p>}
                    {this.props.pokeid && <p>WEIGHT: {this.props.weight} </p>}


                </div>}

            </div>

        );
    }
}

export default Info;
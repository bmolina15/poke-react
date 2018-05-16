import React, { Component } from "react";
import "./NavigationBar.css";
import Api from "../../../service/api.js";



class NavigationBar extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            id: "",
            weight: "",
            sprite:"",
            error: ""
        }
    }


    returnDataToParent(res) {
        this.props.obtainChildrenData(res);


    }

    getPoke = async (e) => {
        e.preventDefault();
        const pokeid = e.target.elements.pokeid.value;
        //console.log(pokeid);
        const api_call = await Api.getPokemonById(pokeid);

        const data = await api_call.json();
        console.log(data);

        /* */
        this.returnDataToParent(data);
     
    }


    render() {
        return (

            <ul>

                <li></li>
                <form className="navBar" onSubmit={this.getPoke}>

                    <input type="text" name="pokeid" placeholder="Enter pokemon id" />
                    <button type="submit">get poke</button>
                    
                </form>

            </ul>

        );
    }

}
export default NavigationBar;
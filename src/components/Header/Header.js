import React, {Component} from "react";
import "./Header.css";
import Logo from "./Logo/Logo";
//import NavigationBar from "./NavigationBar/NavigationBar";


class Header extends Component{

    render(){
        return(
                <header>  <Logo/>    </header>
               
        );
    }
}


export default Header;
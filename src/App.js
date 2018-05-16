import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Info from "./components/Container/Info/Info";
import NavigationBar from "./components/Header/NavigationBar/NavigationBar";


class App extends Component {

  constructor(){
    super();
    this.state={
      id:"",
      name: "",
      weight:"",
      sprite:"",
      error:""
    }
    this.obtainChildrenData=this.obtainChildrenData.bind(this);
  }

  obtainChildrenData(data){
    console.log(data,'iiuyggh');
    this.setState({
      name:data.species.name,
      id: data.id,
      weight:data.weight,
      sprite:data.sprites.front_default,
      error:""
     })
  }



  render() {
    return (
      <div className="App">
        <Header/>
        
        <NavigationBar 
        obtainChildrenData={this.obtainChildrenData}/>
        <Info pokeid={this.state.id}
        name={this.state.name}
        weight={this.state.weight}
        sprite={this.state.sprite}
        error={this.state.error}/>
        
        <Footer/>
      </div>
    );
  }


};


export default App;

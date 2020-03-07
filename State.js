import React from "react";
import Sarra from './sarra.jpg';
import Haroid from './haroid.jpeg';
import Daniel from './daniel.jpg';
import './App.css';
export default class State extends React.Component{
state ={
            Name:"tyfty",
            Image:"uyguyu",
            Description:"yuguu",
        
    }
render(){
    return(
        <div>
            <center>
            <button onClick={()=>{this.setState({Name:'Sarra',Image:Sarra, Description:'I have a clear logical mind with a pratical approach to problem-solving and a drive to see things through to completion. I have a more than 2 years of experience in managing and leading teams across multiple sectors'})}
            }>Sarra</button>
            <button onClick={()=>{this.setState({Name:'Haroid',Image:Haroid, Description:'I am a hardworking and competent individual with a great passion for the transport and logistics industry '})}
            }>Haroid</button>
            <button onClick ={()=>{this.setState({Name:'Daniel', Image: Daniel , Description:'I am a highly competent IT professional with a proven track record in designing websites, networking and managing databases.'})}}>Daniel</button>
            <h1>{this.state.Name}</h1>
            <img src={this.state.Image}/>
            <p>{this.state.Description}</p>
            </center>
        </div>
    )
}
}
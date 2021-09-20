import React from "react"
import { Component } from "react"
import Dogs from "./Dogs"

export default class DogImage extends Component {
    constructor(){
        super()
        this.state ={
            imageRandom: ""
        }
    }

    fetchDog() {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(json => this.setState({imageRandom: json.message}))
        .catch (e => console.error(e))
    }

    componentDidMount() {
        this.fetchDog()
            
    }

    componentDidUpdate() {
        console.log(this.state.imageRandom)
    }

    render(){
        return(
            <div>
                <h1>Random DogImage Component</h1>
                <img src= {this.state.imageRandom}/>  
                <button onClick={e=>this.fetchDog()}>Click Me</button>
               
            </div>
        )
    }

}
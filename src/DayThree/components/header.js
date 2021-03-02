import { Component } from "react";
import Artist from "./artist";
import './header.css';
export default class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return(
            <div className="position-relative">
                <img width="100%" src="/images/raw/Girls-Listen-Music.jpg" alt="HomePage"/>
                <h1 className="centered">music-db</h1>
            </div>
            )
    }
}
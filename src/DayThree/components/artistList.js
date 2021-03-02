import { Component } from "react";
import Artist from "./artist";
import Header from "./header";
export default class Artists extends Component{
    constructor(props){
        super(props)
        this.state = {
            artists:[]
        }
        this.baseURL = "http://localhost:3001/artists"
    }
    renderArtists({artists}){
        if(artists&&artists.length>0)
        {
            return artists.map((artist)=>{
                return <Artist key={artist.id} artistInfo={artist}/>
            })
        }
        return (
            <p className="text-danger">No artists available</p>
        )
    }
    render(){
        
        return(
            
            <div>
                <Header/>
                <br></br>
                <h2 className="text-center">Browse the artists </h2>
                {this.renderArtists(this.state)}
            </div>)
    }
    componentDidMount(){
        fetch(this.baseURL,{method:'GET'})
        .then((response)=>{
            
            if(response.status == 200)
                return response.json()
        })
        .then((data)=>{
            console.log(data)
            this.setState({artists:data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}
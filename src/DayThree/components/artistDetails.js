import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Card, CardBody,CardTitle} from 'reactstrap';

const ArtistDetails = ({match})=>{
    let [artistInfo,setArtistInfo] = useState({})
    const baseURL = "http://localhost:3001/artists";

    useEffect(()=>{
        fetch(`${baseURL}/${match.params.id}`)
        .then((response)=>{
            return response.json()
        })
        .then(data=>{
            console.log(data)
            setArtistInfo(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    if(artistInfo.name){

        //var albums = artistInfo.albums;
        var i=0;
        var sources = artistInfo.albums.map(()=>{
            return(
                <img width="50%" src={`/images/albums/${artistInfo.albums[i++].cover}.jpg`}/>
            )
        })

        return (
            <div>
                <h1 className="bg text-center"><Link to="/" className="text-secondary">music-db</Link></h1>
                <hr></hr>
                <Card body outline color="white">
                    <CardTitle tag="h1" className="text-center">
                        <img width="40%" src={`/images/covers/${artistInfo.cover}.jpg`} alt="Card image cap"/>
                    </CardTitle>
                    
                    <CardBody className="d-flex flex-column align-items-center" >
                        <h3>{artistInfo.name}</h3>
                        <h5 className="text-secondary col-10">{artistInfo.bio}</h5>
                        <div className="row col-6">
                            {sources}
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
    return <p>
        No Artists data available
        <Link to="/"> navigate to home</Link>
    </p>
}

export default ArtistDetails
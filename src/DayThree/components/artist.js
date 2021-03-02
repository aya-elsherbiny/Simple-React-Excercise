import { Link } from "react-router-dom"
import {Card, Button,CardBody,CardTitle} from 'reactstrap';
const Artist = ({ artistInfo }) => {
    
    if(artistInfo && artistInfo.name)
    {
        
        return(
            <div>
                <Card body outline color="white">
                    <CardBody Style="position: relative">
                        <img width="100%" src={`/images/covers/${artistInfo.cover}.jpg`} alt="Card image cap" />
                        <Button color="info" className="rounded-0 col-4" Style="position: relative; bottom:45.5px">
                            <Link to={`artists/${artistInfo.id}`} className="text-light"><h5>{artistInfo.name}</h5></Link>
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
    
    return <p>
        artist details
    </p>
}

export default Artist
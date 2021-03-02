import { Component } from 'react';
import {BrowserRouter as Router,Link, Route, Switch } from 'react-router-dom'
import ArtistDetails from './components/artistDetails';
import Artists from './components/artistList';

const App =()=> {
    
    
        return (
            
        <Router> 
            
            <Switch>
                <Route component={ArtistDetails} path="/artists/:id"/>
                <Route component={Artists} path="/artists"/>
                <Route component={Artists} path="/" exact/>        
                <Route path="*" render={()=>(
                <div className="alert alert-danger text-center">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                </div>
                )}/>
            </Switch>
        </Router>
        );
    
}
export default App;
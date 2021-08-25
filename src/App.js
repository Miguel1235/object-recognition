import {useState} from "react";
import './App.css';

import Particles from "react-particles-js";
import ParticlesConfig from "./config/particlesjs-config.json"


import Navigation from './Components/Navigation/Navigation'

import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";

import {Route, Switch} from 'react-router-dom'

const App = () =>{
    const [isSignedIn,setSignedIn] = useState(false)
    const [user,setUser] = useState({
        "_id":'',
        "name" : "",
        "email" : "",
        "picsUploaded" : 0,
    })

    const handleUser = (user)=> setUser(user)
    const handleIsSignedIn = (isSignedIn) => setSignedIn(isSignedIn)

    const handleLogOut = ()=>{
        setUser({})
        handleIsSignedIn(false)
    }

    return <div style={{position:"relative"}}>
        <div style={{position:"absolute",zIndex:-1}}>
            <Particles params={ParticlesConfig}/>
        </div>
        <Navigation isSignedIn={isSignedIn} handleLogOut={handleLogOut}/>
        <Switch>
            <Route path="/signUp">
                <SignUp/>
            </Route>
            <Route path="/signIn">
                <SignIn handleUser={handleUser} handleIsSignedIn={handleIsSignedIn}/>
            </Route>
            <Route path="/Home">
                <Home isSignedIn={isSignedIn} handleUser={handleUser} user={user}/>
            </Route>
            <Route path="/">
                <SignUp/>
            </Route>
        </Switch>
    </div>
}

export default App
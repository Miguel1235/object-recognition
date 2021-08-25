import {useState} from "react";
import {Route, Switch} from 'react-router-dom'
import Particles from "react-particles-js";
import ParticlesConfig from "./config/particlesjs-config.json"

import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import Navigation from './Components/Navigation/Navigation'

import './App.css';

const App = () => {
    const [isSignedIn, setSignedIn] = useState(false)
    const [user, setUser] = useState({
        "_id": '',
        "name": "",
        "email": "",
        "picsUploaded": 0,
    })

    const handleUser = (user) => setUser(user)

    const handleLogOut = () => {
        setUser({})
        setSignedIn(false)
    }

    const handleLogIn = (user)=>{
        setUser(user)
        setSignedIn(true)
    }

    return <div style={{position: "relative"}}>
        <div style={{position: "absolute", zIndex: -1}}>
            <Particles params={ParticlesConfig}/>
        </div>
        <Navigation isSignedIn={isSignedIn} handleLogOut={handleLogOut}/>
        <Switch>
            <Route path="/signUp">
                <SignUp/>
            </Route>
            <Route path="/signIn">
                <SignIn handleLogIn={handleLogIn}/>
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
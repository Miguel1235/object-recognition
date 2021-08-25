import {useState} from 'react'

import {useHistory} from "react-router-dom";
import axios from "axios";

const SignIn = ({handleUser, handleIsSignedIn}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const handlePasswordChange = event => setPassword(event.target.value)
    const handleMailChange = event => setEmail(event.target.value)

    const handleSubmit = async (event) => {

        event.preventDefault()
        const resp = await axios.post('http://localhost:3000/signIn', {
            email,
            password
        }).catch(err => {
            console.log(err.response.data)
        })

        if (resp) {
            handleUser(resp.data.data[0])
            handleIsSignedIn(true)
            history.push("/Home")
        }
    }

    return <div>
        <h1 className="centerFlex">Iniciar sesión</h1>
        <form className="centerFlex" onSubmit={handleSubmit}>
            <label>
                Email
            </label>
            <input type="email" value={email} onChange={handleMailChange} name="password" required/>
            <label>
                Contraseña
            </label>
            <input type="password" value={password} onChange={handlePasswordChange} name="password" required
                   minLength="6"/>
            <input type="submit" value="SignIn"/>
        </form>
    </div>
}

export default SignIn
import {useState} from 'react'
import axios from "axios";

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = event => setName(event.target.value)
    const handleMailChange = event => setEmail(event.target.value)
    const handlePasswordChange = event => setPassword(event.target.value)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const resp = await axios.post('https://object-recognition1.herokuapp.com/signUp', {
            name,
            email,
            password
        }).catch(err => {
            console.log(err.response.data)
        })

        if (resp) {
            alert("Usuario registrado correctamente")
        }
    }
    return <div>
        <h1 className="centerFlex">Registrarse</h1>
        <form className="centerFlex" onSubmit={handleSubmit}>
            <label>
                Nombre
            </label>
            <input type="text" value={name} onChange={handleNameChange} name="name" required/>
            <label>
                Email
            </label>
            <input type="email" value={email} onChange={handleMailChange} name="mail" required/>
            <label>
                Contraseña
            </label>
            <input type="password" value={password} onChange={handlePasswordChange} name="password" required
                   minLength="6"/>
            <input type="submit" value="Registrar"/>
        </form>
    </div>
}

export default SignUp
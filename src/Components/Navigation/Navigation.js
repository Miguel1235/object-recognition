import {Link} from 'react-router-dom'
import './Navigation.css'

const Navigation = ({isSignedIn,handleLogOut}) =>{

    if(!isSignedIn){
        return <nav style={{display:"flex",justifyContent:"flex-end"}}>
            <Link to="/signUp" className="link">Registrarse</Link>
            <Link to="/signIn" className="link">Iniciar Sesión</Link>
        </nav>
    }
    else{
        return <nav style={{display:"flex",justifyContent:"flex-end"}}>
            <Link to="/" className="link" onClick={()=>handleLogOut()}> Salir </Link>
        </nav>
    }
}

export default Navigation
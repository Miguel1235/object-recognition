import {useHistory} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import Image from "../Image/Image";
import Concepts from "../Concepts/Concepts";

const Home = ({isSignedIn, user, handleUser}) => {
    const [url, setUrl] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [concepts, setConcepts] = useState([])
    const history = useHistory()

    const handleLinkChange = event => setUrl(event.target.value)
    const handleSubmit = async (event) => {
        event.preventDefault()
        const result = await axios.post('https://object-recognition1.herokuapp.com/objectRecognition', {
            url
        }).catch(err => {
            console.log(err.response.data)
        })
        if (result) {
            setConcepts(result.data.data)

            const updateCounter = await axios.put('https://object-recognition1.herokuapp.com/images', {
                id: user._id
            }).catch(err => {
                console.log('Ups there was an error')
            })
            if (updateCounter) {
                setImageUrl(url)
                handleUser(updateCounter.data.data[0])
            }
        }
    }

    if (isSignedIn) {
        return <div>
            <h2 style={{textAlign: "center"}}>Hola {user.name || 'Anon'}, has subido {user.picsUploaded} imágenes en
                total</h2>
            <p className="centerFlex">Subí un link de una imagen y la app va a predecir de que se trata, por ejemplo:
                <a href="https://image.freepik.com/free-vector/researching-concept-illustration_114360-5466.jpg">
                    Imagen
                </a>
            </p>
            <form className="centerFlex" onSubmit={handleSubmit}>
                <input type="text" onChange={handleLinkChange} required placeholder="link de la imagen"/>
                <input type="submit" style={{cursor: "pointer"}} value="Predecir"/>
            </form>
            <Image imageUrl={imageUrl}/>
            <Concepts concepts={concepts}/>
        </div>
    } else {
        history.push('/')
        return <></>;
    }
}

export default Home
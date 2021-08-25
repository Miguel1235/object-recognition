import {useHistory} from "react-router-dom";
import {useState} from "react";
import Image from "../Image/Image";
import Concepts from "../Concepts/Concepts";
import axios from "axios";

const Home = ({isSignedIn, user,handleUser}) => {
    const history = useHistory()
    const [link, setLink] = useState('')
    const [url, setUrl] = useState('')
    const [concepts, setConcepts] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const result = await axios.post('http://localhost:3000/objectRecognition', {
            url: link
        }).catch(err => {
            console.log(err.response.data)
        })
        if (result) {
            handleConcepts(result.data.data)
            handleUrlChange(link)
            const updateCounter = await axios.put('http://localhost:3000/images',{
                id:user._id
            }).catch(err=>{
                console.log('Ups there was an error')
            })
            if(updateCounter){
                handleUser(updateCounter.data.data[0])
            }
        }
    }
    const handleLinkChange = (event) => {
        setLink(event.target.value)
    }

    const handleUrlChange = (link) => {
        setUrl(link)
    }
    const handleConcepts = (concepts) => {
        setConcepts(concepts)
    }

    if (isSignedIn) {
        return <div>
            <h2 style={{textAlign:"center"}}>Hola {user.name || 'Anon'}, has subido {user.picsUploaded } imágenes en total</h2>
            <p className="centerFlex">Subí un link de una imagen y la app va a predecir de que se trata, por ejemplo:
            <a href="https://image.freepik.com/free-vector/researching-concept-illustration_114360-5466.jpg">
                Imagen
            </a>

            </p>
            <form className="centerFlex" onSubmit={handleSubmit}>
                <input type="text" onChange={handleLinkChange} required placeholder="link de la imagen"/>
                <input type="submit" style={{cursor:"pointer"}} value="Predecir"/>
            </form>
            <Image imageUrl={url}/>
            <Concepts concepts={concepts}/>
        </div>
    } else {
        history.push('/')
        return <></>;
    }
}

export default Home
import './Concept.css';
import Tilt from "react-tilt";

const Concept = ({name,value}) =>{
   return <Tilt lassName="Tilt" options={{ max : 25,scale:1.1}}>
       <div className="concept Tilt-inner" >
           <p>{name}</p>
           <p style={{fontSize:"12px"}}>{value}</p>
       </div>
   </Tilt>
}

export default Concept
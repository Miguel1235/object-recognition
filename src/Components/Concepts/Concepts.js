import Concept from "../Concept/Concept";

const Concepts = ({concepts}) =>{
    if(concepts){
        return <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
            {
                concepts.map(({name,value},i)=><Concept key={i} name={name} value={value}/>)
            }
        </div>
    }
    else{
        return <div>

        </div>
    }
}
export default Concepts
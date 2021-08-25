const Image = ({imageUrl}) =>{
   if(imageUrl) {
      return <div>
           <img alt="imagen" width="450"  className="centerImage"   src={imageUrl} />
       </div>
   }
   else{
       return <div>

       </div>
   }
}
export default Image
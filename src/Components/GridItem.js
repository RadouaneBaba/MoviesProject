import React,{useState}  from 'react'
import ImageModal from './ImageModal'
const GridItem=({item , index})=>{
    const [modalHidden, setmodal] = useState(true)/*the state Responsible of modal*/
    
    return(
        <div key={index} className="w-4/12">
            <div className="bg-gray-700 shadow-md text-gray-300 text-2xl rounded-lg text-center cursor-pointer m-12" onClick={()=>setmodal(!modalHidden)} >
                <img className="rounded-t-lg h-64 w-full" src={item.src} alt={item.alt} />
                <div>
                    <h3 className="p-6 font-semibold">{item.title}</h3>
                </div>
            </div>
            <ImageModal item={item} modalHidden={modalHidden} setmodal={setmodal} />
        </div>
    )
}
export default GridItem
import React from 'react'
import GridItem from './GridItem'

const Grid=({items})=>{
    return(
        <div className="bg-gray-900">
            <h1 className="p-6 bg-gray-700 font-bold text-gray-300 text-6xl text-center">TOP Movies</h1>
            <div className="px-20 py-32 flex flex-wrap align-center">
                {items.map((item, index)=>(
                    <GridItem item={item} index={index}/>
                ))}
            </div>
        </div>
    )
}
export default Grid
import React from 'react'

const ImageModal=({item, modalHidden, setmodal})=>{
    console.log(modalHidden)
    return(
        <div className={`fixed z-10 top-0 right-0 w-full h-screen flex flex-col justify-center align-center bg-gray-900 bg-opacity-50  ${modalHidden?'hidden': ''}`} >
            <div className="bg-gray-300 m-32 p-12">
                <h1 className="font-bold text-3xl">{item.title}</h1>
                <p className="text-xl py-6">{item.description}</p>
                <div className="flex justify-end font-semibold pt-12 text-xl"><div className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full cursor-pointer">Watch Now</div> <div className=" px-4 py-2 border border-solid border-gray-900 rounded-full mx-4 cursor-pointer" onClick={setmodal}>Exit</div></div>
            </div>
        </div>
    )
}
export default ImageModal
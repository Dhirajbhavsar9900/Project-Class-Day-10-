import React, { useState } from 'react'
import Ai from './Ai';

function Input() {
    const [image,setImage] = useState("");
    const [text,setText] = useState("");

    async function query(data){
        try {
          const response = await fetch(
            "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
            {
              headers: { Authorization: "Bearer hf_mcie nKWoIaonMydKoamNWdPeXaqfkRecWi" },
              method: "POST",
              body: JSON.stringify({ inputs: data }), 
            }
          );
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setImage(imageUrl);

        } catch (error) {
          console.error("Error fetching the image:", error);
          alert("error",error) 
        }
    }
    
    
  return (
    <div className=' flex justify-center flex-col items-center'>
        <div className=' m-10'>
            <h1 className=' text-red-500 font-serif text-[60px] font-semibold'>Ai Image Generator</h1>
        </div>
        <div className='flex gap-3'>
            <input onChange={(e)=>{
                setText(e.target.value)
            }} className=' w-96 border-2 border-black p-4 rounded-xl font-mono font-semibold' type="text" placeholder='Type Your Text'/>
            <button  onClick={() => query(text)} className=' bg-red-600 p-4 rounded-lg hover:bg-red-600 border-2 hover:border-black'><span className=' text-white font-semibold'>Generate</span></button>
        </div>
        <Ai image={image} />
    </div>
    
  )
}

export default Input

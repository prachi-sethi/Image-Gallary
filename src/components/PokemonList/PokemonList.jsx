import React, { useEffect, useState } from 'react'
import './ImagePage.css'
import Image from '../Image/Image'
import axios from 'axios'


function ImagePage() {
    
    const [data,setData]=useState([])
    const [isLoading,setIsLoading] = useState(true)
    async function loadApi()
    {
    
        
        setIsLoading(true)
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20')
      
        const pics = await response.data.photos;
    //   console.log(pics);
    
      const imageList=await pics.map((p)=>{
       return {
            title:p.title,
            id:p.id,
            desc:p.description,
            url:p.url
        }
      
        

      })
      console.log(imageList)
      setData(imageList)
      console.log(data)
    //   console.log(imageList)
   setIsLoading(false);
   
    }
    useEffect(()=>{loadApi()},[])
   useEffect(()=>{console.log('new loading',isLoading)},[isLoading])
  return (
    <div>

  {isLoading?'Loading....': console.log(data)}
    
        {/* {imagedata.map((i)=>{
            {console.log(i)}
            <Image desc={i.desc} key={i.id} title={i.title} url={i.url}></Image>
        })} */}
  
    </div>
  )
}

export default ImagePage

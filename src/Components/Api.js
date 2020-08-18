import React from 'react'


const url="https://covid19.mathdro.id/api"

export const Api=()=> {

  fetch(url).then(res=>
        res.json()).then(result=>
         {
       
       return result
     }
     )
    
   
}



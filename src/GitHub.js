import React, {useEffect} from 'react'
import axios from 'axios';

export default function GitHub() {

  useEffect(() =>{
    axios.get("https://api.github.com/search/users?q=greg")
      .then(res => {
        console.log(res.data.items)
      });
  }, [])
  return (
    <div>
      
    </div>
   
  )
}

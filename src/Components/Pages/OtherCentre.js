import React, { Fragment , useEffect, useState} from 'react'
import ItemInfo from './ItemInfo';

const OtherCentre = () => {
  const [info,setInfo]=useState([]);
   useEffect(()=>{
       fetch('http://localhost:5000/info')
       .then(res=>res.json())
       .then(data=>
        setInfo(data))
        },[])
  
  return (
   <Fragment>
      <ItemInfo onAddfetch={info}></ItemInfo>
       </Fragment>
  )
}

export default OtherCentre
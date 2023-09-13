import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import { myapi } from '../api'

export function Loader({ params }){
    console.log(params.id)
    return myapi(params.id)

}

export default function Vandetails() {

  const Data = useLoaderData()
  
  let location = useLocation()
  console.log(location)
  let vantype = Data.type;
  let vancolor;
  let textcolor;
  if(vantype === "simple"){
      vancolor = "green";
      textcolor = "white"
  }else if(vantype === "rugged"){
      vancolor = "yellow";
      textcolor = "black";
  }else{
      vancolor = "pink";
      textcolor = "black"
  }
  const styles = {
      backgroundColor: vancolor,
      color: textcolor
  }
  const search = location.state?.search || "";
  const type = location.state?.type || "all"
  return (
    <section>
        <Link to={`..?${search}`} relative="path">{`Back to ${type && type} Vans`}</Link>
   <div className='vanitems'>
    <img className='vanimg2' src={Data.imageUrl} />
    <div className='name-price2'>
        <p>{Data.name}</p>
        <p>{`$${Data.price}`}</p>
    </div>
        <button className='typebtn2' style={styles}>{Data.type}</button>
        <p className='description'>{Data.description}</p>
   </div>
   </section>
  )  
} 
//export {Loader}

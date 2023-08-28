import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
export default function Vandetails() {
  const [Data, setData] = useState(()=>[])
  const myid = useParams()
  useEffect(()=>{
    fetch(`/api/vans/${myid.id}`)
    .then((res)=>res.json())
    .then((data)=>setData(data.vans))
  }, [myid.id])
  let location = useLocation()
  console.log(location.state.search)
  let vancolor = Data.type;
  let vantype;
  let textcolor;
  if(vancolor === "simple"){
      vantype = "green";
      textcolor = "white"
  }else if(vancolor === "rugged"){
      vantype = "yellow";
      textcolor = "black";
  }else{
      vantype = "pink";
      textcolor = "black"
  }
  const styles = {
      backgroundColor: vantype,
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

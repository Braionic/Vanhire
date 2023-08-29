import React, { useEffect, useState } from 'react'
import { Link, NavLink, useSearchParams, useLoaderData } from 'react-router-dom'
import { myapi } from '../api';
function loader(){
    return myapi();
}

export default function Vans() {
    const [Data, setData] = useState(()=>[])
    const [searchparams, setsearchparams] = useSearchParams()
    
    const data = useLoaderData()
    console.log(data)
    const typeFilter = searchparams.get("type");
    console.log(typeFilter)
    //useEffect(()=>{
     //   fetch("/api/vans")
    //    .then((res)=> res.json())
    //    .then((data)=> setData(data.vans))
   // }, [])
const styless = {
    textDecoration: "underline",
    color: "red"
}
    let filterperson = typeFilter? data.filter((val)=>val.type === typeFilter): data
    let van = filterperson.map((van)=>{
    let vancolor = van.type;
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
        return <div className='van' key={van.id}>
            <Link to={van.id} state={{search: searchparams.toString(), type: typeFilter}}>
            <img src={van.imageUrl} className='vanimg' />
            <div className='name-price'>
                <p>{van.name}</p>
                <p>{`$${van.price}`}</p>
            </div>
            <button className='typebtn' style={styles}>{van.type}</button>
            </Link>
        </div>

})

  return (
    <div className='mainvans'>
    <h3 className='exploreo'>Explore our van options</h3>
    <div className='types'>
        <ul>
            <li><button onClick={()=> setsearchparams({type: "rugged"})} className={`typebutton rugged ${typeFilter==="rugged" && "selected"}`} >Rugged</button></li>
            <li><button onClick={()=> setsearchparams({type: "simple"})} className={`typebutton simple ${typeFilter==="simple" && "selected"}`}  >Simple</button></li>
            <li><button onClick={()=> setsearchparams({type: "luxury"})} className={`typebutton luxury ${typeFilter==="luxury" && "selected"}`} >Luxury</button></li>
        </ul>
        {typeFilter &&<button onClick={()=> setsearchparams({})} className='typebutton'>Clear</button>}
    </div>
    
    <div className='vanscontainer'>
        {van}
    </div>
    </div>
  )
}
export {loader};
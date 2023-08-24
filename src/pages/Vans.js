import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Vans() {
    const [Data, setData] = useState([])
    useEffect(()=>{
        fetch("/api/vans")
        .then((res)=> res.json())
        .then((data)=> setData(data.vans))
    }, [])

let van = Data.map((van)=>{
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
            <Link to={van.id}>
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
    {Data.map((types)=>{
        return <button className='typebutton' key={types.id}>{types.type}</button>
    })}
    <div className='vanscontainer'>
        {van}
    </div>
    </div>
  )
}

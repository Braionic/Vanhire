import React, { Suspense } from 'react'
import { Link, useSearchParams, defer, Await, useLoaderData } from 'react-router-dom'
import { myapi } from '../api';
import { requireAuth } from '../utills/utills';
async function loader(){
    return defer({mainvans: myapi()})
}

export default function Vans() {
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

   function deferfunction(mainvansloader){
    const styless = {
        textDecoration: "underline",
        color: "red"
    }
        let filterperson = typeFilter? mainvansloader.filter((val)=>val.type === typeFilter): mainvansloader
        let van = filterperson.map((van)=>{
        let vantype = van.type;
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
    return(
        <>
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
        </>
    )
}
  return (
    <div className='mainvans'>
    <h3 className='exploreo'>Explore our van options</h3>
    <Suspense fallback={<h2>Loading...</h2>}>
    <Await resolve={data.mainvans}>
        {deferfunction}
    </Await>
   </Suspense>
    </div>
  )
}
export {loader};
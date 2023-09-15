import React, { useEffect, useState, Suspense } from 'react'
import { useParams, Link, defer, Await, useLocation } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import { myapi } from '../api'

export function Loader({ params }){
    console.log(params.id)
    const vandetailsPromise = myapi(params.id)
    return {vandetails: vandetailsPromise}
    

}

export default function Vandetails() {

  const Data = useLoaderData()
  
  let location = useLocation()
  console.log(location)
 
  const search = location.state?.search || "";
  const type = location.state?.type || "all"
  function vandetailsDefer(vandetailsData){
    let vantype = vandetailsData.type;
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
   return (
       <>
       <div className='vanitems'>
<img className='vanimg2' src={vandetailsData.imageUrl} />
<div className='name-price2'>
<p>{vandetailsData.name}</p>
<p>{`$${vandetailsData.price}`}</p>
</div>
<button className='typebtn2' style={styles}>{vandetailsData.type}</button>
<p className='description'>{vandetailsData.description}</p>
</div>
       </>
   )
}
  return (
    <section>
        <Link to={`..?${search}`} relative="path">{`Back to ${type && type} Vans`}</Link>
        <Suspense fallback={<h2>Loading</h2>}>
        <Await resolve={Data.vandetails}>
            {vandetailsDefer}
        </Await>
        </Suspense>
   
   </section>
  )  
} 
//export {Loader}

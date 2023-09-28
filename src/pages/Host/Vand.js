import React, { Suspense } from 'react'
import { Link, NavLink, useParams, Outlet, useLoaderData, defer, Await } from 'react-router-dom'

import { requireAuth } from '../../utills/utills';
import { getHostVans, getHostVansDetails } from '../../api';


export async function vanDLoader({ params, request }){
  await requireAuth(request)
  console.log(params)
  return defer({hostvandetails: getHostVansDetails(params.id)})
}


export default function Vand() {
   
   const Data = useLoaderData();

    const styles = {
        fontWeight: "bold",
        fontSize: "18px",
        textDecoration: "underline"
    }
  return (
    <section>
        <Link relative='path' to=".."><span>Back to Vans</span></Link>
    <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={Data.hostvandetails}>
            {(hostvandetailsloader)=>{
              return (
                <div className='vancontainer'>
      <div className='vandp'>
        <div className='vanthumb'>
        <img className='vanimg1' style={{height: "150px", width: "150px"}} src={hostvandetailsloader.imageUrl} />
        <div className='named'>
        <button className='vandb' key={hostvandetailsloader.id}>{hostvandetailsloader.type}</button>
                    <h4>{hostvandetailsloader.name}</h4>
                    <p>{`$${hostvandetailsloader.price}/day`}</p>
                </div>
        </div>
        <ul>
            <li><NavLink end style={({isActive})=> isActive? styles: null} to=".">Details</NavLink></li>
            <li><NavLink style={({isActive})=> isActive? styles: null} to="pricing">Pricing</NavLink></li>
            <li><NavLink style={({isActive})=> isActive? styles: null} to="photos">Photos</NavLink></li>
        </ul>
       <Outlet context={{hostvandetailsloader}} />
        </div>
        
      </div>
              )
            }}
          </Await>
       </Suspense>
    </section>
  )
}

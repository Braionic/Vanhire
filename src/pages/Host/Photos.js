import React from 'react'
import { useOutletContext } from 'react-router-dom'
export default function Photos() {
  const {Data} = useOutletContext()
  return (
    <section style={{backgroundColor: "aliceblue"}}>
    <div><img className='vanimg1' src={Data.imageUrl} /></div>
    </section>
  )
}

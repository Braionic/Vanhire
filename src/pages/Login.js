import React, { useState } from 'react'
import { Navigate, redirect, useLoaderData, useSearchParams } from 'react-router-dom';
import { loginUser } from '../api';

export function myloader({request}){
  return new URL(request.url).searchParams?.get("message")
}
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
});
const mymessage = useLoaderData()
console.log(mymessage)
const [searchparams, setsearchparams] = useSearchParams()
const mysearch = searchparams?.get("message");
const [logintest, setlogintest] = useState()
function handlechange(e){
  const name = e.target.name;
  const value = e.target.value
return setFormData((oldval)=>{
  return {...oldval, [name]: value}
})
}

function handlesubmit(event){
  event.preventDefault()
  if(formData.email === "b@b.com" && formData.password === "p123"){
      //setlogintest("login successfull")
    //return <Navigate to="/about" />
      loginUser(formData).then((data)=> console.log(data))
      return;
    
  }else{
    return setlogintest("wrong")
  }
}
  return (
    <section style={{height: "80vh"}}>
    <div className='mainLoginContainer'>
      <h1 className='loginheader'>Log in to your account</h1>
      <p>{formData.email}{formData.password}</p>
      <h3>{logintest}</h3>
      <h3 style={{color: "red"}}>{mymessage && mymessage}</h3>
        <form onSubmit={(event)=> handlesubmit(event)}>
        <input type='email' placeholder='email' name='email' onChange={(e)=> handlechange(e)} value={formData.name} /><br></br>
        <input type='password' placeholder='password' name='password' onChange={(e)=> handlechange(e)} value={formData.password} />
        <button className='signinbutton'>Log in</button>
        </form>
      
      </div>
      </section>
  )
}

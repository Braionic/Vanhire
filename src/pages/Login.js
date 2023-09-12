import React, { useState } from 'react'
import { Navigate, redirect, useLoaderData, useSearchParams, Form, json } from 'react-router-dom';
import { loginUser } from '../api';
import { requireAuth } from '../utills/utills';
export function myloader({request}){
  return new URL(request.url).searchParams?.get("message")
}

export async function action({request}){
  const formData = await request.formData();
  const email = formData.get("email")
  const password = formData.get("password")
  const man = {email, password}
  const data = await loginUser({email, password})
console.log(data)
  localStorage.setItem("isloggedin", "true")
  const response = redirect("/host");
      response.body = true; // It's silly, but it worksdf
      return response;
}
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
});

const [state, setState] = useState("idle")

const [error, setError] = useState(null)

const mymessage = useLoaderData()

console.log(mymessage)
const [searchparams, setsearchparams] = useSearchParams()
//const mysearch = searchparams?.get("message");
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
  setState("submitting")
  setError(null)
  setTimeout(() => {
    if(formData.email === "b@b.com" && formData.password === "p123"){
      //setlogintest("login successfull")
      loginUser(formData).then((data)=> console.log(data)).catch((err)=> setError(err))

      setState("idle")
      return;
    
  }else{
    setlogintest("wrong")
    setState("idle")
    loginUser(formData).then((data)=> console.log(data)).catch((err)=> setError(err))
    return
  }
  }, 1000);
  
  
  
}
  return (
    <section style={{height: "80vh"}}>
    <div className='mainLoginContainer'>
      <h1 className='loginheader'>Log in to your account</h1>
      <p>{formData.email}{formData.password}</p>
      <h3>{logintest}</h3>
      <h2>{state}</h2>
      <h1>{error?.message}</h1>
      <h3 style={{color: "red"}}>{mymessage && mymessage}</h3>
        <Form method="post" replace>
        <input type='email' placeholder='email' name='email'   /><br></br>
        <input type='password' placeholder='password' name='password'   />
        {state === "submitting"?<button className='signinbutton' style={{opacity: 0.5}} disabled>Submitting</button>:<button className='signinbutton'>Log in</button>}
        </Form>
      
      </div>
      </section>
  )
}

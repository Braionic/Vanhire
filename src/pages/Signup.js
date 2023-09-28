import React, { useState } from "react";
import { useNavigation, Form, redirect } from "react-router-dom";
import { auth, handlesignup } from "../api";
import { add } from "../api";
import {createUserWithEmailAndPassword} from 'firebase/auth'

export async function loader({request, params }){
    console.log(request, params)
    return null
}
export async function action({ request, params }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  console.log(request)
  try {
    const regData = await createUserWithEmailAndPassword(auth, email, password)
    return redirect("/login")
    
  } catch (error) {
    console.log(error.message)
  }
  return null
}

export default function Signup() {
  const formState = useNavigation();
async function handlecl(e){
    e.preventDefault()
    return add()
}
  return (
    <section style={{ height: "80vh" }}>
      <div className="mainLoginContainer">
        <h1 className="loginheader">Signup for an account account</h1>

        <Form method="post" replace>
          <input type="email" placeholder="email" name="email" required />
          <br></br>
          <input
            type="password"
            placeholder="password"
            name="password"
            required
          />
          <button
            className="signinbutton"
            disabled={formState.state === "submitting"}
          >
            {formState.state === "submitting" ? "Logging in.." : "Sign up"}
          </button>
        </Form>

        <button onClick={(e)=>{handlecl(e)}}>Click me</button>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import {
  Navigate,
  redirect,
  useLoaderData,
  useSearchParams,
  Form,
  json,
  useActionData,
  useNavigation,
  Link,
} from "react-router-dom";
import { auth, loginUser } from "../api";
import { requireAuth } from "../utills/utills";
import {
  GoogleAuthProvider,
  confirmPasswordReset,
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
export function myloader({ request }) {
  return new URL(request.url).searchParams?.get("message");
}

const sleep = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  //const man = {email, password}
  //loginUser({email, password}).then((data)=> console.log(data))
  const pathname = new URL(request.url).searchParams.get("redirectTo");
  try {
    await sleep(1000);

    const loginPromise = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(loginPromise);
    //localStorage.setItem("isloggedin", "true")
    return redirect(`${pathname ? pathname : "/host"}`);
  } catch (err) {
    console.log(err.message);
  }
  return null;
}
export default function Login() {
  const mymessage = useLoaderData();
  const actionData = useActionData();
  const formState = useNavigation();

  console.log(mymessage);
  const [searchparams, setsearchparams] = useSearchParams();
  //const mysearch = searchparams?.get("message");

  console.log(auth.currentUser?.displayName);
  
  async function handleGoogleSign() {
    console.log(auth.currentUser?.displayName);
    console.log(auth.currentUser?.email);
    const provider = new GoogleAuthProvider();
    try {
      const data = await signInWithPopup(auth, provider);
      console.log(data.user);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <section style={{ height: "80vh" }}>
      <div className="mainLoginContainer">
        <h1 className="loginheader">Log in to your account</h1>

        <h4 style={{ textAlign: "center" }}>{actionData}</h4>
        <h3 style={{ color: "red" }}>{mymessage && mymessage}</h3>
        <Form method="post" replace>
          <input type="email" placeholder="email" name="email" />
          <br></br>
          <input type="password" placeholder="password" name="password" />
          <button
            className="signinbutton"
            disabled={formState.state === "submitting"}
          >
            {formState.state === "submitting" ? "Logging in.." : "Log in"}
          </button>
        </Form>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
        <button onClick={handleGoogleSign}>Sign in with google</button>
      </div>
    </section>
  );
}

/*
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

    loginUser(formData).then((data)=> console.log(data)).catch((err)=> setError(err))
    return
  }
  }, 1000);
  
  
  
}


function handlechange(e){
  const name = e.target.name;
  const value = e.target.value
return setFormData((oldval)=>{
  return {...oldval, [name]: value}
})
}
*/

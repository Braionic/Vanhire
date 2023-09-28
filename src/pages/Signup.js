import React, { useState } from "react";
import { useNavigation, Form, redirect, useActionData } from "react-router-dom";
import { auth, handlesignup } from "../api";
import { add } from "../api";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function loader({ request, params }) {
  console.log(request, params);
  return null;
}
export async function action({ request, params }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  console.log(request);
  try {
    const regData = await createUserWithEmailAndPassword(auth, email, password);
    return redirect("/profile");
  } catch (error) {
    return error.message;
  }
  return null;
}

export default function Signup() {
  const formState = useNavigation();
  const actionData = useActionData();
  async function handlecl(e) {
    e.preventDefault();
    return add();
  }
  console.log(actionData);
  return (
    <section style={{ height: "80vh" }}>
      <div className="mainLoginContainer">
        <h1 className="loginheader">Signup for an account account</h1>
        <h3>{actionData}</h3>
        <Form method="post" replace>
          {actionData?.email && <p>{actionData.email}</p>}
          <input type="email" placeholder="email" name="email" required />
          <br></br>
          {actionData?.password && <p>{actionData.password}</p>}
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

        <button
          onClick={(e) => {
            handlecl(e);
          }}
        >
          Click me
        </button>
      </div>
    </section>
  );
}

import { redirect } from "react-router-dom";
export async function requireAuth(){
  const myvalue = JSON.parse(localStorage.getItem("isloggedin"))
  console.log(JSON.parse(localStorage.getItem("isloggedin")))
    if (!myvalue) {
      const response = redirect("/login?message=You must first log in");
      response.body = true; // It's silly, but it worksdf
      return response;
    }
    return null;
  }
import { redirect } from "react-router-dom";
export async function requireAuth(request){
  const pathname = new URL(request.url).pathname;
  const myvalue = JSON.parse(localStorage.getItem("isloggedin"))
  console.log(JSON.parse(localStorage.getItem("isloggedin")))
    if (!myvalue) {
      const response = redirect(`/login?redirectTo=${pathname}`);
      response.body = true; // It's silly, but it worksdf
      return response;
    }
    return null;
  }
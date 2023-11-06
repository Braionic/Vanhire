import { redirect } from "react-router-dom";
import { auth } from "../api";
export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  // const myvalue = JSON.parse(localStorage.getItem("isloggedin"))
  //console.log(JSON.parse(localStorage.getItem("isloggedin")))
  if (!auth.currentUser) {
    return redirect(
      `/login?message=You must first sign in to continue.&redirectTo=${pathname}`,
      { replace: true }
    );
  }
  return null;
}

import { redirect } from "react-router-dom";
export async function requireAuth(){
    const isLoggedIn = false;
    if (!isLoggedIn) {
      const response = redirect("/login?message=You must first log in");
      response.body = true; // It's silly, but it worksdf
      return response;
    }
    return null;
  }
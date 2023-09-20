// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeoOD8Eb_IfdyKP6RProP4fe96Qn4WIlM",
  authDomain: "vanlife-b72db.firebaseapp.com",
  projectId: "vanlife-b72db",
  storageBucket: "vanlife-b72db.appspot.com",
  messagingSenderId: "177168339678",
  appId: "1:177168339678:web:379a357f8f9cfde6fce84f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vanscollection = collection(db, 'vans')
export async function myapi(id){
    
const vansSnapshot = await getDocs(vanscollection)
const dataArr = vansSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
  return dataArr;
}

export async function getVan(id){
   const colref = doc(db, 'vans', id)
    const colsnapshot = await getDoc(colref)
    console.log(colsnapshot.data(), colsnapshot.id)
    return {...colsnapshot.data(), id: colsnapshot.id}
}
/*
export async function myapi(id){
    const url = id? `/api/vans/${id}`: "/api/vans";
    const res = await fetch(url)
    if(!res.ok){
        throw{
            message: "Failed to fetch Data",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans;
}
*/
/* export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}
*/
export async function getHostVans(){
    const hostvansnap = await getDocs(vanscollection);
    const hostVansdata = hostvansnap.docs.map((men)=> {
       return  {...men.data(), id: men.id}
    })
    console.log(hostVansdata)
    return hostVansdata;
}

export async function getHostVansDetails(id){
    const detailsCoref = doc(db, 'vans', id);
    const hostvansnap = await getDoc(detailsCoref)
    
    return {...hostvansnap.data(), id: hostvansnap.id};
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

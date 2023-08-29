export async function myapi(){
    const res = await fetch("/api/vans")
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
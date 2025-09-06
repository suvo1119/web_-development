function fetchuserdata(){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({name:"suvadip",url:"https://google.com"})
    }, 3000);
    })
}
async function getuserdata(params) {
    try {
        console.log("fetching user data ...");
        const userdata = await fetchuserdata()
        console.log(userdata)
        console.log("user data fetched successfully")
    } catch (error) {
        console.error("data is rejected", error)
    }
    
}
getuserdata();
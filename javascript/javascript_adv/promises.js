function fetchdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let success =false;
        if(success){
            resolve("data fetched successfully;")
        }
        else{
            reject("data is rejected !")
        }
    },3000);
});
}
fetchdata()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error)

})
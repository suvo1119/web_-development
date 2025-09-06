document.addEventListener('DOMContentLoaded',()=>{
    const cityinput= document.getElementById('city-input');
    const getwetherbtn=document.getElementById('get-weather-btn');
    
    
    const weatherinfo= document.getElementById('weather-info')
const cityname= document.getElementById('city-name');
const temperature= document.getElementById('temperature');
const description= document.getElementById('description');
const errormessage= document.getElementById('error-message');
const API_KEY="8a97120ea864d3da94ff72b86b29273a"


getwetherbtn.addEventListener("click", async()=>{
    const city=cityinput.value.trim();

    if(!city)return;

    try {
        const weatherdata=await fetchweather(city)
        displayweather(weatherdata)
    } catch (error) {
        showerror()
    }



})
 async function fetchweather(city){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}

`;


    const response= await fetch(url);
    console.log(response);
    if(!response.ok){
        throw new Error("city not found");
        
        
    }
    const data = await response.json();
    return data;


}


function displayweather(data){
    console.log(data);
    const {name, main, weather}=data;
    cityname.textContent=name;
    weatherinfo.classList.remove('hidden')
    errormessage.classList.add('hidden')
    temperature.textContent=`temperature : ${main.temp}`;
    description.textContent=`weather: ${weather[0].description}`;


}


function showerror() {
    weatherinfo.classList.remove('hidden');
    errormessage.classList.add('hidden');
    
}















})
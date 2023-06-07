
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '388adf8baamsh7f8375737e04755p13af5ajsn33afb5591be7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
 //const header = document.querySelector("h1");
 const searchBox = document.querySelector(".search input");
 const searchBtn = document.querySelector(".search button");

async function checkWather(city){
	const response = await fetch(url + city, options);
	const result = await response.json();
	console.log(result);
    
	document.querySelector(".city").innerHTML=city;
    document.querySelector(".temp").innerHTML=result.temp +"°c";
    document.querySelector(".humidity").innerHTML=result.humidity +"%";
	document.querySelector(".wind").innerHTML=result.wind_speed + "km/h";
 
}
searchBtn.addEventListener("click",()=>{
	checkWather(searchBox.value);
})

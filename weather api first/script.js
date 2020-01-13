const button = document.getElementById('fetchapi');
let area = document.getElementById('celcius');
window.addEventListener('load', function fetchApiData(){
const proxy = 'https://cors-anywhere.herokuapp.com/' //not actually needed in this case
const api = `${proxy}http://api.openweathermap.org/data/2.5/weather?q=%C3%A4%C3%A4nekoski&APPID=071656ebca0dd91cb744b42919983bb5`;

fetch(api) //fetching api
.then(response => {
    return response.json();
})
.then(response =>{
    console.log(response);
    const kelvin = response.main.temp; //temperature from the api to a variable
    
    let kelvinToCelcius = kelvin - 273.15; //calculating celvin
    console.log(Math.floor(kelvinToCelcius)); //nothing important

    button.addEventListener('click', function celcius(){
        area.textContent = Math.floor(kelvinToCelcius) + '°C';
    });

});


});
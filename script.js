// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API Key}
// 9ba77e98ec46d20357cb239852a31294
let weather={ 
    apiKey: "9ba77e98ec46d20357cb239852a31294",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey)           //api for the get request
        .then(response => response.json())
        .then(data => this.renderWeather(data));
    },
 renderWeather : function(data){
    //destructioning the data, where i take out the parameter from objects so i can access them directly.
    const {name} = data;
    const {icon,description}=data.weather[0];
    const {temp,humidity}=data.main;
    const {speed}=data.wind;
    console.log(name,icon,description,temp,humidity,speed)
    // get element by id will get all elements by this id , use it & add [0] OR use query selector to get the 1st one only
    document.querySelector('#city').innerText='Weather in ' + name ;
    document.querySelector('#clouds').src= "https://openweathermap.org/img/wn/" + icon + '.png'
    document.querySelector('#description').innerText = description;
    document.querySelector('#temperature').innerText= temp + "°C";
    document.querySelector('#humidity').innerText= 'Humidity: ' + humidity + '%';
    document.querySelector('#wind_speed').innerText= 'Wind speed: ' + speed + 'km/h'
    }
//  search:function(){
//   this.fetchWeather(document.querySelector('.place').value);
//   },
}
let searchBtn = document.querySelector("#search");
searchBtn.addEventListener('click',function(){
    weather.fetchWeather(document.querySelector('.place').value);
});
let search = document.querySelector('.place');
search.addEventListener('keyup', function(e){
 if(e.key=='Enter'){
    weather.fetchWeather(document.querySelector('.place').value);
 }
});
weather.fetchWeather("london")
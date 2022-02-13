//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherAPI ={

    key : "780ce952ddf0dce0cf2c40d1dc9cce32",
    baseURL : "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox=document.getElementById("input-box");

searchInputBox.addEventListener('keypress',(event)=>
{
    if(event.keyCode===13)
    {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }


});

// Get Weather Report for a city
function getWeatherReport(city)
{
    fetch(`${weatherAPI.baseURL}?q=${city}&appid=${weatherAPI.key}&units=metric`)
    .then(weather =>
        {
            return weather.json();
        }).then((showWeatherReport));
       
}

//Show Weather report
function showWeatherReport(weather)
{
    console.log(weather);

    let city=document.getElementById("city");
    city.innerText=`${weather.name}, ${weather.sys.country}`;

    let temperature=document.getElementById("temp");
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let minMaxtemp=document.getElementById("min-max");
    minMaxtemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.ceil(weather.main.temp_min)}&deg;C (max)`;

    let weatherType=document.getElementById('weather');
    weatherType.innerText=`${weather.weather[0].main}`;

    let date=document.getElementById("date");
    let todayDate=new Date();
    date.innerText=dateManage(todayDate);

   
    if(weatherType.textContent=="Clear")
    {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";
    }
    else if(weatherType.textContent=="Clouds")
    {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1498496294664-d9372eb521f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdWRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";
    }
    else if(weatherType.textContent=="Haze")
    {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1532592950061-606f15b31037?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGF6ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";
    }
    else if(weatherType.textContent=="Rain")
    {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";
    }
    else if(weatherType.textContent=="Snow")
    {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c25vd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";
    }
    else if(weatherType.textContent=="Thunderstorm")
    {
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1551234250-d88208c2ce14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGh1bmRlcnN0b3JtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";
    }


    
}

// manage date
function dateManage(dateArg)
{
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday "];
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}



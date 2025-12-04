document.addEventListener('DOMContentLoaded', function(){
    
    const tempDiv = document.getElementById('tempDiv');
    const forecastDiv = document.getElementById('future');
    const hourHeading = document.getElementById('hourlyHeading');
    const hourBody = document.getElementById('hourlyBody');
    let citySearched;

    async function fetchCurrentWeather(cityEntered){
        const currentWeather = `https://api.weatherapi.com/v1/current.json?key=f70c5fafcca94db2b55114602250312&q=${cityEntered}`;
        try{
            const res = await fetch(currentWeather);
            const data = await res.json();
            tempDiv.innerHTML = '';

            const city = document.createElement('h2');
            city.textContent = `${data.location.name}, ${data.location.country} (${data.current.last_updated})`;
            city.id = 'city';
            tempDiv.appendChild(city);

            const condition = document.createElement('h3');

            const conditionIcon = document.createElement('img');
            conditionIcon.src = data.current.condition.icon;
            conditionIcon.alt = data.current.condition.text;

            condition.appendChild(conditionIcon);

            const conditionText = document.createTextNode(` ${data.current.condition.text}`);
            condition.id = 'condition';
            condition.appendChild(conditionText);

            tempDiv.appendChild(condition);

            const tempH = document.createElement('h4');
            tempH.textContent = `${data.current.temp_c}℃`;
            tempH.id = 'temp';
            tempDiv.appendChild(tempH);

            const feelsLikeH = document.createElement('h5');
            feelsLikeH.textContent = `Feels Like ${data.current.feelslike_c}℃`;
            feelsLikeH.id = 'feelsLike';
            tempDiv.appendChild(feelsLikeH);

            const rain = document.createElement('h5');
            rain.textContent = `Precipitation: ${data.current.precip_mm}mm`;
            rain.id = 'rain';
            tempDiv.appendChild(rain);

            const wind = document.createElement('h5');
            wind.textContent = `Wind: ${data.current.gust_kph}km/h`;
            wind.id = 'wind';
            tempDiv.appendChild(wind);
        }
        catch(error){
            alert('City Invalid!!!!');
        }
    }

    async function fetchForecast(cityEntered){
        const forecast = `https://api.weatherapi.com/v1/forecast.json?key=f70c5fafcca94db2b55114602250312&q=${cityEntered}&days=3`;
        try{
            const res = await fetch(forecast);
            const data = await res.json();

            hourHeading.innerHTML = '';
            hourBody.innerHTML = '';
            forecastDiv.innerHTML = '';

            for(const hour of data.forecast.forecastday[0].hour){
                const timeOnly = hour.time.split(" ")[1];
                const time = document.createElement('th');
                time.textContent = `${timeOnly}`;
                hourHeading.appendChild(time);

                const hourForcast = document.createElement('td');

                const temp = document.createElement('tr');
                temp.textContent = `${hour.temp_c}℃`;
                hourForcast.appendChild(temp);

                const hourCondition = document.createElement('tr');
                const hourConditionIcon = document.createElement('img');
                hourConditionIcon.src = hour.condition.icon;
                hourCondition.appendChild(hourConditionIcon);
                const conditionText = document.createTextNode(` ${hour.condition.text}`);
                hourCondition.appendChild(conditionText);
                hourForcast.appendChild(hourCondition);

                hourBody.appendChild(hourForcast);
            }

            for(const con of data.forecast.forecastday){
                const dayForecast = document.createElement('td');
                const forecastIcon = document.createElement('img');
                forecastIcon.src = con.day.condition.icon;
                dayForecast.appendChild(forecastIcon);
                const conditionText = document.createTextNode(` ${con.day.condition.text}`);
                dayForecast.appendChild(conditionText);
                forecastDiv.appendChild(dayForecast);
            }
            console.log(data);
        }
        catch(error){
            console.log('City Invalid!!!!');
        }
    }

    const cityButton =document.getElementById('citySearch');
    cityButton.addEventListener('click', function(event){
        event.preventDefault();
        citySearched = document.getElementById('cityInput').value;
        fetchCurrentWeather(citySearched);
        fetchForecast(citySearched);
    })

});

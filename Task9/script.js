const WeatherWidget = (function () {
    const cityID = 625144,
        apiUrl = "http://api.openweathermap.org/data/2.5",
        apiKey = "00bfb1934a8e8968b9f6660249c58bce",
        apiQuery = `${apiUrl}/weather?id=${cityID}&units=metric&lang=ru&appid=${apiKey}`;

    const drawWidget = function (data) {
        let widget = document.createElement("div"),
            widgetTitle = document.createElement("div"),
            description = document.createElement("div"),
            wind = document.createElement("div");

        widget.style.cssText = "top: -220px; right: 30px; position: absolute; width: 300px; height: 300px; background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(65,171,255,1) 0%, rgba(198,245,255,1) 100%); border-radius: 12px; text-align: center; color: #fff; font-size: x-large; padding: 12px";
        widget.setAttribute("id", "widget");
        widgetTitle.innerHTML = `Сейчас в ${data.name}е ${data.main.temp} °C <img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" style: "display: block; margin: 0 auto">`;
        description.innerHTML = `${data.weather[0]["description"][0].toUpperCase()}${data.weather[0]["description"].slice(1)}`;
        wind.innerHTML = `Ветер ${data.wind.speed} км/ч`;
        
        widget.append(widgetTitle);
        widget.append(description);
        widget.append(wind);
        
        document.body.append(widget);

        gsap.to('#widget', {duration: 3, ease: "elastic.out(1, 0.3)", y: 250});
    }

    return {
        getWeather: function () {
            fetch(apiQuery)
                .then(response => response.json())
                .then(data => {
                    drawWidget(data);
                })
                .catch(error => console.error("Ошибка получение погоды. Причина: " + error));
        }
    }
})

let Weather = new WeatherWidget();


function GetWeather() {
    var cityName = document.getElementById("city").value;
    document.getElementById("cityName").innerHTML = cityName;

    var APIKey = "b96c5bd63923419b949142018241501"
    var url="http://api.weatherapi.com/v1/current.json?key=" + APIKey + "&q=" + cityName

    console.log(`url : ${url}`);

    //Method 1 : using XMLHttpRequest
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", url);
    req.send();

    //Method 2 : using fetch() API
    // fetch(url)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(json => UpdateUI(json))
    //     .catch(reason => alert(reason));
}

function reqListener() {
    console.log(this.responseText);
    var json = JSON.parse(this.responseText);
    console.log(`json : ${json}`);
    UpdateUI(json);
}
  
function UpdateUI(weatherJson) {
    var temp = weatherJson.current.temp_c;
    var feels = weatherJson.current.feelslike_c;
    var hum = weatherJson.current.humidity;
    var condition = weatherJson.current.condition.text;

    document.getElementById("temp").innerText = temp;
    document.getElementById("feels").innerText = feels;
    document.getElementById("hum").innerText = hum;
    document.getElementById("condition").innerText = condition;
}
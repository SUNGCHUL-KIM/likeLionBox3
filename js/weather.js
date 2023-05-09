const API_KEY = "9602e382a8f1e0371b0af123629b17d3";



function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
        });


}
function onGeoError() {
    alert("Can't find you");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) //브라우저에서 좌표계를 알려준다. 필요한 함수 인자 2개(정상실행, 오류시)
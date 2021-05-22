var content = document.querySelector('#dataContent')
// Se cargan los datos cuando se inicializa la pagina
window.onload = function() {
    getWeather("Cordoba");
    getWeather("Buenos Aires");
    getWeather("Mendoza");
    getWeather("San Luis");
    getWeather("Jujuy");
    getWeather("Neuquen");
    getWeather("Usuahia");
};

// Metodo de consulta de API
function getWeather(location) {
    fetch("http://api.weatherbit.io/v2.0/current?key=c89435948b4145c49b796b2a4e18d861&city="+location+"&country=AR")
        .then(res => res.json())
        .then(data =>{insertTable(data)})
        .catch( err => { console.log(err) });
}

// Inserta el objeto en la tabla
function insertTable (city){
    content.innerHTML +=
    `<tr>
        <td>${city.data[0].city_name}</td>
        <td>${city.data[0].datetime}</td>
        <td>${city.data[0].temp}</td>
        <td>${city.data[0].precip}</td>
        <td>${city.data[0].pres}</td>
        <td>${city.data[0].clouds}</td>
    </tr>`
}
let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
    let countryName = "Brunei";
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL)
    fetch(finalURL).then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].timezones[0]);
        console.log(Object.values(data[0].languages).toString().split(",").join(","));
        result.innerHTML = `
        <img src="${data[0].flags.svg}"
        class="flag-img">
        <h1>${data[0].name.common}</h1>
        <div class="wrapper">
            <div class="data-wrapper">
                <h3>Capital: </h3>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h3>Continent: </h3>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h3>Population: </h3>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h3>Currency: </h3>
                <span>${Object.keys(data[0].currencies)[0] }</span>
            </div>
        </div>        
        `;
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
    });
});
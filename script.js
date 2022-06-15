let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
    let countryName = countryInput.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL)
    fetch(finalURL).then((response) => response.json())
    .then((data) => {
        result.innerHTML = `
        <img src="${data[0].flags.svg}"
        class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital: </h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent: </h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population: </h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency: </h4>
                <span>${Object.keys(data[0].currencies)[0] }</span>
            </div>
        </div>  
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages: </h4>
                <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Coat of Arms: </h4>
                <span><img src="${data[0].coatOfArms.svg}"
                class="coat-img"></span>
            </div>
        </div>
            
        `;
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
    })
    .catch(() => {
        if(countryName.length == 0){
            result.innerHTML = `<h3>This input field cannot be empty</h3>`;
        }
        else {
            result.innerHTML = `<h3>No country found</h3>`;
        }
    });
});
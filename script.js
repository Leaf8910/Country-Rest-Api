let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-inp");
let coatSvg = document.getElementById("coatSvg");
let coatLoad = document.getElementById("coatLoad")


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
                <h4 display="none">Timezone: </h4>
                <span>${Object.values(data[0].timezones)[0] }</span>
            </div>
        </div>  
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Coat of Arms: </h4>
                <svg id="coatLoad" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.354 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L8 12.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5V13a.5.5 0 01-1 0V6.5A.5.5 0 018 6zM2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"></path></svg>
                <span><img id="coatSvg" display="block" src="${data[0].coatOfArms.svg}"
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

// coatLoad.addEventListener("click", () => {
//     coatSvg.style.display = "contents";
//     coatLoad.style.display = "none";
// })
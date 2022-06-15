let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
    let countryName = "Brunei";
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL)
    fetch(finalURL).then((response) => response.json()).then((data) => {
        console.log(data);
    });
});
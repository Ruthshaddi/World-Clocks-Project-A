function updateTime() {
 
  // iceland
let icelandElement = document.querySelector("#iceland");
if (icelandElement) {
  
  let icelandDateElement = icelandElement.querySelector(".date");
  let icelandTimeElement = icelandElement.querySelector(".time");
  let icelandTime = moment().tz("iceland");
  icelandDateElement.innerHTML = icelandTime.format("MMMM  Do YYYY");
  icelandTimeElement.innerHTML =  icelandTime.format ( 
  "h:mm:ss [<small>]A[</small>]"
  );

}


// poland
let polandElement = document.querySelector("#poland");
if (polandElement) {
  
  let polandDateElement = polandElement.querySelector(".date");
  let polandTimeElement = polandElement.querySelector(".time");
  let polandTime = moment().tz("poland");
  polandDateElement.innerHTML = polandTime.format("MMMM Do YYYY");
  polandTimeElement.innerHTML =  polandTime.format ( 
  "h:mm:ss[<small>]A[</small>]"
  );  

} 

 }


function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }


  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);









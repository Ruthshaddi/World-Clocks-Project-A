function updateTime() {
 
  // iceland
let icelandElement = document.querySelector("#iceland");

let icelandDateElement = icelandElement.querySelector(".date");
let icelandTimeElement = icelandElement.querySelector(".time");
let icelandTime = moment().tz("iceland");
icelandDateElement.innerHTML = icelandTime.format("MMMM Do YYYY");
icelandTimeElement.innerHTML =  icelandTime.format ( 
"h:mm:ss:SSS [<small>]A[</small>]"
);

// poland
let polandElement = document.querySelector("#poland");

let polandDateElement = polandElement.querySelector(".date");
let polandTimeElement = polandElement.querySelector(".time");
let polandTime = moment().tz("poland");
polandDateElement.innerHTML = polandTime.format("MMMM Do YYYY");
polandTimeElement.innerHTML =  polandTime.format ( 
"h:mm:ss:SSS [<small>]A[</small>]"
);  

}

updateTime();
setInterval(updateTime, 1000);
import {getData}  from "./exports.js"

// window.onload = function () {
   
//   getData("http://localhost:3000/items");
// };

let Cars=document.getElementById("car")
Cars.onclick=()=>{
    let category="house";
    console.log(category)
       let container = document.getElementById("container");
    getData(`http://localhost:3000/items?category=${category}`,container);
}
let bikes=document.getElementById("bike")
bikes.onclick=()=>{
    let category="scooter";
    console.log(category)
    let container = document.getElementById("container");
    getData(`http://localhost:3000/items?category=${category}`,container);
}
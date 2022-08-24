
//hiding and toggling of division//
let e = document.getElementById('nav_location_location');
let loc_input = document.getElementById('location')
let language = document.getElementById('language_div')

document.getElementById('nav_location_input').addEventListener('click',()=>{
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
    down.classList.toggle('down_spin')
    nav_location_input.style.border = '2px solid #8aebdec3'
})


// for division value in input field//
let loc = document.querySelectorAll('.loc')
loc.forEach((el)=>{
    el.addEventListener('click',() => {
        loc_input.value = el.innerText;
    })
})

document.getElementById('language').addEventListener('click',()=>{
    language.style.display = (language.style.display == 'block') ? 'none' : 'block';
    down2.classList.toggle('down_spin')
})
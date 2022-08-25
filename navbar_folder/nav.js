
//hiding and toggling of location division//
let e = document.getElementById('nav_location_location');
let loc_input = document.getElementById('location')
let language = document.getElementById('language_div')
let header_categories_data = document.getElementById('header_categories_data')

document.getElementById('nav_location').addEventListener('click',()=>{
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
    down.classList.toggle('down_spin')
    nav_location_input.style.border = '2px solid #8aebdec3'
})


// for location division input field value//
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

document.getElementById('header_categories').addEventListener('click',()=>{
    header_categories_data.style.display = (header_categories_data.style.display == 'flex') ? 'none' : 'flex';
    down3.classList.toggle('down_spin')
})



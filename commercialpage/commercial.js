// import {navbar} from '../mycomponents/import.js'
// import {header} from '../mycomponents/import.js'
// import {footer} from '../mycomponents/import.js'
// let r = navbar()
// let s = header();
// let t = footer();
// document.getElementById('navbar').innerHTML = r;
// document.getElementById('footer').innerHTML = t;
// document.getElementById('home_page_header').innerHTML = s;






let hide = document.getElementById('all_cat');
let hide_loc = document.getElementById('loc_div');
let hide_bud = document.getElementById('bud_div');
let hide_brand = document.getElementById('brand_div');

document.getElementById('cat_toggle').addEventListener('click',()=>{
    hide.style.display = (hide.style.display == 'none') ? 'block' : 'none';
    document.getElementById('cat').classList.toggle('spin')
})
document.getElementById('catt_toggle').addEventListener('click',()=>{
    hide_loc.style.display = (hide_loc.style.display == 'none') ? 'block' : 'none';
    document.getElementById('catt').classList.toggle('spin')
})
document.getElementById('cattt_toggle').addEventListener('click',()=>{
    hide_bud.style.display = (hide_bud.style.display == 'none') ? 'block' : 'none';
    document.getElementById('cattt').classList.toggle('spin')
})
// document.getElementById('catttt_toggle').addEventListener('click',()=>{
//     hide_brand.style.display = (hide_brand.style.display == 'none') ? 'block' : 'none';
//     document.getElementById('catttt').classList.toggle('spin')
// })
let z=1;

let getData = async () =>{
    try{
        let res = await fetch(' http://localhost:3000/items?category=commercial');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
}
getData();

let container = document.querySelector('#mob_con')

let append = (data)=>{
    container.innerHTML=null;
    for(let i =0; i<21*z; i++){
        let div=document.createElement('div');
        div.setAttribute('id', 'mob_divs');

        let img = document.createElement('img');
        img.src = data[i].image;
        let img_div = document.createElement('div');
        img_div.setAttribute('class', 'img_div')

        let heart = document.createElement('div');
        heart.setAttribute('class', 'heart')
        heart.innerHTML=`<i class="fa-regular fa-heart"></i>`

        img_div.append(img,heart)

        let price = document.createElement('h2');

        price.innerHTML = `₹ <span>${data[i].price}</span>`
        price.style.margin = '10px'

        let brand = document.createElement('p');
        brand.setAttribute('class', 'brand_p')
        brand.innerText = data[i].brands;

        let add_div = document.createElement('div');
        add_div.setAttribute('class', 'address_div');

        let address = document.createElement('p');
        address.innerText = data[i].location;

        let date = document.createElement('p');
        date.innerText = data[i].date;

        add_div.append(address,date);

        div.append(img_div,price,brand,add_div)
        // div.style.border="2px solid red"
        div.addEventListener('click',function(){
           
                localStorage.setItem('product_detail',JSON.stringify(data[i]));
                window.location.href = '../product/product.html'
        });
        container.append(div);
        
    }
    
    let load_more=document.createElement('button');
    load_more.innerText='Load More'
    load_more.setAttribute('id','load_btn')
    container.append(load_more)

    load_more.addEventListener('click',function(){
        z++;
        getData();
    })
}

// **********location-filters************

document.querySelector('#loc_utt').addEventListener('click',async function(){
    try{
        let res = await fetch('http://localhost:3000/items?category=commercial&location=Uttarakhand');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_bihar').addEventListener('click',async function(){
    try{
        let res = await fetch('http://localhost:3000/items?category=commercial&location=Bihar');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_jh').addEventListener('click',async function(){
    try{
        let res = await fetch('http://localhost:3000/items?category=commercial&location=Jharkhand');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_dl').addEventListener('click',async function(){
    try{
        let res = await fetch('http://localhost:3000/items?category=commercial&location=Delhi');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_kl').addEventListener('click',async function(){
    try{
        let res = await fetch('http://localhost:3000/items?category=commercial&location=Kerala');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_ga').addEventListener('click',async function(){
    try{
        let res = await fetch('http://localhost:3000/items?category=commercial&location=Goa');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_in').addEventListener('click',async function(){
    try{
        let res = await fetch('http://localhost:3000/items?category=commercial');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

// ************Budget-Filter************

let slider_price = document.querySelector('#price_range');
slider_price.onchange = function(){
    filterPrice();
}

let filterPrice = () =>{
    document.querySelector('#max_bud').innerText=(slider_price.value);
}

document.querySelector('#apply_price').addEventListener('click', async function(){
    let res = await fetch('http://localhost:3000/items?category=commercial');
    let data = await res.json();

    console.log(data);
    let filter_data=data.filter(function(el){
       return +(el.price) <= +(slider_price.value);
    })
    console.log(filter_data);
    console.log(slider_price.value);
    // if(slider_price.value<)
    append(filter_data);

})

// sidebar===============>

let choose_head = document.querySelector('.choose_head');
let choose_price_range = document.querySelector('.choose_price_range');
let dusra = document.querySelector('.dusra');

choose_head.addEventListener('click',function(){
    choose_price_range.style.display = (choose_price_range.style.display == 'none') ? 'flex' : 'none';
    dusra.style.display = (dusra.style.display == 'none') ? 'block' : 'none';
    document.getElementById('up').classList.toggle('spin')
})

let choose_head2 = document.querySelector('.choose_head2');
let choose_price_range2 = document.querySelector('.choose_price_range2');
let dusra2 = document.querySelector('.dusra2');

choose_head2.addEventListener('click',function(){
    choose_price_range2.style.display = (choose_price_range2.style.display == 'none') ? 'flex' : 'none';
    dusra2.style.display = (dusra2.style.display == 'none') ? 'block' : 'none';
    document.getElementById('up2').classList.toggle('spin')
})
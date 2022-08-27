let data = JSON.parse(localStorage.getItem('product_detail'));
console.log(data);

let image_container = document.querySelector('#img_con6')

let img = document.createElement('img');
img.src = data.image;
image_container.append(img);

let brand =document.querySelector('#brand_name6');

if(data.brand.includes('oneplus')||data.brand.includes('one plus')||data.brand.includes('Oneplus')||data.brand.includes('OnePlus')||data.brand.includes('One plus')){
    brand.innerText = 'OnePlus'
}else if(data.brand.includes('iphone')||data.brand.includes('Iphone')||data.brand.includes('iPhone')||data.brand.includes('I phone')||data.brand.includes('i phone')||data.brand.includes('I Phone')||data.brand.includes('apple')||data.brand.includes('Apple')){
    brand.innerText = 'Apple'
}else if(data.brand.includes('oppo')||data.brand.includes('Oppo')){
    brand.innerText = 'Oppo'
}else if(data.brand.includes('vivo')||data.brand.includes('Vivo')){
    brand.innerText = 'Vivo'
}else if(data.brand.includes('mi')||data.brand.includes('Mi')){
    brand.innerText = 'Mi'
}else{
    brand.innerText = 'Samsung';
}

let desc = document.querySelector('#prod_desc');
desc.innerText = data.brand;

let price = document.querySelector('#price6');
price.innerText = data.price;

let price_desc = document.querySelector('#price_desc6');
price_desc.innerText=`${data.years} yrs old ${data.brand}`;
let loc = document.querySelector('#loc6');
loc.innerText = data.address

let date = document.querySelector('#date6');
date.innerText = data.date;
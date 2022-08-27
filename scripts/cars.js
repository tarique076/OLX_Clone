localStorage.setItem('category', 'car')

// let cat_expand = document.querySelector('.cat_expand');
// let loc_expand = document.querySelector('.loc_expand');
// let bud_expand = document.querySelector('.budget_expand');
// let brand_expand = document.querySelector('.brand_expand');

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
document.getElementById('catttt_toggle').addEventListener('click',()=>{
    hide_brand.style.display = (hide_brand.style.display == 'none') ? 'block' : 'none';
    document.getElementById('catttt').classList.toggle('spin')
})
let z=1;

let getData = async () =>{
    try{
        let res = await fetch(' https://myserverolx.herokuapp.com/items?category=car');
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
        div.addEventListener('click', function(){
            localStorage.setItem('product_detail', JSON.stringify(data[i]));
            window.location.href='product.html'
        })

        let img = document.createElement('img');
        img.src = data[i].image;

        let img_div = document.createElement('div');
        img_div.setAttribute('class', 'img_div')

        let heart = document.createElement('div');
        heart.setAttribute('class', 'heart')
        heart.innerHTML=`<i class="fa-regular fa-heart"></i>`

        img_div.append(img,heart)

        let price = document.createElement('h3');
        price.innerHTML = `₹ <span>${data[i].price}</span>`

        let brand = document.createElement('p');
        brand.setAttribute('class', 'brand_p')
        brand.innerText = data[i].brand;

        let add_div = document.createElement('div');
        add_div.setAttribute('class', 'address_div');

        let address = document.createElement('p');
        address.innerText = data[i].location;

        let date = document.createElement('p');
        date.innerText = data[i].date;

        add_div.append(address,date);

        div.append(img_div,price,brand,add_div)
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

// function load_more(){
//     z=z++;
//     console.log('mnjkk');
//     getData();
// }

// **********location-filters************

document.querySelector('#loc_utt').addEventListener('click',async function(){
    try{
        let res = await fetch('https://myserverolx.herokuapp.com/items?category=car&location=Uttarakhand');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_bihar').addEventListener('click',async function(){
    try{
        let res = await fetch('https://myserverolx.herokuapp.com/items?category=car&location=Bihar');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_jh').addEventListener('click',async function(){
    try{
        let res = await fetch('https://myserverolx.herokuapp.com/items?category=car&location=Jharkhand');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_dl').addEventListener('click',async function(){
    try{
        let res = await fetch('https://myserverolx.herokuapp.com/items?category=car&location=Delhi');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_kl').addEventListener('click',async function(){
    try{
        let res = await fetch('https://myserverolx.herokuapp.com/items?category=car&location=Kerala');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_ga').addEventListener('click',async function(){
    try{
        let res = await fetch('https://myserverolx.herokuapp.com/items?category=car&location=Goa');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_in').addEventListener('click',async function(){
    try{
        let res = await fetch('https://myserverolx.herokuapp.com/items?category=car');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});
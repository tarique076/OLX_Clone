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
        let res = await fetch('https://myserverolx.herokuapp.com/items?category=mobile');
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

// **********location-filters************

document.querySelector('#loc_utt').addEventListener('click',async function(){
    try{
        let res = await fetch('https://myserverolx.herokuapp.com/items?category=mobile&location=Uttarakhand');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_bihar').addEventListener('click',async function(){
    try{
        let res = await fetch('https://myserverolx.herokuapp.com/items?category=mobile&location=Bihar');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_jh').addEventListener('click',async function(){
    try{
        let res = await fetch('https://myserverolx.herokuapp.com/items?category=mobile&location=Jharkhand');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_dl').addEventListener('click',async function(){
    try{
        let res = await fetch('https://myserverolx.herokuapp.com/items?category=mobile&location=Delhi');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_kl').addEventListener('click',async function(){
    try{
        let res = await fetch('https://myserverolx.herokuapp.com/items?category=mobile&location=Kerala');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_ga').addEventListener('click',async function(){
    try{
        let res = await fetch('https://myserverolx.herokuapp.com/items?category=mobile&location=Goa');
        let data = await res.json();

        console.log(data);
        append(data);

    }catch(err){
        console.log(err)
    }
});

document.querySelector('#loc_in').addEventListener('click',async function(){
    try{
        let res = await fetch('https://myserverolx.herokuapp.com/items?category=mobile');
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
    let res = await fetch('https://myserverolx.herokuapp.com/items?category=mobile');
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

// **************brand-filter*****************
// let check=1;

document.querySelector('#iphone').addEventListener('click', async function(){
    // check++;
    // if(check==1){
    //     window.location.reload();
    // }
    // document.querySelector('#iphone').style.backgroundColor='black';
    // document.querySelector('#iphone').innerHTML='<i class="fa-solid fa-check"></i>';
    // document.querySelector('#iphone').style.color='white';
    let res = await fetch('https://myserverolx.herokuapp.com/items?category=mobile');
    let data = await res.json();

    console.log(data);
    let filter_data = data.filter(function(el){
        return el.brand.includes('iPhone')||el.brand.includes('Iphone')||el.brand.includes('I Phone') || el.brand.includes('IPHONE')
    })
    console.log(filter_data);
    append(filter_data);
    check=1;
});

document.querySelector('#samsung').addEventListener('click', async function(){
    let res = await fetch('https://myserverolx.herokuapp.com/items?category=mobile');
    let data = await res.json();

    console.log(data);
    let filter_data = data.filter(function(el){
        return el.brand.includes('samsung')||el.brand.includes('Samsung')||el.brand.includes('SAMSUNG');
    })
    console.log(filter_data);
    append(filter_data);
});

document.querySelector('#mi').addEventListener('click', async function(){
    let res = await fetch('https://myserverolx.herokuapp.com/items?category=mobile');
    let data = await res.json();

    console.log(data);
    let filter_data = data.filter(function(el){
        return el.brand.includes('mi')||el.brand.includes('Mi')||el.brand.includes('Redmi')||el.brand.includes('REDMI')||el.brand.includes('MI');
    })
    console.log(filter_data);
    append(filter_data);
});

document.querySelector('#vivo').addEventListener('click', async function(){
    let res = await fetch('https://myserverolx.herokuapp.com/items?category=mobile');
    let data = await res.json();

    console.log(data);
    let filter_data = data.filter(function(el){
        return el.brand.includes('vivo')||el.brand.includes('VIVO')||el.brand.includes('Vivo');
    })
    console.log(filter_data);
    append(filter_data);
});

document.querySelector('#oppo').addEventListener('click', async function(){
    let res = await fetch('https://myserverolx.herokuapp.com/items?category=mobile');
    let data = await res.json();

    console.log(data);
    let filter_data = data.filter(function(el){
        return el.brand.includes('oppo')||el.brand.includes('Oppo')||el.brand.includes('OPPO');
    })
    console.log(filter_data);
    append(filter_data);
});

document.querySelector('#oneplus').addEventListener('click', async function(){
    let res = await fetch('https://myserverolx.herokuapp.com/items?category=mobile');
    let data = await res.json();

    console.log(data);
    let filter_data = data.filter(function(el){
        return el.brand.includes('oneplus')||el.brand.includes('Oneplus')||el.brand.includes('OnePlus')|| el.brand.includes('one plus')||el.brand.includes('One plus')||el.brand.includes('One Plus');
    })
    console.log(filter_data);
    append(filter_data);
});
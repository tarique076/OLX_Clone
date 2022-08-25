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
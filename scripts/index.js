// *********************************advertise*******************
let add_img=document.querySelector(".add_img")
let add_icon=document.getElementById("add_icon")

add_icon.addEventListener("click",()=>{
    add_img.style="display:none"

})

//********************slider-********************************** */
var right=1;
var left=4;

function show(){
    for(let i=right;i<=left;i++){
        document.getElementById("c"+i).style.display="inline-block"
    }
    
}
function moveright(){
    if(right<=4 && left<=7){
        document.getElementById("c"+right).style.display="none";
    left+=1;
    right+=1;
    for(let i=right;i<=left;i++){
        document.getElementById("c"+i).style.display="inline-block"
    }
    }
    else{
        retuen
    }

}
function moveleft(){
    if(right>1&&left>=5){
        document.getElementById("c"+left).style.display="none";
    left-=1;
    right-=1;
    for(let i=right;i<=left;i++){
        document.getElementById("c"+i).style.display="inline-block"
    }
    }
    else{
        return
    }

}

//*******************fresh**********************
let data=[
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/xhuoxcv255ct3-IN/image;s=300x600;q=60",
        price:"₹ 13,15,000",  
        km:"2017-46,986 km",
        modal:"Kia Seltos,HTK Plus G",
        location:"Anna Nagar, Chennai",
        date:"Today"
    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/qtepxdjat5zm1-IN/image;s=300x600;q=60",
        price:"₹ 65,000",  
        km:"2015 - 35,000 km",
        modal:"ABS RS 200",
        location:"Mumbai, Maharashtra",
        date:"Today"


    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/saeic89tedyi3-IN/image;s=300x600;q=60",
        price:"₹ 20,00,000",  
        km:"2 Bds - 2 Ba - 900 ft2",
        modal:"2bhk flat only in 20 lacs",
        location:"Ludhiana, Punjab",
        date:"Jul 30"


    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/tz3mbj8jaj3g3-IN/image;s=300x600;q=60",
        price:"₹ 6,000",  
        km:"1 Bds - 1 Ba - 600 ft2",
        modal:"1 Kitchen Rs.3000 And 1 Hall",
        location:"Hinganghat, Maharashtra",
        date:"Today"


    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/wuhycxrkbkip-IN/image;s=300x600;q=60",
        price:"₹ 60,50,00,396",
        km:"4+ Bds - 4+ Ba - 8000 ft2",
        modal:"House for sale at perambur",
        location:"Perambur, Chennai, Tamil Nadu",
        date:"Aug 22",
    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/4ba4vo0m7ad4-IN/image;s=300x600;q=60",
        price:"₹ 10,00,000",  
        km:"3 Bds - 2 Ba - 1127 ft2",
        modal:"Near parvathi nagar bus stand",
        location:"Madhavaram, Chennai",
        date:"Today"


    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/doqudjcnz5p82-IN/image;s=300x600;q=60",
        price:"₹ 650",  
        km:"Kids keyboard piano",
        modal:"Small piano for kids",
        location:"Purasawalkam, Chennai",
        date:"Today"


    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/tdxuqzk3k0la1-IN/image;s=300x600;q=60",
        price:"₹ 8,45,396",
        km:"2017-46,986 km",
        modal:"Honda City2015-2017",
        location:"DLF City Phase 1, Gurgaon",
        date:"Jul 22",


    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/vxz6h5dshpki2-IN/image;s=300x600;q=60",
        price:"₹ 4,000",
        km:"Girls Item",
        modal:"Lehenga choli",
        location:"Chennai, Tamil Nadu",
        date:"Jul 22",
    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/j434mh4iymah3-IN/image;s=300x600;q=60",
        price:"₹ 4,500",  
        km:"Furniture",
        modal:"Solid wooden Day bed",
        location:"Kilpauk, Chennai,",
        date:"Today"


    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/ykq8nrt6qx78-IN/image;s=300x600;q=60",
        price:"₹ 7,500",  
        km:"Gym",
        modal:"Tried mill",
        location:"Chennai, Tamil Nadu",
        date:"Jul 30"


    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/n5bouwp5acc22-IN/image;s=300x600;q=60",
        price:"₹ 25,000",  
        km:"Furniture",
        modal:"Dining table",
        location:"Chennai, Tamil Nadu",
        date:"Today"


    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/hrxk8vn652hj2-IN/image;s=300x600;q=60",
        price:"₹ 43,00,000",
        km:"2 Bds - 2 Ba - 1300 ft2",
        modal:"Duplex house sale",
        location:"Madhavaram, Chennai, Tamil Nadu",
        date:"Aug 22",
    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/0g837ctn9vmq1-IN/image;s=300x600;q=60",
        price:"₹ 10,900",  
        km:"Electronics Accessories",
        modal:"New NC 40 inch smart LED TV",
        location:"Korukkpet, Chennai",
        date:"Jul 28"


    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/5d61ziizzsl6-IN/image;s=300x600;q=60",
        price:"₹ 5,00,000",  
        km:"2014-39000.0 KM",
        modal:"Hyundai I20,Sportz 1.2 BS-IV",
        location:"Ludhiana, Punjab",
        date:"Jul 30"


    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/6i13o5s31r0d1-IN/image;s=300x600;q=60",
        price:"₹ 12,000",  
        km:"2 Bds - 2 Ba - 800 ft2",
        modal:"1 Kitchen Rs.3000 And 1 Hall",
        location:"Parrys Broadway, Chennai",
        date:"Today"


    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/29xs8otwkk4h2-IN/image;s=300x600;q=60",
        price:"₹ 4,999",
        km:"Electronics Accessories",
        modal:"Sony Led Tv New Unboxed",
        location:"Perambur, Chennai",
        date:"Aug 22",
    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/pd52aduprvcq-IN/image;s=300x600;q=60",
        price:"₹ 16,000",  
        km:"Mobile Accessories",
        modal:"Vivo 21e 5gmobile 8gpram",
        location:"Kolathur Sri Laxmi Nagar,",
        date:"Today"


    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/saeic89tedyi3-IN/image;s=300x600;q=60",
        price:"₹ 20,00,000",  
        km:"2 Bds - 2 Ba - 900 ft2",
        modal:"2bhk flat only in 20 lacs",
        location:"Ludhiana, Punjab",
        date:"Jul 30"


    },
    {
        image:"https://apollo-singapore.akamaized.net/v1/files/19jfgq4da9113-IN/image;s=300x600;q=60",
        price:"₹ 22,00,000",  
        km:"2 Bds - 2 Ba - 800 ft2",
        modal:"22 Lakhs Villas nr Station",
        location:"Parrys Broadway, Chennai",
        date:"Today"


    },
];
// for(var i=0;i<data.length;i++){
    function append(data){
        data.forEach(el=> {
            let div=document.createElement("div");
            div.addEventListener("click",function(){
                xyz(el)
         
                 })
           
            let image=document.createElement("img")
            image.setAttribute("src",el.image)
        
            let price=document.createElement("h2")
            price.innerText=el.price;
        
            let km=document.createElement("p")
            km.innerText=el.km;
        
            let modal=document.createElement("h5");
            modal.innerText=el.modal;
        
            let location=document.createElement("span")
            location.innerText=el.location;
            let date=document.createElement("strong")
            date.innerText=el.date
        
            div.append(image,price,km,modal,location,date)
           
        
            document.querySelector("#fresh_bottom").append(div)
            
        });

    }
    append(data)

let xyz =(e)=> {
    console.log(e)
localStorage.setItem('home_data',JSON.stringify(e))
}

//******************************load more function******************************
let load_more_id=document.getElementById("load_more_id")
let loadmore_productid=document.getElementById("loadmore_productid")

load_more_id.addEventListener("click",()=>{
    loadmore_productid.style="display:block";
    load_more_id.style="display:none"
});
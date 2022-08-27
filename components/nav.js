
function nav(){
    let e = document.getElementById('nav_location_location');
    let loc_input = document.getElementById('location')
    let language = document.getElementById('language_div')
    let header_categories_data = document.getElementById('header_categories_data')
    
    document.getElementById('nav_location').addEventListener('click',()=>{
        e.style.display = (e.style.display == 'block') ? 'none' : 'block';
        down.classList.toggle('down_spin')
        nav_location_input.style.border = '2px solid #8aebdec3'
    })
    
    
    document.getElementById('language').addEventListener('click',()=>{
        language.style.display = (language.style.display == 'block') ? 'none' : 'block';
        down2.classList.toggle('down_spin')
    })
    
    
    document.getElementById('header_categories').addEventListener('click',()=>{
        header_categories_data.style.display = (header_categories_data.style.display == 'flex') ? 'none' : 'flex';
        down3.classList.toggle('down_spin')
    })
    
    
    
    
    // for location division input field value//
    let loc = document.querySelectorAll('.loc')
    loc.forEach((el)=>{
        el.addEventListener('click',() => {
            loc_input.value = el.innerText;
            let locc = loc_input.value 
            locationData(locc)
        })
    })
    
    
    
    ////location input///////
    
    // document.getElementById('location').addEventListener('search',()=>{
    //     locationData()
    // })

    loc_input.oninput = ()=>{
        locationData()
    }
    let locationData = async(loc_input) => {
        try{
            loc_input = document.getElementById('location').value
    
            let res = await fetch(`http://localhost:3000/items?location=${loc_input}`);
            let data = await res.json();
    
            console.log(data);
            appendData(data);
    
        }catch(error){
            console.log('error:',error)
        }
    }
    
    
    
    /////// search input//////
    
    // document.getElementById('inputtt').addEventListener('search',()=>{
    //     searchData()
    // })
    // let searchData = async() => {
    //     try{
    //         let query = document.getElementById('inputtt').value
    
    //         let res = await fetch(`http://localhost:3000/items?q=${query}`);
    //         let data = await res.json();
    
    //         console.log(data);
    //         appendData(data);
    
    //     }catch(error){
    //         console.log('error:',error)
    //     }
    // }
    
    
    document.getElementById('inputtt').addEventListener('search',()=>{
    
        let query = document.getElementById('inputtt').value
        console.log(query)
        if(query == 'car'){
            window.location.href = '../carspage/cars.html'
        }else if(query == ''){
            window.location.href =  'mobile.html'
        }else if(query == ''){
            window.location.href =  'mobile.html'
        }else if(query == ''){
            window.location.href =  'mobile.html'
        }else if(query == ''){
            window.location.href =  'mobile.html'
        }
    })
    
    
    
    document.getElementById('nav_login').addEventListener('click', ()=>{
        document.getElementById("myNav").style.display = 'block'
        document.getElementById('enter_with').style.display = 'block'
      })
      
      /* Close when someone clicks on the "x" symbol inside the overlay */
       let close = document.querySelectorAll('.closebtn')
       close.forEach((el)=>{
        el.addEventListener('click', ()=>{
            document.getElementById("myNav").style.display = "none";
            number.value = ''
             document.getElementById('enter_button').style.backgroundColor = ''
       })
      })
    
      document.getElementById('Continue_with_Phone').addEventListener('click',()=> {
        document.getElementById('enter_with').style.display = 'none'
      })
    
    
      let back = document.querySelectorAll('.enter_back_arrow')
       back.forEach((el)=>{
        el.addEventListener('click', ()=>{
            document.getElementById('enter_with').style.display = 'block'
            document.getElementById('enter_phnno').style.display = 'block'
        })
      })
    
    
    let number = document.getElementById('enter_input');
    number.oninput = function (){
        enter_input()
    }
     let enter_input = ()=>{
        if(number.value.length == 10){
            document.getElementById('enter_button').style.backgroundColor = '#0e313e'
        }else{
            document.getElementById('enter_button').style.backgroundColor = ''
        }
      }
    
      document.getElementById('enter_button').addEventListener('click',()=>{
        document.getElementById('enter_otp_edit').innerText = `We sent a 4-digit code to +91${number.value}`
        document.getElementById('enter_phnno').style.display = 'none'
      })
    
    
    
      let otp1 = document.getElementById('enter_otp1');
      let otp2 = document.getElementById('enter_otp2');
      let otp3 = document.getElementById('enter_otp3');
      let otp4 = document.getElementById('enter_otp4');
    
      otp4.oninput = ()=> {
        checkotp()
      }
    
      let checkotp = ()=> {
        console.log('not vaeriy')
        if(otp1.value == '1' && otp2.value == '2' && otp3.value == '3' && otp4.value == '4' ){
            document.getElementById("myNav").style.display = "none";
            otp1.value = ''
            otp2.value = ''
            otp3.value = ''
            otp4.value = ''
            localStorage.setItem('login',JSON.stringify(true));
            login() 
    
          }else{
            document.getElementById('wrong_otp').innerText = 'Incorrect OTP'
            setTimeout(()=>{
                document.getElementById('enter_phnno').style.display = 'block'
            },2000)
            
          }
      }
     
      function login() {
        let login = JSON.parse(localStorage.getItem('login'))
        if(login == true){
            document.getElementById('nav_login').style.display = 'none'
            document.getElementById('profile').style.display = 'flex'
            document.getElementById('profile').style.alignItems = 'center'
        }
      }
    }
//hiding and toggling of location division//

  export default nav;

 










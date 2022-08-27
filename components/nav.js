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
    
    let category = localStorage.getItem('category')
    loc_input.oninput = ()=>{
        locationData(loc_input.value)
    }
    let locationData = async(query) => {
        try{
            // loc_input = document.getElementById('location').value
    
            let res = await fetch(`https://myserverolx.herokuapp.com/items?location=${query}&category=${category}`);
            let data = await res.json();
    
            console.log(data);
            append(data);
            console.log(append)
    
        }catch(error){
            console.log('error:',error)
        }
    }

    
    
    document.getElementById('inputtt').addEventListener('search',()=>{
    
        let query = document.getElementById('inputtt').value
        console.log(query)
        if(query == 'car'){
            window.location.href = 'cars.html'
        }else if(query == 'mobile'){
            window.location.href =  'mobiles.html'
        }else if(query == 'scooter'){
            window.location.href =  'scooters.html'
        }else if(query == 'house'){
            window.location.href =  'house.html'
        }else if(query == 'bike'){
            window.location.href =  'bikes.html'
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
    
      let profile= {
        url:'https://pre00.deviantart.net/67de/th/pre/i/2013/005/7/9/circle_profile_by_pdogkasper-d5qkroq.png'
     } 

     let login = JSON.parse(localStorage.getItem('login'))
    function check(){ 
        if(login !== null ){
            console.log(login)
            login_append()
        }
    } check()

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

            localStorage.setItem('login',JSON.stringify(profile));
            login_append()
           
          }else{
            document.getElementById('wrong_otp').innerText = 'Incorrect OTP'
            setTimeout(()=>{
                document.getElementById('enter_phnno').style.display = 'block'
            },2000)
            
          }
      }

      function login_append(){
        document.getElementById('nav_login').style.display = 'none'
        document.getElementById('profile').style.display = 'flex'
        document.getElementById('profile').style.alignItems = 'center'
        let login_profile = document.getElementById('login_profile')
        login_profile.src = profile.url;
        // window.location.onload()
     }
     
}
    

  export default nav 
  










let navbar = () => {
    return `
    <div id="navbar">
        <!--logo -->
        <div class="olx_logo"><a href="index.html"><img src="./style/img/olx_logo.png" alt=""></a></div>
        <!-- location -->
        <div id="nav_location">
            <div id="nav_location_input">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" id="location" placeholder="Search city, Area or Loc...">
                <i id="down" class="fa-solid fa-chevron-down"></i>
            </div>
            <div id="nav_location_location">
                <div class="loc"><i class="fa-solid fa-location-dot"></i>Bihar</div>
                <div class="loc"><i class="fa-solid fa-location-dot"></i>Jharkhand</div>
                <div class="loc"><i class="fa-solid fa-location-dot"></i>Delhi</div>
                <div class="loc"><i class="fa-solid fa-location-dot"></i>Odisha</div>
                <div class="loc"><i class="fa-solid fa-location-dot"></i>Goa</div>
                <div class="loc"><i class="fa-solid fa-location-dot"></i>Uttarakhand</div>
            </div>
        </div>

        <!-- search -->

        <div id="search" >
            <input id="inputtt" type="search" placeholder="Find Cars, Mobile Phones and more...">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <!-- language -->
        <div id="language">
            <div>ENGLISH<i id="down2" class="fa-solid fa-chevron-down"></i></div>
            <div id="language_div">
                <h3 id="english">English <i  class="fa-solid fa-check"></i></h3>
                <h3 id="hindi">हिन्दी</h3>
            </div>
        </div>

        <!-- login -->
        <div id="nav_login"><h3>Login</h3></div>
        <div id="myNav" class="overlay">
            <!-- Overlay content -->
            <div id="enter_with" class="overlay-content">
                 <!-- Button to close the overlay navigation -->
                <a href="javascript:void(0)" class="closebtn" id="close">&times;</a>
                <div id="slideshow"><img src="./style/img/Screenshot (135).png" alt=""></div>
                <button id="Continue_with_Phone"><i class="fa-solid fa-mobile-screen"></i>Continue with Phone</button>
                <button><i class="fa-brands fa-google"></i>Continue with Google</button>
                <p id="p">OR</p>
                <a href="">Login with Email</a>
                <p id="p1">All your personal details are safe with us. </p>
                <p id="p2">If you continue, you are accepting <span>OLX Terms and Conditions and Privacy Policy</span> </p>
            </div>


            <div id="enter_phnno" class="overlay-content">
                <div class="enter_back">
                    <i class="fa-solid fa-arrow-left enter_back_arrow"></i>
                    <a href="javascript:void(0)" class="closebtn" id="close">&times;</a>
                </div>
                <div class="olx_logo"><img src="./style/img/olx_logo.png" alt=""></div>
                <h1>Enter Your Phone Number</h1>
                <input id="enter_input" minlength="10" type="tel" placeholder="+91  |  Phone Number">
                <button id="enter_button">NEXT</button>
                <p id="p3">Your contact number is never shared with external parties nor do we use it to spam you in any way.</p>
            </div>

            
            <div id="enter_otp" class="overlay-content">
                <div class="enter_back">
                    <i class="fa-solid fa-arrow-left enter_back_arrow"></i>
                </div>
                <div class="olx_logo"><img src="./style/img/olx_logo.png" alt=""></div>
                <h1>Enter Verification code</h1>
                <div id="enter_otp_div">
                    <p id='enter_otp_edit'></p>
                    <i class="fa-regular fa-pen-to-square"></i>
                </div>
                <div id="enter_otp_input">
                    <input id="enter_otp1" maxlength="1" type='tel' placeholder='_'>
                    <input id="enter_otp2" maxlength="1" type='tel' placeholder='_'>
                    <input id="enter_otp3" maxlength="1" type='tel' placeholder='_'>
                    <input id="enter_otp4" maxlength="1" type='tel' placeholder='_'>
                </div>
                <p id="wrong_otp" style="color: red;"></p>
                <p id="p4">Resend code by SMS</p>
                <p id="p5">Resend code by Call</p>
            </div>
        </div>  
        <div id="profile">
            <i  class="fa-regular fa-comment"></i>
            <i  class="fa-regular fa-bell"></i>
            <img id='login_profile' src="" alt="">
            <i class="fa-solid fa-chevron-down"></i>
        </div>


        <!-- sell -->
        <div id="nav_sell">
            <button><i class="fa-solid fa-plus"></i><h3>SELL</h3></button>
        </div>
    </div>

    <!-- header start -->
    <div id="home_page_header">
        <div id="header_categories">
            <h3>ALL CATEGORIES<i id="down3" class="fa-solid fa-chevron-down"></i></h3>
            <!-- dropdown div -->

            <div id="header_categories_data">
                <div id="categories_div1">
                    <div>
                        <h3><a href="cars.html"> OLX Autos (Cars)</a></h3>
                    </div>
                    <div>
                        <h3><a href="house.html">Properties</a></h3>
                        <p><a href="">For Sale: Houses & Apartments</a></p>
                        <p><a href="">For Rent: Houses & Apartments</a></p>
                        <p><a href="">Lands & Plots</a></p>
                        <p><a href="">For Rent: Shops & Offices</a></p>
                        <p><a href="">For Sale: Shops & Offices</a></p>
                        <p><a href="">PG & Guest Houses</a></p>
                    </div>
                    <div>
                        <h3><a href="mobiles.html">Mobiles</a></h3>
                        <p><a href="mobiles.html">Mobiles Phones</a></p>
                        <p><a href="">Accessories</a></p>
                        <p><a href="mobiles.html">Tablets</a></p>
                    </div>
                </div>

                <div id="categories_div2">
                    <div>
                        <h3><a href="">Jobs</a></h3>
                        <p><a href="">Data entry & Back office</a></p>
                        <p><a href="">Sales & Marketing</a></p>
                        <p><a href="">BPO & Telecaller</a></p>
                        <p><a href="">Driver</a></p>
                        <p><a href="">Office Assistant</a></p>
                        <p><a href="">Delivery & Collection</a></p>
                        <p><a href="">Teacher</a></p>
                        <p><a href="">Cook</a></p>
                        <p><a href="">Receptionist & Front office</a></p>
                        <p><a href="">Operator & Technician</a></p>
                        <p><a href="">IT Engineer & Developer</a></p>
                       <p><a href="">Hotel & Travel Executive</a></p> 
                       <p> <a href="">Accountant</a></p>
                        <p><a href="">Designer</a></p>
                        <p><a href="">Other Jobs</a></p>
                    </div>
                    <div>
                        <h3><a href="bikes.html">Bikes</a></h3>
                        <p><a href="">Motorcycles</a></p>
                        <p><a href="scooters.html">Scooters</a></p>
                        <p><a href="">Spare Parts</a></p>
                        <p><a href="">Bicycles</a></p>
                    </div>           
                </div>

                <div id="categories_div3">
                    <div>
                       <h3><a href="">Electronics & Appliances</a></h3> 
                        <p><a href=""> TVs, Video - Audio</a></p>
                        <p><a href=""> Kitchen & Other Appliances</a></p>
                        <p><a href="">Computers & Laptops</a> </p>
                        <p><a href="">Cameras & Lenses</a> </p>
                        <p><a href="">Games & Entertainment</a></p>
                        <p><a href="">Fridges</a></p> 
                        <p><a href="">Computer Accessories</a></p>
                        <p><a href="">Hard Disks, Printers & Monitors</a></p>
                        <p><a href="">ACs</a></p>
                        <p><a href="">Washing Machines</a></p> 
                    </div>
                    <div>
                       <h3><a href="commercial.html">Commercial Vehicles & Spares</a></h3> 
                       <p><a href="">Commercial & Other Vehicles</a> </p>
                       <p><a href="">Spare Parts</a></p> 
                    </div>
                    <div>
                       <h3><a href="">Furniture</a></h3> 
                       <p><a href="">Sofa & Dining</a></p> 
                       <p><a href="">Beds & Wardrobes</a></p>
                       <p><a href="">Home Decor & Garden</a> </p>
                       <p><a href="">Kids Furniture</a> </p>
                       <p><a href="">Other Household Items</a> </p>
                    </div>
                </div>

                <div id="categories_div4">
                    <div>
                        <h3><a href="">Fashion</a></h3>
                        <p><a href="">Men</a> </p>
                        <p><a href="">Women</a></p> 
                        <p><a href="">Kids</a></p> 
                    </div>
                    <div>
                       <h3><a href="">Books, Sports & Hobbies</a></h3> 
                        <p><a href="">Books</a></p> 
                        <p><a href="">Gym & Fitness</a></p> 
                        <p><a href="">Musical Instruments</a></p> 
                        <p><a href="">Sports Equipment</a></p> 
                        <p><a href="">Other Hobbies</a></p> 
                    </div>
                    <div>
                        <h3><a href="">Pets</a></h3>
                        <p><a href="">Fishes & Aquarium</a></p> 
                        <p><a href="">Pet Food & Accessories</a></p> 
                        <p><a href="">Dogs</a></p> 
                        <p><a href="">Other Pets</a></p> 
                    </div>
                    <div>
                        <h3><a href="">Services</a></h3>
                        <p><a href="">Electronics & Computer</a></p> 
                        <p><a href="">Education & Classes</a></p> 
                        <p><a href="">Drivers & Taxi</a></p> 
                        <p><a href="">Health & Beauty</a></p> 
                        <p><a href=""> Other Services</a></p>
                    </div>

                </div>
            </div>
        </div>
        <a href="cars.html">Cars</a>
        <a href="bikes.html"> Motorcycles</a>
        <a href="mobiles.html"> Mobile Phones</a>
        <a href="house.html"> For Sale: Houses & Apartments</a>
        <a href="scooters.html">Scooters</a>
        <a href="commercial.html"> Commercial & Other Vehicles</a>
        <a href="house.html"> For Rent: Houses & Apartments</a>   
    </div>`
}

export default navbar;
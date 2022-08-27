function navbar(){
    return `
    <!--logo -->
    <div id="olx_logo"><img src="./img/olx_logo.png" alt=""></div>
    <!-- location -->
    <div id="nav_location">
        <div id="nav_location_input">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input id="location" placeholder="Search city, Area or Loc...">
            <i id="down" class="fa-solid fa-chevron-down"></i>
        </div>
        <div id="nav_location_location">
            <div class="loc"><i class="fa-solid fa-location-dot"></i>India</div>
            <div class="loc"><i class="fa-solid fa-location-dot"></i>Mumbai</div>
            <div class="loc"><i class="fa-solid fa-location-dot"></i>Delhi</div>
            <div class="loc"><i class="fa-solid fa-location-dot"></i>Kerala</div>
            <div class="loc"><i class="fa-solid fa-location-dot"></i>Goa</div>
        </div>
    </div>

    <!-- search -->

    <div id="search" >
        <input type="search" placeholder="Find Cars, Mobile Phones and more...">
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
    
    <!-- sell -->
    <div id="nav_sell">
        <button><i class="fa-solid fa-plus"></i><h3>SELL</h3></button>
    </div>
</div>

<!-- header start -->
<div id="add_footer">`
}

export {navbar};
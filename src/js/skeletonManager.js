class navBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <header>

              <!-- Mobile Navigation Bar-->
              <div id="mySidenav" class="sidenav">
                <button onclick="closeNav()" class="closebtn">&times;</button>

                <!--<div class="dropdown">
                      <button onclick="openCC()" class="dropbtn10">Credit Cards</button>
                      <div id="myCC1" class="dropdown-content">
                          <a href="/src/Credit_Card/Amex/">American Express</a>
                          <a href="/src/Credit_Card/BoA/">Bank of America</a>
                          <a href="/src/Credit_Card/C1/">Capital One</a>
                          <a href="/src/Credit_Card/Chase/">Chase</a>
                          <a href="/src/Credit_Card/Citi/">Citi</a>
                          <a href="/src/Credit_Card/USBank/">US Bank</a>
                          <a href="/src/Credit_Card/WF/">Wells Fargo</a>
                          <a href="/src/Credit_Card/Other/">Other</a>
                      </div>
                  </div> -->

                <div class="dropdown">
                    <button onclick="openAirline()" class="dropbtn11">Airlines</button>
                    <div id="myAirline1" class="dropdown-content">
                          <!-- <a href="/src/Airlines/Air_Canada_Guide/">Air Canada</a>-->
                          <!-- <a href="/src/Airlines/Air_France_KLM_Guide">Air France/KLM</a>-->
                          <!-- <a href="/src/Airlines/Alaska_Airlines_Guide/">Alaska</a>-->
                          <!-- <a href="/src/Airlines/American_Airlines_Guide/">American</a>-->
                          <a href="/src/Airlines/Delta_Airlines_Guide/">Delta</a>
                          <!-- <a href="/src/Airlines/Frontier_Airlines_Guide/">Frontier</a>-->
                          <!-- <a href="/src/Airlines/Qatar_Airways_Guide/">Qatar Airways</a>-->
                          <!-- <a href="/src/Airlines/Southwest_Airlines_Guide/">Southwest</a>-->
                          <!-- <a href="/src/Airlines/Starlux_Airlines_Guide/">Starlux</a>-->
                          <!-- <a href="/src/Airlines/United_Airlines_Guide/">United</a>-->
                      </div>
                  </div>

                <div class="dropdown">
                  <button onclick="openHotel()" class="dropbtn12">Hotels</button>
                  <div id="myHotel1" class="dropdown-content">
                      <!-- <a href="/src/Hotels/Choice/">Choice</a>-->
                      <a href="/src/Hotels/Hilton_Guide/">Hilton</a>
                      <!-- <a href="/src/Hotels/Hyatt_Guide/">Hyatt</a>-->
                      <!-- <a href="/src/Hotels/IHG_Guide/">IHG</a>-->
                      <!-- <a href="/src/Hotels/Marriott_Guide/">Marriott</a>-->
                      <!-- <a href="/src/Hotels/Wyndham_Guide/">Wyndham</a>-->
                  </div>
                </div>

                <div class="dropdown">
                    <button onclick="openSS()" class="dropbtn13">Sweet Spots</button>
                    <div id="mySS1" class="dropdown-content">
                      <a href="/src/Sweet_Spots/Domestic/">Domestic</a>
                    </div>
                </div>
                  

                  <!-- <a href="/src/Tierlist/">Tierlist</a> -->
                  <!-- <a href="/src/Travel_Review/">Travel Reviews</a> -->
                  <!-- <a href="/src/News_Archive/">News Archive</a> -->
              </div>

              <div class="sidenavbtn">
                <!-- Use any element to open the sidenav -->
                <span style="font-size:15vw;cursor:pointer" onclick="openNav()">&#9776;</span>
              </div>





              <!-- Desktop Navigation Bar-->
              <a href="/">  
                  <img src="/src/assets/LogoNav.png" alt="Worldly Express">
              </a>
              <nav>
                  <!--<div class="dropdown">
                      <button onclick="myFunction()" class="dropbtn">Credit Cards</button>
                      <div class="dropdown-content">
                          <a href="/src/Credit_Card/Amex/">American Express</a>
                          <a href="/src/Credit_Card/BoA/">Bank of America</a>
                          <a href="/src/Credit_Card/C1/">Capital One</a>
                          <a href="/src/Credit_Card/Chase/">Chase</a>
                          <a href="/src/Credit_Card/Citi/">Citi</a>
                          <a href="/src/Credit_Card/USBank/">US Bank</a>
                          <a href="/src/Credit_Card/WF/">Wells Fargo</a>
                          <a href="/src/Credit_Card/Other/">Other</a>
                      </div>
                  </div> -->
          
                  <div class="dropdown">
                      <button onclick="myFunction1()" class="dropbtn1">Airlines</button>
                      <div id="myAirline" class="dropdown-content">
                          <!-- <a href="/src/Airlines/Air_Canada_Guide/">Air Canada</a>-->
                          <!-- <a href="/src/Airlines/Air_France_KLM_Guide">Air France/KLM</a>-->
                          <!-- <a href="/src/Airlines/Alaska_Airlines_Guide/">Alaska</a>-->
                          <!-- <a href="/src/Airlines/American_Airlines_Guide/">American</a>-->
                          <a href="/src/Airlines/Delta_Airlines_Guide/">Delta</a>
                          <!-- <a href="/src/Airlines/Frontier_Airlines_Guide/">Frontier</a>-->
                          <!-- <a href="/src/Airlines/Qatar_Airways_Guide/">Qatar Airways</a>-->
                          <!-- <a href="/src/Airlines/Southwest_Airlines_Guide/">Southwest</a>-->
                          <!-- <a href="/src/Airlines/Starlux_Airlines_Guide/">Starlux</a>-->
                          <!-- <a href="/src/Airlines/United_Airlines_Guide/">United</a>-->
                      </div>
                  </div>
                  
                  <div class="dropdown">
                      <button onclick="myFunction2()" class="dropbtn2">Hotels</button>
                      <div id="myHotel" class="dropdown-content">
                          <!-- <a href="/src/Hotels/Choice/">Choice</a>-->
                          <a href="/src/Hotels/Hilton_Guide/">Hilton</a>
                          <!-- <a href="/src/Hotels/Hyatt_Guide/">Hyatt</a>-->
                          <!-- <a href="/src/Hotels/IHG_Guide/">IHG</a>-->
                          <!-- <a href="/src/Hotels/Marriott_Guide/">Marriott</a>-->
                          <!-- <a href="/src/Hotels/Wyndham_Guide/">Wyndham</a>-->
                      </div>
                  </div>

                  <div class="dropdown">
                      <button onclick="myFunction3()" class="dropbtn3">Sweet Spots</button>
                      <div id="mySS" class="dropdown-content">
                          <a href="/src/Sweet_Spots/Domestic/">Domestic</a>
                      </div>
                  </div>
                  <!-- <a href="/src/Tierlist">Tierlist</a> -->
                  <!-- <a href="/src/Travel_Review">Travel Reviews</a> -->
                  <!-- <a href="/src/Concierge">Concierge</a> -->
              </nav>
            </header>
        `;
  }
}

// class footBar extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `
//         <footer>
//             <p>© 2023 Worldly Express. All rights reserved.</p>
//         </footer>
//         `
//     }
// }

customElements.define("nav-bar", navBar);

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openAirline() {
  document.getElementById("myAirline1").classList.toggle("show");
}

function openHotel() {
  document.getElementById("myHotel1").classList.toggle("show");
}

function openSS() {
  document.getElementById("mySS1").classList.toggle("show");
}

function myFunction1() {
  document.getElementById("myAirline").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myHotel").classList.toggle("show");
}

function myFunction3() {
  document.getElementById("mySS").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn1")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn2")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn3")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

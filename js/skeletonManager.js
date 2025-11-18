class navBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <header>
            <!-- Mobile Navigation Bar-->
            <div id="mySidenav" class="sidenav">
              <ul>
                <li>
                  <button onclick="closeNav()" class="closebtn">&times;</button>
                </li>

                <!-- <li>
                  <button onclick=toggleSubMenu(this) class="dropbtn">Credit Cards</button>
                  <ul class="sub-menu">
                    <div>
                      <a href="/Credit_Card/Amex/">American Express</a>
                      <a href="/Credit_Card/BoA/">Bank of America</a>
                      <a href="/Credit_Card/C1/">Capital One</a>
                      <a href="/Credit_Card/Chase/">Chase</a>
                      <a href="/Credit_Card/Citi/">Citi</a>
                      <a href="/Credit_Card/USBank/">US Bank</a>
                      <a href="/Credit_Card/WF/">Wells Fargo</a>
                      <a href="/Credit_Card/Other/">Other</a>
                    </div>
                  </ul>
                </li> -->

                <li>
                  <button onclick=toggleSubMenu(this) class="dropbtn">Airlines</button>
                  <ul class="sub-menu">
                    <div>
                      <!-- <a href="/Airlines/Air_Canada_Guide/">Air Canada</a>-->
                      <!-- <a href="/Airlines/Air_France_KLM_Guide">Air France/KLM</a>-->
                      <!-- <a href="/Airlines/Alaska_Airlines_Guide/">Alaska</a>-->
                      <!-- <a href="/Airlines/American_Airlines_Guide/">American</a>-->
                      <li><a href="/Airlines/Delta_Airlines_Guide/">Delta</a></li>
                      <!-- <a href="/Airlines/Frontier_Airlines_Guide/">Frontier</a>-->
                      <!-- <a href="/Airlines/Qatar_Airways_Guide/">Qatar Airways</a>-->
                      <!-- <a href="/Airlines/Southwest_Airlines_Guide/">Southwest</a>-->
                      <!-- <a href="/Airlines/Starlux_Airlines_Guide/">Starlux</a>-->
                      <li><a href="/Airlines/United_Airlines_Guide/">United</a></li>
                    </div>
                  </ul>
                </li>

                <li>
                  <button onclick=toggleSubMenu(this) class="dropbtn">Hotels</button>
                  <ul class="sub-menu">
                    <div>
                      <!-- <a href="/Hotels/Choice/">Choice</a>-->
                      <li><a href="/Hotels/Hilton_Guide/">Hilton</a></li>
                      <!-- <a href="/Hotels/Hyatt_Guide/">Hyatt</a>-->
                      <!-- <a href="/Hotels/IHG_Guide/">IHG</a>-->
                      <!-- <a href="/Hotels/Marriott_Guide/">Marriott</a>-->
                      <!-- <a href="/Hotels/Wyndham_Guide/">Wyndham</a>-->
                    </div>
                  </ul>
                </li>

                <li>
                  <button onclick=toggleSubMenu(this) class="dropbtn">Sweet Spots</button>
                  <ul class="sub-menu">
                    <div>
                      <li><a href="/Sweet_Spots/Domestic/">Domestic</a></li>
                    </div>
                  </ul>
                </li>
                <li>
                  <!-- <a href="/Tierlist/">Tierlist</a> -->
                </li>
                <li>
                  <!-- <a href="/Travel_Review/">Travel Reviews</a> -->
                </li>
                <li>
                  <!-- <a href="/News_Archive/">News Archive</a> -->
                </li>
              </ul>
            </div>

            <div class="sidenavbtn">
              <!-- Use any element to open the sidenav -->
              <span style="font-size:15vw;cursor:pointer" onclick="openNav()">&#9776;</span>
            </div>


            <!-- Desktop Navigation Bar-->
            <a href="/">
              <img src="/assets/LogoNav.webp" alt="Worldly Express">
            </a>
            <nav>
              <!--<div class="dropdown">
                  <button onclick="myFunction()" class="dropbtn">Credit Cards</button>
                  <div class="dropdown-content">
                      <a href="/Credit_Card/Amex/">American Express</a>
                      <a href="/Credit_Card/BoA/">Bank of America</a>
                      <a href="/Credit_Card/C1/">Capital One</a>
                      <a href="/Credit_Card/Chase/">Chase</a>
                      <a href="/Credit_Card/Citi/">Citi</a>
                      <a href="/Credit_Card/USBank/">US Bank</a>
                      <a href="/Credit_Card/WF/">Wells Fargo</a>
                      <a href="/Credit_Card/Other/">Other</a>
                  </div>
              </div> -->

              <div class="dropdown">
                <button onclick="myFunction1()" class="dropbtn">Airlines</button>
                <div id="myAirline" class="dropdown-content">
                  <!-- <a href="/Airlines/Air_Canada_Guide/">Air Canada</a>-->
                  <!-- <a href="/Airlines/Air_France_KLM_Guide">Air France/KLM</a>-->
                  <!-- <a href="/Airlines/Alaska_Airlines_Guide/">Alaska</a>-->
                  <!-- <a href="/Airlines/American_Airlines_Guide/">American</a>-->
                  <a href="/Airlines/Delta_Airlines_Guide/">Delta</a>
                  <!-- <a href="/Airlines/Frontier_Airlines_Guide/">Frontier</a>-->
                  <!-- <a href="/Airlines/Qatar_Airways_Guide/">Qatar Airways</a>-->
                  <!-- <a href="/Airlines/Southwest_Airlines_Guide/">Southwest</a>-->
                  <!-- <a href="/Airlines/Starlux_Airlines_Guide/">Starlux</a>-->
                  <li><a href="/Airlines/United_Airlines_Guide/">United</a></li>
                </div>
              </div>

              <div class="dropdown">
                <button onclick="myFunction2()" class="dropbtn">Hotels</button>
                <div id="myHotel" class="dropdown-content">
                  <!-- <a href="/Hotels/Choice/">Choice</a>-->
                  <a href="/Hotels/Hilton_Guide/">Hilton</a>
                  <!-- <a href="/Hotels/Hyatt_Guide/">Hyatt</a>-->
                  <!-- <a href="/Hotels/IHG_Guide/">IHG</a>-->
                  <!-- <a href="/Hotels/Marriott_Guide/">Marriott</a>-->
                  <!-- <a href="/Hotels/Wyndham_Guide/">Wyndham</a>-->
                </div>
              </div>

              <div class="dropdown">
                <button onclick="myFunction3()" class="dropbtn">Sweet Spots</button>
                <div id="mySS" class="dropdown-content">
                  <a href="/Sweet_Spots/Domestic/">Domestic</a>
                </div>
              </div>
              <!-- <a href="/Tierlist">Tierlist</a> -->
              <!-- <a href="/Travel_Review">Travel Reviews</a> -->
              <!-- <a href="/Concierge">Concierge</a> -->
            </nav>
          </header>
        `;
  }
}

customElements.define("nav-bar", navBar);

const sidenav = document.getElementById('sidenav')

function toggleSubMenu(button){

  button.nextElementSibling.classList.toggle('show')
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
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



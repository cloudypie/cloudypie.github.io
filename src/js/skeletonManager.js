class navBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <header>
              <div id="mySidenav" class="sidenav">
                <div id="myAirline1" class="dropdown-content">
                    <button onclick="closeAirline()" class="closebtn">&lArr;</button>
                    <!-- <a href="/src/html/Airlines/AS.html">Alaska</a>-->
                    <!-- <a href="/src/html/Airlines/AA.html">American</a>-->
                    <a href="/src/html/Airlines/DL.html">Delta</a>
                    <!-- <a href="/src/html/Airlines/UA.html">United</a>-->
                    <!-- <a href="/src/html/Airlines/AC.html">Air Canada</a>-->
                    <!-- <a href="/src/html/Airlines/IAG.html">IAG/Avios</a>-->
                    <!-- <a href="/src/html/Airlines/AFKLM.html">Air France/KLM</a>-->
                    <!-- <a href="/src/html/Airlines/ANA.html">ANA</a>-->
                </div>

                <div id="myHotel1" class="dropdown-content">
                    <button onclick="closeHotel()" class="closebtn">&lArr;</button>
                    <!-- <a href="/src/html/Hotels/Choice.html">Choice</a>-->
                    <a href="/src/html/Hotels/Hilton.html">Hilton</a>
                    <!-- <a href="/src/html/Hotels/Hyatt.html">Hyatt</a>-->
                    <!-- <a href="/src/html/Hotels/IHG.html">IHG</a>-->
                    <!-- <a href="/src/html/Hotels/Marriott.html">Marriott</a>-->
                    <!-- <a href="/src/html/Hotels/Wyndham.html">Wyndham</a>-->
                </div>

                <div id="mySS1" class="dropdown-content">
                    <button onclick="closeSS()" class="closebtn">&lArr;</button>
                    <!-- <a href="/src/html/Hotels/Choice.html">Choice</a>-->
                    <a href="/src/html/FS/Domestic_SS/Domestic_SS.html">Domestic</a>
                    <!-- <a href="/src/html/Hotels/Hyatt.html">Hyatt</a>-->
                    <!-- <a href="/src/html/Hotels/IHG.html">IHG</a>-->
                    <!-- <a href="/src/html/Hotels/Marriott.html">Marriott</a>-->
                    <!-- <a href="/src/html/Hotels/Wyndham.html">Wyndham</a>-->
                </div>

                <button onclick="closeNav()" class="closebtn">&times;</button>

                <button onclick="openAirline()" class="dropbtn">Airlines</button>

                <button onclick="openHotel()" class="dropbtn">Hotels</button>

                <button onclick="openSS()" class="dropbtn">Sweet Spots</button>
                  

                <!--<div class="dropdown">
                      <div class="dropbtn">Credit Cards</div>
                      <div class="dropdown-content">
                          <a href="/src/html/Credit_Card/Amex.html">American Express</a>
                          <a href="/src/html/Credit_Card/BoA.html">Bank of America</a>
                          <a href="/src/html/Credit_Card/C1.html">Capital One</a>
                          <a href="/src/html/Credit_Card/Chase.html">Chase</a>
                          <a href="/src/html/Credit_Card/Citi.html">Citi</a>
                          <a href="/src/html/Credit_Card/USBank.html">US Bank</a>
                          <a href="/src/html/Credit_Card/WF.html">Wells Fargo</a>
                          <a href="/src/html/Credit_Card/Other.html">Other</a>
                      </div>
                  </div> -->
                  


                  
                  <!-- <a href="/src/html/Tierlist.html">Tierlist</a> -->
                  <!-- <a href="/src/html/Travel_Review.html">Travel Reviews</a> -->
                  <!-- <a href="/src/html/News_Archive.html">News Archive</a> -->
              </div>

              <div class="sidenavbtn">
                <!-- Use any element to open the sidenav -->
                <span style="font-size:15vw;cursor:pointer" onclick="openNav()">&#9776;</span>
              </div>

              <a href="/index.html">  
                  <img src="/src/assets/LogoNav.png" alt="Worldly Express">
              </a>
              <nav>
                  <!--<div class="dropdown">
                      <button onclick="myFunction()" class="dropbtn">Credit Cards</button>
                      <div class="dropdown-content">
                          <a href="/src/html/Credit_Card/Amex.html">American Express</a>
                          <a href="/src/html/Credit_Card/BoA.html">Bank of America</a>
                          <a href="/src/html/Credit_Card/C1.html">Capital One</a>
                          <a href="/src/html/Credit_Card/Chase.html">Chase</a>
                          <a href="/src/html/Credit_Card/Citi.html">Citi</a>
                          <a href="/src/html/Credit_Card/USBank.html">US Bank</a>
                          <a href="/src/html/Credit_Card/WF.html">Wells Fargo</a>
                          <a href="/src/html/Credit_Card/Other.html">Other</a>
                      </div>
                  </div> -->
          
                  
                  <div class="dropdown">
                      <button onclick="myFunction1()" class="dropbtn1">Airlines</button>
                      <div class="dropdown-content">
                          <!-- <a href="/src/html/Airlines/AS.html">Alaska</a>-->
                          <!-- <a href="/src/html/Airlines/AA.html">American</a>-->
                          <a href="/src/html/Airlines/DL.html">Delta</a>
                          <!-- <a href="/src/html/Airlines/UA.html">United</a>-->
                          <!-- <a href="/src/html/Airlines/AC.html">Air Canada</a>-->
                          <!-- <a href="/src/html/Airlines/IAG.html">IAG/Avios</a>-->
                          <!-- <a href="/src/html/Airlines/AFKLM.html">Air France/KLM</a>-->
                          <!-- <a href="/src/html/Airlines/ANA.html">ANA</a>-->
                      </div>
                  </div>
                  
                  <div class="dropdown">
                      <button onclick="myFunction2()" class="dropbtn2">Hotels</button>
                      <div class="dropdown-content">
                          <!-- <a href="/src/html/Hotels/Choice.html">Choice</a>-->
                          <a href="/src/html/Hotels/Hilton.html">Hilton</a>
                          <!-- <a href="/src/html/Hotels/Hyatt.html">Hyatt</a>-->
                          <!-- <a href="/src/html/Hotels/IHG.html">IHG</a>-->
                          <!-- <a href="/src/html/Hotels/Marriott.html">Marriott</a>-->
                          <!-- <a href="/src/html/Hotels/Wyndham.html">Wyndham</a>-->
                      </div>
                  </div>

                  <div class="dropdown">
                      <button onclick="myFunction3()" class="dropbtn3">Sweet Spots</button>
                      <div class="dropdown-content">
                          <!-- <a href="/src/html/Hotels/Choice.html">Choice</a>-->
                          <a href="/src/html/FS/Domestic_SS/Domestic_SS.html">Domestic</a>
                          <!-- <a href="/src/html/Hotels/Hyatt.html">Hyatt</a>-->
                          <!-- <a href="/src/html/Hotels/IHG.html">IHG</a>-->
                          <!-- <a href="/src/html/Hotels/Marriott.html">Marriott</a>-->
                          <!-- <a href="/src/html/Hotels/Wyndham.html">Wyndham</a>-->
                      </div>
                  </div>
                  <!-- <a href="/src/html/Tierlist.html">Tierlist</a> -->
                  <!-- <a href="/src/html/Travel_Review.html">Travel Reviews</a> -->
                  <!-- <a href="/src/html/News_Archive.html">News Archive</a> -->
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

function closeAirline() {
  document.getElementById("myAirline1").classList.toggle("show");
}

function openHotel() {
  document.getElementById("myHotel1").classList.toggle("show");
}

function closeHotel() {
  document.getElementById("myHotel1").classList.toggle("show");
}

function openSS() {
  document.getElementById("mySS1").classList.toggle("show");
}

function closeSS() {
  document.getElementById("mySS1").classList.toggle("show");
}


function myFunction() {
  document.getElementById("myAirline").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myHotel").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("mySS").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn3')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
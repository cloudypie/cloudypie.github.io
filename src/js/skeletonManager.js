class navBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <nav>
                <a href="/index.html">  
                    <img src="/src/assets/LogoNav.png" alt="Worldly Express" width="100" height=auto>
                </a>
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
        
                
                <div class="dropdown">
                    <div class="dropbtn">Airlines</div>
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
                    <div class="dropbtn">Hotels</div>
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
                    <div class="dropbtn">Flight SweetSpots</div>
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
window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          document.querySelector(`.toc li a[href="#${id}"]`).parentElement.classList.add('active');
        } else {
          document.querySelector(`.toc li a[href="#${id}"]`).parentElement.classList.remove('active');
        }
      });
    });
  
    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    
  });

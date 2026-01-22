class footBar extends HTMLElement{connectedCallback(){
  this.innerHTML=`

  <div class="containerBottom">
      <h2>Sign Up for Updates!</h2>
        <form action="https://api.web3forms.com/submit" method="POST" class = "contactleft">
          <input type="hidden" name="access_key" value="438fae80-70e9-43dd-bc0b-9adf25ed77dc">

          <!-- Form Inputs. Each input must have a name="" attribute -->
          <input type="text" name="name" placeholder = "Name" required>
          <input type="email" name="email" placeholder = "Email" required>
          <textarea name="message" placeholder = "Message (Optional)" ></textarea>

          <!-- Honeypot Spam Protection -->
          <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

          <!-- Custom Confirmation / Success Page -->
          <!-- <input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html"> -->

          <button type="submit">Submit Form</button>
        </form>
  </div>

  <div class="hidelinks">
      <a id="amexgcc" href="#">a</a>
      <a id="amexbpcc" href="#">a</a>
      <a id="amexdelbcc" href="#">a</a>
      <a id="amexdelgcc" href="#">a</a>
      <a id="amexdelpcc" href="#">a</a>
      <a id="amexdelrcc" href="#">a</a>
      <a id="amexdelbgcc" href="#">a</a>
      <a id="amexdelbpcc" href="#">a</a>
      <a id="amexdelbrcc" href="#">a</a>
      <a id="amexhilhcc" href="#">a</a>
      <a id="amexhilscc" href="#">a</a>
      <a id="amexhilacc" href="#">a</a>
      <a id="amexhilbcc" href="#">a</a>
      <a id="amexmarbecc" href="#">a</a>
      <a id="amexmarbrcc" href="#">a</a>
      <a id="cspcc" href="#">a</a>
      <a id="cfucc" href="#">a</a>
      <a id="cipcc" href="#">a</a>
      <a id="cungcc" href="#">a</a>
      <a id="cunecc" href="#">a</a>
      <a id="cunbcc" href="#">a</a>
      <a id="cunqcc" href="#">a</a>
      <a id="cunccc" href="#">a</a>
      <a id="cuncbcc" href="#">a</a>
      <a id="cihgtcc" href="#">a</a>
      <a id="cihgpcc" href="#">a</a>
      <a id="cihgbcc" href="#">a</a>
      <a id="biltbcc" href="#">a</a>
      <a id="biltocc" href="#">a</a>
      <a id="biltpcc" href="#">a</a>
  </div>
    `}}
    
customElements.define("foot-bar",footBar);

document.getElementById("amexgcc").href=amexgccv;
document.getElementById("amexbpcc").href=amexbpccv;
document.getElementById("amexdelbcc").href=amexdelbccv;
document.getElementById("amexdelgcc").href=amexdelgccv;
document.getElementById("amexdelpcc").href=amexdelpccv;
document.getElementById("amexdelrcc").href=amexdelrccv;
document.getElementById("amexdelbgcc").href=amexdelbgccv;
document.getElementById("amexdelbpcc").href=amexdelbpccv;
document.getElementById("amexdelbrcc").href=amexdelbrccv;
document.getElementById("amexhilhcc").href=amexhilhccv;
document.getElementById("amexhilscc").href=amexhilsccv;
document.getElementById("amexhilacc").href=amexhilaccv;
document.getElementById("amexhilbcc").href=amexhilbccv;
document.getElementById("amexmarbecc").href=amexmarbeccv;
document.getElementById("amexmarbrcc").href=amexmarbrccv;
document.getElementById("cspcc").href=cspccv;
document.getElementById("cfucc").href=cfucc;
document.getElementById("cipcc").href=cipcc;
document.getElementById("cungcc").href=cungcc;
document.getElementById("cunecc").href=cunecc;
document.getElementById("cunbcc").href=cunbcc;
document.getElementById("cunqcc").href=cunqcc;
document.getElementById("cunccc").href=cunccc;
document.getElementById("cuncbcc").href=cuncbcc;
document.getElementById("cihgtcc").href=cihgtcc;
document.getElementById("cihgpcc").href=cihgpcc;
document.getElementById("cihgbcc").href=cihgbcc;
document.getElementById("biltbcc").href=biltbcc;
document.getElementById("biltocc").href=biltocc;
document.getElementById("biltpcc").href=biltpcc;



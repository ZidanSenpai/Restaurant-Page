import samosaImg from './Images/samosa.jpg';
import biryaniImg from './Images/biriyani.jpg';
import dosaImg from './Images/dosa.webp';
const menuContent = document.createElement("div");
menuContent.innerHTML = `
  <h2>Flavors of India</h2>
  <p>Mumbai is a melting pot, as our food can attest. Take a bite and savor la vie délicieuse!</p>
  <div id="menu-items">
    <div class="samosa">
      <div class="food-image">
        <img src="${samosaImg}" alt="Samosa">
      </div>
      <div class="food-about">Mouthwatering Appetisers</div>
    </div>
    <div class="biryani">
      <div class="food-image">
        <img src="${biryaniImg}" alt="Biryani">
      </div>
      <div class="food-about">Delicious Mains</div>
    </div>
    <div class="dosa">
      <div class="food-image">
        <img src="${dosaImg}" alt="Dosa">
      </div>
      <div class="food-about">Wholesome Indians</div>
    </div>
  </div>
`;

export default menuContent;
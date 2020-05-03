export default class CreatePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="create" class="page">
        <form class="create-form">
        <h1>Tilføj øl</h1>
        <input type="text" placeholder="Navn" id="beer-name" required>
        <input type="number" placeholder="alkohol%" id="beer-alcohol" required>
        <input placeholder="Type" id="beer-type" required>
        <input placeholder="IBU" id="beer-IBU" required>
        <input placeholder="kort beskrivelse" id="short-desc" required>
        <input placeholder="lang beskrivelse" id="long-desc" required>
        <input type="url" id="beer-img" placeholder="Indtast url for billede" required>  

        <button id="createBeer" onclick="create()">Tilføj Øl</button>

        </form>
      </section>
    `;
  }
}
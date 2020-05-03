export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="home" class="page">
          <h1>Øl</h1>
          <div class="search-bar-container">
          <input id="search-bar" type="search" placeholder="Søg efter navn" onkeyup="search(this.value)">
          </div>
          <div class="filter">
          <h3>Filter</h3>
          <button onclick="showAll()">Vis alle øl</button>
          <h4>Alkoholprocent</h4>
          <button onclick="sortByMuchAlcohol()">Over 5.6%</button>
          <button onclick="sortByMiddleAlcohol()">Mellem 4% og 5.5</button>
          <button onclick="sortByLowAlcohol()">Under 4%</button>

          </div>
          <article class="beer-overview"></article>

      </section>
    `;
  }
}
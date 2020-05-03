export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class=>
        <a href="#home">Oversigt</a>
        <a href="#create">Tilføj</a>
      </nav>
    `;
  }
}
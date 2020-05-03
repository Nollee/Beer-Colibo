export default class DetailPage {

    constructor() {
        this.template();
      }
    
      template() {
        document.querySelector('#app').innerHTML += /* html */ `
        <section id="detail-view" class="page">
        </section>
        `;
}
}
import spaService from "./spa.js"
import loaderService from "./loader.js";


class BeerService {
    constructor(){
        this.beerRef = _db.collection("beers");
        this.beers = [];
        this._selectedBeer;
        this.spaService = spaService;
        this.ratingRef = _db.collection("ratings");
    }

    init() { 
        // initialisere alle øllene
        this.beerRef.onSnapshot(snapshotData => {
            this.beers = []; 
            snapshotData.forEach(doc => {
                let beer = doc.data();
                beer.id = doc.id;
                this.beers.push(beer);  
            });
            console.log(this.beers); 
             this.appendBeers(this.beers);  
        });
        loaderService.show(false);

    }

    // ===================== Tilføjer en ny øl =========================================
 
    create() {
        let nameInput = document.querySelector("#beer-name");
        let alcoholInput = document.querySelector("#beer-alcohol");
        let typeInput = document.querySelector("#beer-type");
        let IBUInput = document.querySelector("#beer-IBU");
        let imgInput = document.querySelector("#beer-img");
        let shortInput = document.querySelector("#short-desc");
        let longInput = document.querySelector("#long-desc");

        let newBeer = {
            name: nameInput.value,
            alcohol: alcoholInput.value,
            type: typeInput.value,
            IBU: IBUInput.value,
            img: imgInput.value,
            shortDesc: shortInput.value,
            longDesc: longInput.value,
            reviews: []
        }
        this.beerRef.add(newBeer);
        this.appendBeers(this.beers);
        this.spaService.navigateTo("home");

        // gør inputfeltene tomme igen
        let inputs = document.querySelectorAll("input")

        for(let input of inputs){
            input.value = ""
        }

    }

    // ======================= Appender alle øllene fra Firestore =============================

    appendBeers(beers) {
        let htmlTemplate = "";
        for (let beer of beers) {    
             htmlTemplate += /* html */ `
            <article class="beer-card" onclick="showDetailView('${beer.id}')">
            <img src="${beer.img}" alt="${beer.name}">
            <h2>${beer.name}</h2>
            <h4>${beer.shortDesc}</h4>
             </article>        
          `;
        } 
        document.querySelector('.beer-overview').innerHTML = htmlTemplate;
        
        console.log(beers);
      }


      // ====== kalder appendDetailView og Navigere til undersiden "detail-view" ===========
      showDetailView(beerId){
        loaderService.show(true);
        this.appendDetailView(beerId);
        this.spaService.navigateTo("detail-view");
        loaderService.show(false);
    }


    // =================== appender Detailview for udvalgte øl ===============================
    
    appendDetailView(id){
        for (let beer of this.beers) {
            if (beer.id === id) {
              this._selectedBeer = beer;
            } 
        }
        document.querySelector("#detail-view").innerHTML = /*html */ `
        <article class="detail-view">
        <div class="detail-left">
        <h3>${this._selectedBeer.longDesc}</h3>
        <div class="beer-facts-wrapper">
        <div class="beer-fact">
        <h5>Øltype</h5>
        <p>${this._selectedBeer.type}</p>
        </div>
        <div class="beer-fact">
        <h5>Alkohol%</h5>
        <p>${this._selectedBeer.alcohol}%</p>
        </div>
        <div class="beer-fact">
        <h5>IBU</h5>
        <p>${this._selectedBeer.IBU}</p>
        </div>

        </div>
        </div>
        <div class="detail-right">
        <img src="${this._selectedBeer.img}">
        <h1>${this._selectedBeer.name}</h1>
        </div>
        </article>
        
        `
    }

        // ====================== Søger efter navn på øl ==============================

        search(value) {
            let searchQuery = value.toLowerCase();
            let filteredBeers = [];  
            for (let beer of this.beers) {    
            let title = beer.name.toLowerCase();
              if (title.includes(searchQuery)) {
                filteredBeers.push(beer);
                this.appendBeers(filteredBeers);            
            } 
            
        }           
        console.log(filteredBeers);  
        }



    // =============================== Filtrering af øl baseret på alkoholprocent ==================
        
        // Alkoholprocent på over 5.6
        sortByMuchAlcohol(){
            let filteredBeers =[];
            for (let beer of this.beers){
                let alcohol = beer.alcohol;
                if(alcohol > 5.6){
                    filteredBeers.push(beer);
                    this.appendBeers(filteredBeers);            
                }
            }
        }

        // Alkoholprocent mellem 4 og 5.6
        sortByMiddleAlcohol(){
            let filteredBeers =[];
            for (let beer of this.beers){
                let alcohol = beer.alcohol;
                if(alcohol > 4 && alcohol < 5.6){
                    filteredBeers.push(beer);
                    this.appendBeers(filteredBeers);            
                }
            }
        }

        // Alkoholprocent under 4
        sortByLowAlcohol(){
            let filteredBeers =[];
            for (let beer of this.beers){
                let alcohol = beer.alcohol;
                if(alcohol < 4 ){
                    filteredBeers.push(beer);
                    this.appendBeers(filteredBeers);            
                }
            }
        }

        // Vis alle øl igen
        showAll(){
            this.appendBeers(this.beers);
        }
}


const beerService = new BeerService();
export default beerService  
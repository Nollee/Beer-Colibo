

// Pages
import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import CreatePage from "./pages/create.js";
import DetailPage from "./pages/detailview.js";

// Services
import _spaService from "./services/spa.js";
import beerService from "./services/beer.js";



// Declare and init
let navbar = new NavBar();
let homePage = new HomePage();
let createPage = new CreatePage();
let detailPage = new DetailPage();

// init services
_spaService.init();
beerService.init();


// event handlers

window.create = () => beerService.create();
window.showDetailView = (id) => beerService.showDetailView(id); 
window.sortByMuchAlcohol = () => beerService.sortByMuchAlcohol(); 
window.sortByMiddleAlcohol = () => beerService.sortByMiddleAlcohol(); 
window.sortByLowAlcohol = () => beerService.sortByLowAlcohol(); 
window.showAll = () => beerService.showAll(); 


window.search = (value) => beerService.search(value);   


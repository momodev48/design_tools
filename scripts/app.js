/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

console.info('Bonjouuuuuuuur :)');
console.log('kedis');
/* var buttons_favoris= document.querySelector(".button__favoris");

buttons_favoris.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("heeeeey");
    buttons_favoris.classList.toggle('button__favoris-checked');
  }); */

/* -------------------------------------------------------------------------------------------------- */
//section 

/* const link = document.querySelectorAll('.navbar-start a');
const section_home = document.querySelector('.section--home');

window.addEventListener('load',(e)=>{
    e.preventDefault();
    document.body.setAttribute('data-page','home');
    
});
link.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        e.preventDefault();
        const currentlink=e.currentTarget;
        console.log(currentlink); 
        let attribut=currentlink.getAttribute('href');
        const sectioncible=attribut.slice(1);
       console.log(sectioncible); 
       document.body.setAttribute('data-page',sectioncible);
    });
}); */

/* -------------------------------------------------------------------------------------------------- */
//theme
//modifier la propriété d'une valeur 

/* var colorlight= getComputedStyle(document.documentElement).getPropertyValue('--color-red');
var colordark= getComputedStyle(document.documentElement).getPropertyValue('--color-dark');
document.documentElement.style.setProperty('--color-red', colordark);
document.documentElement.style.setProperty('--color-dark', colorlight); 
  */
//afficher la propriété d'une valeur 

/* console.log("couleur" + getComputedStyle(document.documentElement)
  .getPropertyValue('--color-red'));
 */

/* -------------------------------------------------------------------------------------------------- */
//burger menu

document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0); // Check if there are any navbar burgers

  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var $target = document.getElementById(target); // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
/* Hide navigation-------------------------------------------------------------------------------------------------- */

var oldScrollY = 0;
var nav = document.querySelector(".navbar"); // le offset 

var offsetY = 200;
window.addEventListener('scroll', function (e) {
  if (oldScrollY > window.scrollY || window.scrollY < offsetY) {
    nav.classList.remove("navbar--hidden");
  } else {
    nav.classList.add("navbar--hidden");
  }

  oldScrollY = window.scrollY;
}); ////////////////////////////////////////////
////////////////////////////////////////////
///////formulaire ( module Form )///////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

/* Notification-------------------------------------------------------------------------------------------------- */

function notificationSuccess() {
  var notificationSuccess = document.getElementById("notificationSuccess");
  notificationSuccess.style.display = "block";
  setTimeout(function () {
    notificationSuccess.style.display = "none";
  }, 5000);
}
/* contribuer modal-------------------------------------------------------------------------------------------------- */


var openModal = document.querySelectorAll(".contribuer");
var modal = document.querySelector(".modal");
var closeModal = document.querySelector(".delete");
openModal.forEach(function (btn) {
  btn.addEventListener('click', function () {
    modal.classList.add("is-active");
  });
}); //const navbar = document.querySelector(".navbar-menu");

function cancelModal() {
  contributionForm.reset();
  modal.classList.remove("is-active");
  nameTool.classList.remove("is-success");
  nameTool.classList.remove("is-danger");
  errorName.classList.remove("is-danger");
  errorName.innerText = "";
  linkTool.classList.remove("is-success");
  linkTool.classList.remove("is-danger");
  errorLink.classList.remove("is-danger");
  errorLink.innerText = "";
  selectCategory.classList.remove("is-success");
  selectCategory.classList.remove("is-danger");
  errorCategory.innerText = "";
  checkboxRobot.checked = false;
  errorRobot.innerText = ""; //navbar.classList.remove('is-active');
}
/* contribution Form-------------------------------------------------------------------------------------------------- */


var contributionForm = document.getElementById("contributionForm");
var nameTool = document.getElementById("name");
var errorName = document.getElementById("errorName");
var linkTool = document.getElementById("link");
var errorLink = document.getElementById("errorLink");
var valueCategory = document.getElementById("selectedCategory");
var selectCategory = document.getElementById("selectCategory");
var errorCategory = document.getElementById("errorCategory");
var descriptionOutil = document.getElementById("description");
var checkboxRobot = document.getElementById("checkboxRobot");
var errorRobot = document.getElementById("errorRobot");
contributionForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (nameTool.value === "" || nameTool.value == null) {
    nameTool.classList.add("is-danger");
    errorName.classList.add("is-danger");
    errorName.innerText = "Veuillez saisir le nom de l'outil";
    return;
  } else if (nameTool.value != null) {
    nameTool.classList.remove("is-danger");
    nameTool.classList.add("is-success");
    errorName.classList.remove("is-danger");
    errorName.innerText = "";
  }

  if (linkTool.value === "" || linkTool.value == null) {
    linkTool.classList.add("is-danger");
    errorLink.classList.add("is-danger");
    errorLink.innerText = "Veuillez saisir le lien de l'outil";
    return;
  } else if (linkTool.value != null) {
    linkTool.classList.remove("is-danger");
    linkTool.classList.add("is-success");
    errorLink.classList.remove("is-danger");
    errorLink.innerText = "";
  }

  if (valueCategory.value == "Default") {
    selectCategory.classList.add("is-danger");
    errorCategory.classList.add("is-danger");
    errorCategory.innerText = "Veuillez choisir une catégorie";
    return;
  } else if (valueCategory.value != "Default") {
    selectCategory.classList.add("is-success");
    selectCategory.classList.remove("is-danger");
    errorCategory.innerText = "";
  }

  if (checkboxRobot.checked == false) {
    errorRobot.innerText = "Veuillez cocher la case";
    errorRobot.classList.add("is-danger");
    return;
  } else {
    cancelModal();
    notificationSuccess();
  }
});
var btn_annuler = document.getElementById("btn_annuler");
btn_annuler.addEventListener('click', function (e) {
  cancelModal();
});
closeModal.addEventListener('click', function (e) {
  cancelModal();
});
/* -------------------------------------------------------------------------------------------------- */
////////////////////////////////////////////
////////////////////////////////////////////
/////charger données ( module JSON )////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

function DisplayTools(categorie, liste) {
  ///json
  //recuperer JSON catégorie codes
  if (document.querySelector(liste)) {
    var ul = document.querySelector(liste); //console.log(liste);

    fetch('list.json').then(function (response) {
      return response.json();
    }).then(function (json) {
      //console.log(list);
      json.forEach(function (data) {
        //récuperer tous les outils de la catégorie codes
        //var categorieFiltre = "design";
        var data_id = data.id;
        var data_titre = data.titre;
        var data_description = data.description_fr;
        var data_logo = data.logo;
        var data_logoretina = data.logoretina;
        var data_categorie = data.categorie;
        var data_link = data.link; //transformer tout en minuscules et filtrer les outils

        if (data.categorie.toLowerCase() == categorie) {
          //console.log(data);
          //selectionner les ul
          //selectionner les li
          var li = document.createElement('li');
          li.classList.add('codes__el');
          li.innerHTML = "\n         <div class=\"box is-relative\">\n          <div class=\"codes__el-content\">\n              <div class=\"columns\">\n                  <div class=\"column is-3\">\n\n                      <img class=\"image image--tool has-text-centered-touch center\"\n                          src=\"".concat(data_logo, "\" alt=\"Logo de ").concat(data_titre, "\"\n                          srcset=\"").concat(data_logo, " 1x, ").concat(data_logoretina, " 2x\"> \n              \n\n                  </div>\n                  <div class=\"column is-8 \">\n                      <p class=\"subtitle is-4 has-text-centered-touch\">\n                          <strong>").concat(data_titre, "</strong>\n                      </p>\n                      <p>\n                        ").concat(data_description, "\n                      </p>\n                      <hr>\n                  </div>\n                \n              </div>\n              \n              <div class=\"columns is-flex-tablet is-multilines has-text-centered-touch has-text-left\">\n                  \n                  <div class=\"column is-3 is-offset-3 is-3-desktop is-offset-3-desktop is-2-widescreen \">\n                      <a class=\"button is-outline\" >\n                        <span class=\"button__favoris\" data-id=\"").concat(data_id, "\">\n                            <span>Favoris</span>\n                        </span>\n                      </a>\n\n                      \n\n                  </div>\n                  <div class=\"column is-0\">\n                      <a href=\"").concat(data_link, "\" target=\"_blank\" class=\"button button__link button--dark\">\n\n                          <span>D\xE9couvrir</span>\n                          <span class=\"icon\">\n                              <i class=\"fas fa-long-arrow-alt-right\"></i>\n                              <!-- <i class=\"fas fa-chevron-right\"></i> -->\n                          </span>\n                      </a>\n                  </div>\n              </div>\n            </div>\n        </div>\n         "); //ajouter les enfants li au parent ul

          ul.appendChild(li);
          /* ajouter publicité ici (dans un li) */
        } else {
          return;
        }
      });
      var triggers = document.querySelectorAll(".button__favoris");

      for (var i = 0; i < triggers.length; i++) {
        // au chargement de la page, on remet si nécessaire la class button__favoris-checked 
        if (isInFavorites(triggers[i].getAttribute("data-id"))) {
          triggers[i].classList.add("button__favoris-checked");
        } // Au click ...


        triggers[i].addEventListener("click", function (e) {
          // On récupère l'attribut data-id de l'élément qui vient d'être cliqué.
          var id = e.currentTarget.getAttribute("data-id"); // Si l'élément ne fait pas partie des favoris

          if (!isInFavorites(id)) {
            // On l'ajoute l'élément dans la liste favoris
            addFavorites(id); //console.log("id du boutton cliqué " + id);
            // ... et on lui ajoute la classe button__favoris-checked

            e.currentTarget.classList.add("button__favoris-checked");
          } else {
            // On enlève l'élément au favoris
            removeFromFavorites(id); // On lui enléve la classe button__favoris-checked

            e.currentTarget.classList.remove("button__favoris-checked");
          }
        });
      }
    });
  } else {
    return;
  }
} ////charger la liste uniquement quand ca existe 
//DisplayTools(nomCategorie,Nomliste); 
//myFavorites();


DisplayTools("codes", ".codes");
DisplayTools("design", ".design");
DisplayTools("inspiration", ".inspiration");
DisplayTools("typos", ".typographie");
DisplayTools("compression", ".compression");
DisplayTools("couleurs", ".couleurs");
DisplayTools("productivite", ".productivite");
DisplayTools("tutoriels", ".tutoriels");
DisplayTools("divers", ".divers"); //afficher les favoris dans la page favrois

if (document.querySelector(".favoris")) {
  myFavorites();
}
/* 
if(document.querySelector(".codes"))
{
  DisplayTools("codes", ".codes");
}
else if(document.querySelector(".design"))
{
  DisplayTools("design", ".design");
}
else if(document.querySelector(".inspiration"))
{
  DisplayTools("inspiration", ".inspiration");
}
else if(document.querySelector(".typographie"))
{
  DisplayTools("typos", ".typographie");
}
else if(document.querySelector(".compression"))
{
  DisplayTools("compression", ".compression");
}
else if(document.querySelector(".couleurs"))
{
  DisplayTools("couleurs", ".couleurs");
}
else if(document.querySelector(".productivite"))
{
  DisplayTools("productivite", ".productivite");
}
else if(document.querySelector(".tutoriels"))
{
  DisplayTools("tutoriels", ".tutoriels");
}
else if(document.querySelector(".divers"))
{
  DisplayTools("divers", ".divers");
}
 */

/* 
 */
////////////////////////////////////////////
////////////////////////////////////////////
/////favoris ( module localStorage )////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
// Fonction qui permet d'ajouter un el au favoris


function addFavorites(id) {
  var Favorites = getFavorites();

  if (!isInFavorites(id)) {
    Favorites.push(id);
    localStorage.setItem("Favorites", JSON.stringify(Favorites));
  }
} // Fonction qui permet d'enlever un el des favoris


function removeFromFavorites(id) {
  var Favorites = getFavorites();
  var updatedList = Favorites.filter(function (value) {
    return value != id;
  });
  localStorage.setItem("Favorites", JSON.stringify(updatedList));
} // Fonction qui permet de vérifier si un id est dans les favoris


function isInFavorites(id) {
  var Favorites = getFavorites();
  var element = Favorites.find(function (value) {
    return value == id;
  });
  return element !== undefined;
} // Retourne la liste des favoris sous la forme d'un tableau


function getFavorites() {
  var FavoritesJSON = localStorage.getItem("Favorites");
  var Favorites = [];

  if (FavoritesJSON === null) {
    localStorage.setItem("Favorites", JSON.stringify(Favorites));
  } else {
    Favorites = JSON.parse(FavoritesJSON);
  }

  return Favorites;
}

function myFavorites() {
  var listeFavoris = document.querySelector('.favoris');
  var url = 'list.json';
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.forEach(function (data) {
      //console.log(isInFavorites(data.id));
      //console.log(liste.indexOf("1"));
      if (isInFavorites(data.id)) {
        var li = document.createElement('li'); //affecter id  à li

        li.classList.add('favoris__el');
        li.setAttribute("data-id", data.id);
        li.innerHTML = "\n             <div class=\"box is-relative \">\n              <div class=\"favoris__el-content\">\n                  <div class=\"columns\">\n                      <div class=\"column is-3\">\n                        \n                          <img class=\"image image--tool has-text-centered-touch center\"\n                              src=\"".concat(data.logo, "\" alt=\"Logo de ").concat(data.titre, "\"\n                              srcset=\"").concat(data.logo, " 1x, ").concat(data.logoretina, " 2x\"> \n                  \n    \n                      </div>\n                      <div class=\"column is-8 \">\n                          <p class=\"subtitle is-4 has-text-centered-touch\">\n                              <strong>").concat(data.titre, "</strong>\n                          </p>\n                          <p>\n                            ").concat(data.description_fr, "\n                          </p><hr>\n                      </div>\n                    \n                  </div>\n                  \n                  <div class=\"columns is-flex-tablet is-multilines has-text-centered-touch has-text-left\">\n                      \n                      <div class=\"column is-3 is-offset-3 is-3-desktop is-offset-3-desktop is-2-widescreen \">\n                          <a class=\"button  is-outline\" >\n                            <span class=\"button__favoris button__favoris-checked\" data-id=\"").concat(data.id, "\">\n                                <span>Favoris</span>\n                            </span>\n                          </a>\n    \n                          \n    \n                      </div>\n                      <div class=\"column is-0\">\n                          <a href=\"").concat(data.link, "\" target=\"_blank\" class=\"button button__link button--dark\">\n    \n                              <span>D\xE9couvrir</span>\n                              <span class=\"icon\">\n                                  <i class=\"fas fa-long-arrow-alt-right\"></i>\n                                  <!-- <i class=\"fas fa-chevron-right\"></i> -->\n                              </span>\n                          </a>\n                      </div>\n                  </div>\n                </div>\n            </div>\n             "); //ajouter li comme enfant pour ul

        listeFavoris.appendChild(li);
      } else {//return;
      }
    });
    var trig = document.querySelectorAll(".button__favoris");

    for (var i = 0; i < trig.length; i++) {
      // Au click ...
      trig[i].addEventListener("click", function (e) {
        //console.log(e.currentTarget);
        // On récupère l'attribut data-id de l'élément qui vient d'être cliqué.
        var id = e.currentTarget.getAttribute("data-id"); //console.log("id du boutton cliqué " + id);
        // On enlève l'élément de la liste

        removeFromFavorites(id); // On lui enléve la classe button__favoris-checked

        e.currentTarget.classList.remove("button__favoris-checked");
      });
    }
  });
}
/* window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM entièrement chargé et analysé");
   //si y'a aucun outil dans les favoris afficher un message 
    let listeFavoris = document.querySelector('.favoris');
    let emptyBlockMessage = document.querySelector('.codes__el--empty');
    let NumberChildrenlisteFavoris = parseInt(listeFavoris.getElementsByTagName("li").length);
    console.log(NumberChildrenlisteFavoris);
    if (document.querySelector('.favoris') && NumberChildrenlisteFavoris == 1) {
      emptyBlockMessage.style.display = "block";
      console.log("khawya");
    }
  
    else {
      emptyBlockMessage.style.display = "none";
      console.log("3amra");
    }
});
 */

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./src/scripts/app.js ./src/styles/app.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /mnt/c/Users/mouss/OneDrive/Bureau/Infographie DWM 2/2ème Q2/TFA/workflow + bulma 1.0/src/scripts/app.js */"./src/scripts/app.js");
module.exports = __webpack_require__(/*! /mnt/c/Users/mouss/OneDrive/Bureau/Infographie DWM 2/2ème Q2/TFA/workflow + bulma 1.0/src/styles/app.scss */"./src/styles/app.scss");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map
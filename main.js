/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ContactTab.js":
/*!**************************************!*\
  !*** ./src/components/ContactTab.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ContactTab = () => {\n  const contactTab = document.createElement(\"div\");\n  contactTab.innerHTML=\"Contact Tab\";\n  contactTab.classList.add(\"tabs-content-container\");\n\n  return { contactTab };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactTab);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/components/ContactTab.js?");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Footer = () => {\n  const footer = document.createElement(\"div\");\n  footer.classList.add(\"footer\");\n  const disclaimer = document.createElement(\"p\");\n  disclaimer.innerText =\n    \"Copyright 2021 Eduard Gavrila. Disclaimer: This is not a real restaurant!\";\n  footer.appendChild(disclaimer);\n  return { footer };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Header = () => {\n  const header = document.createElement(\"header\");\n  const title = document.createElement(\"h1\");\n  title.innerHTML = \"Sven's Eatery\";\n  title.classList.add(\"title\");\n  header.appendChild(title);\n  return { header };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/components/Header.js?");

/***/ }),

/***/ "./src/components/HomeTab.js":
/*!***********************************!*\
  !*** ./src/components/HomeTab.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst HomeTab = () => {\n  const homeTab = document.createElement(\"div\");\n  homeTab.classList.add(\"tabs-content-container\");\n\n  const title = document.createElement(\"h1\");\n  title.classList.add(\"tab-title\");\n  title.innerHTML = \"Welcome to Sven's Eatery\";\n\n  const subtitle = document.createElement(\"p\");\n  subtitle.innerText = \"The best food this part of Sweden!\";\n  subtitle.classList.add(\"home-tab-subtitle\");\n\n  const image = document.createElement(\"img\");\n  image.src = \"../../assets/home-image.jpg\";\n  image.classList.add(\"home-image\");\n\n  const openingHours = document.createElement(\"div\");\n  openingHours.innerHTML =\n    \"<p>Opening Hours: </p> <p class='info-center'>Monday-Friday : 11:00 - 23:00</p><p class='info-center'>Saturday - Sunday: 10:00 - 23.30</p>\";\n  openingHours.classList.add(\"info-right\");\n\n  const quotation = document.createElement(\"figure\");\n  quotation.classList.add(\"info-center\");\n  quotation.innerHTML = \"<blockquote cite=''><p>The best swedish food restaurant outside of Ikea!</p></blockquote> <figcaption>--Lars Andersson, <cite>Regular customer</cite> </figcaption>\"\n\n  homeTab.appendChild(title);\n  homeTab.appendChild(subtitle);\n  homeTab.appendChild(image);\n  homeTab.appendChild(openingHours);\n  homeTab.appendChild(quotation);\n\n  return { homeTab };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeTab);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/components/HomeTab.js?");

/***/ }),

/***/ "./src/components/MenuTab.js":
/*!***********************************!*\
  !*** ./src/components/MenuTab.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_menuData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/menuData */ \"./src/data/menuData.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ \"./src/components/Modal.js\");\n\n\n\nconst MenuTab = () => {\n  const menuTab = document.createElement(\"div\");\n  menuTab.classList.add(\"tabs-content-container\");\n\n  const menuTitle = document.createElement(\"h1\");\n  menuTitle.innerText =\n    \"Have a look at our delicious menu. You will definitely find something you like!\";\n  menuTitle.classList.add(\"tab-title\");\n\n  const menuContent = document.createElement(\"div\");\n  menuContent.classList.add(\"menu-content-container\");\n\n  _data_menuData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((item) => {\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n\n    const image = document.createElement(\"img\");\n    image.classList.add(\"menu-item-image\");\n    image.src = item.photo;\n\n    const title = document.createElement(\"div\");\n    title.innerHTML = item.name;\n    title.classList.add(\"menu-item-title\");\n\n    menuItem.addEventListener(\"mouseover\", () => {\n      title.classList.remove(\"hide\");\n      title.classList.add(\"show\");\n    });\n    menuItem.addEventListener(\"mouseout\", () => {\n      title.classList.remove(\"show\");\n      title.classList.add(\"hide\");\n    });\n\n    menuItem.addEventListener(\"click\", () => {\n      const card = document.createElement(\"div\");\n      card.classList.add(\"info-card\");\n\n      const lastModal = document.querySelector(\".backdrop\");\n      if (lastModal) {\n        lastModal.remove();\n      }\n\n      const cardText = document.createElement(\"p\");\n      cardText.innerText = item.description;\n      cardText.style.marginBottom = \"3rem\";\n\n      const cardImage = document.createElement(\"img\");\n      cardImage.src = item.photo;\n      cardImage.classList.add(\"card-image\");\n\n      card.appendChild(cardText);\n      card.appendChild(cardImage);\n\n      const { backdrop: modal } = (0,_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(card);\n\n      document.body.appendChild(modal);\n    });\n\n    menuItem.appendChild(image);\n    menuItem.appendChild(title);\n    menuContent.appendChild(menuItem);\n  });\n\n  const disclaimer = document.createElement(\"p\");\n  disclaimer.innerText =\n    \"For the list of alergens, please enquire at the time of order!\";\n  disclaimer.style.textAlign = \"center\";\n\n  menuTab.appendChild(menuTitle);\n  menuTab.appendChild(menuContent);\n  menuTab.appendChild(disclaimer);\n  return { menuTab };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuTab);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/components/MenuTab.js?");

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Modal = (content) => {\n  const backdrop = document.createElement(\"div\");\n  backdrop.classList.add(\"backdrop\");\n\n\n  backdrop.appendChild(content);\n  backdrop.addEventListener(\"click\", () => {\n    content.classList.add(\"hide-modal\");\n    const timer = setTimeout(() => {\n      backdrop.remove();\n    }, 500);\n  });\n  return { backdrop };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/components/Modal.js?");

/***/ }),

/***/ "./src/components/Tabs.js":
/*!********************************!*\
  !*** ./src/components/Tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MenuTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuTab */ \"./src/components/MenuTab.js\");\n/* harmony import */ var _HomeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeTab */ \"./src/components/HomeTab.js\");\n/* harmony import */ var _ContactTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactTab */ \"./src/components/ContactTab.js\");\n\n\n\n\nconst Tabs = () => {\n  let currentTab = null;\n  // const { homeTab: homeTabContent } = HomeTab();\n  // currentTab = homeTabContent;\n\n  const { menuTab: menuTabContent } = (0,_MenuTab__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  currentTab = menuTabContent;\n\n  const tabs = document.createElement(\"div\");\n  tabs.classList.add(\"tabs-container\");\n\n  const tabsHeader = document.createElement(\"div\");\n  tabsHeader.classList.add(\"tabs-header\");\n\n  const homeTab = document.createElement(\"div\");\n  const menuTab = document.createElement(\"div\");\n  const contactTab = document.createElement(\"div\");\n\n  const tabClickHandler = (e) => {\n    homeTab.classList.remove(\"active\");\n    menuTab.classList.remove(\"active\");\n    contactTab.classList.remove(\"active\");\n    e.target.classList.add(\"active\");\n  };\n\n  homeTab.classList.add(\"tab\");\n  homeTab.innerHTML = \"Home\";\n  homeTab.addEventListener(\"click\", (e) => {\n    tabClickHandler(e);\n    const { homeTab: homeTab } = (0,_HomeTab__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    currentTab.remove();\n    currentTab = homeTab;\n    tabs.appendChild(currentTab);\n  });\n\n  menuTab.classList.add(\"tab\");\n  menuTab.innerHTML = \"Menu\";\n  menuTab.addEventListener(\"click\", (e) => {\n    tabClickHandler(e);\n    const { menuTab: menuTab } = (0,_MenuTab__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    currentTab.remove();\n    currentTab = menuTab;\n    tabs.appendChild(currentTab);\n  });\n\n  contactTab.classList.add(\"tab\");\n  contactTab.innerHTML = \"Contact\";\n  contactTab.addEventListener(\"click\", (e) => {\n    tabClickHandler(e);\n    const { contactTab: contactTab } = (0,_ContactTab__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    currentTab.remove();\n    currentTab = contactTab;\n    tabs.appendChild(currentTab);\n  });\n\n  homeTab.classList.add(\"active\");\n  tabsHeader.appendChild(homeTab);\n  tabsHeader.appendChild(menuTab);\n  tabsHeader.appendChild(contactTab);\n  tabs.appendChild(tabsHeader);\n  tabs.appendChild(currentTab);\n\n  return { tabs };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/components/Tabs.js?");

/***/ }),

/***/ "./src/components/Welcome.js":
/*!***********************************!*\
  !*** ./src/components/Welcome.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Welcome = () => {\n  const welcome = document.createElement(\"div\");\n  welcome.classList.add(\"welcome-container\");\n\n  const content = document.createElement(\"div\");\n  content.classList.add(\"greeting-card\");\n\n  const subtitle = document.createElement(\"h2\");\n  subtitle.classList.add(\"subtitle\");\n  subtitle.innerHTML = \"Welcome To Sven's Eatery\";\n\n  const enterBtn = document.createElement(\"button\");\n  enterBtn.classList.add(\"btn-enter\");\n  enterBtn.innerHTML = \" COME ON IN! <i class='fas fa-arrow-right'></i>\";\n\n  const setButtonClickHandler = (handler) => {\n    enterBtn.addEventListener(\"click\", handler);\n  };\n\n  content.appendChild(subtitle);\n  content.appendChild(enterBtn);\n  welcome.appendChild(content);\n\n  return { welcome, setButtonClickHandler };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Welcome);\n\n{\n  /* <main class=\"main\">\n  <div id=\"content\" class=\"content\">\n    <h2 class=\"subtitle\">Welcome To Sven's Eatery'</h2>\n    <button class=\"btn-enter\">\n      COME ON IN! <i class=\"fas fa-arrow-right\"></i>\n    </button>\n  </div>\n</main>; */\n}\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/components/Welcome.js?");

/***/ }),

/***/ "./src/data/menuData.js":
/*!******************************!*\
  !*** ./src/data/menuData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = [\n  {\n    name: \"Köttbullar – Meatballs\",\n    photo: \"../../assets/Meatballs.jpg\",\n    description:\n      \"Mixed and fried in a generous amount of butter, it’s traditionally served with mashed potato, lingonberry jam, and brown cream sauce.\",\n  },\n  {\n    name: \"Räkmacka – Shrimp Sandwich\",\n    photo: \"../../assets/Rakmacka.jpg\",\n    description:\n      \"Räkmacka is an open-faced sandwich, generally served on rye bread. It’s topped with lettuce, mayonnaise, egg, dill, caviar, and a generous amount of shrimp.\",\n  },\n  {\n    name: \"Smulpaj – Crumble\",\n    photo: \"../../assets/Smulpaj.jpg\",\n    description:\n      \"We love to use the fruit and berries for cooking and baking. Smulpaj is a summer favorite, and it’s made with whatever berries or fruits are in season. \",\n  },\n  {\n    name: \"Ärtsoppa & Pannkakor – Pea Soup & Pancakes\",\n    photo: \"../../assets/Artsoppa.jpg\",\n    description:\n      \"The pea soup is made from dried yellow peas and pork broth, seasoned with thyme, and topped with salty pieces of pork and mustard. This is often served with a warm punsch drink.\",\n  },\n  {\n    name: \" Smörgåstårta – Swedish Sandwich Cake\",\n    photo: \"../../assets/Smorgstarta.jpg\",\n    description:\n      \"Smörgåstårta is Sweden’s number one feast meal. This is where we put everything we like on bread, in layers, and serve it as a cake.\",\n  },\n  {\n    name: \"Semla – Sweet Roll\",\n    photo: \"../../assets/Semla.jpg\",\n    description:\n      \"This pastry consists of a simple wheat bun, flavored with cardamom. The top is cut off, and it’s filled with almond paste and whipped cream. \",\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/data/menuData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Welcome */ \"./src/components/Welcome.js\");\n/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Tabs */ \"./src/components/Tabs.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer */ \"./src/components/Footer.js\");\n\n\n\n\n\nconst { header: pageHeader } = (0,_components_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst { welcome: initialWelcome, setButtonClickHandler } = (0,_components_Welcome__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst { tabs: tabs } = (0,_components_Tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst { footer: pageFooter } = (0,_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\nsetButtonClickHandler(() => {\n  initialWelcome.remove();\n  document.body.appendChild(tabs);\n});\n\ndocument.body.appendChild(pageHeader);\ndocument.body.appendChild(tabs);\ndocument.body.appendChild(pageFooter);\n//document.body.appendChild(initialWelcome);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
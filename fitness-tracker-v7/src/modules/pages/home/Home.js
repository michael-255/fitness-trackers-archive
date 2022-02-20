import HomeFragments from "./Fragments";
import HomeListeners from "./Listeners";

/**
 * Responsible for assembling the DOM elements for the Home Page
 */
const HomePage = (function() {
  const constructHomePage = function() {
    const app = document.getElementById("app");
    const frag = document.createDocumentFragment();

    const homePage = document.createElement("section");
    homePage.id = "home-page";

    homePage.appendChild(HomeFragments.getTitle());
    homePage.appendChild(HomeFragments.getRoutines());
    //homePage.appendChild(HomeFragments.getFooter());
    homePage.appendChild(HomeFragments.getNavbar());

    frag.appendChild(homePage);

    // Clear App then attach Home Page
    document.getElementById("app").innerHTML = "";
    app.appendChild(frag);

    // Load Home Page event listeners
    HomeListeners.loadEventListenersOnElement(homePage.id);
  };

  return { constructHomePage };
})();

export default HomePage;

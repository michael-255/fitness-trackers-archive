import { User } from "./classes/user";
import { getSeedData, loadEventListeners } from "./functions/helpers";
import { constructHomePage } from "./functions/dom-constructing";
import "./styles.scss";

/**
 * Main
 */
document.addEventListener("DOMContentLoaded", e => {
  let user = new User();

  // Seed user data by fetching fitness JSON data
  getSeedData(
    "https://michaeljoy255.github.io/fitness-tracker-json/fitness-data.json"
  )
    .then(data => {
      // Seed user data
      user.exercises = data.exercises;
      user.routines = data.routines;

      //console.log(user);

      constructHomePage(user.routines);

      loadEventListeners(user);
    })
    .catch(err => console.error(err));
});

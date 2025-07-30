import "./styles.css";
import homeContent from "./home.js";
import aboutContent from "./about.js";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const home = document.getElementById("home");
  const about = document.getElementById("about");

  home.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(homeContent);
  });

  about.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(aboutContent);
  });

//   content.appendChild(homeContent); 
});

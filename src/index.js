import "./styles.css";
import homeContent from "./home.js";
import aboutContent from "./about.js";
import menuContent from "./menu.js";
document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const menu = document.getElementById("menu");
  home.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(homeContent);
  });

  about.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(aboutContent);
  });
  
  menu.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(menuContent);
  });
  content.appendChild(homeContent); 
});

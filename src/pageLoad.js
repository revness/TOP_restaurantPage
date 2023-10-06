function pageSetup() {
  const content = document.querySelector("#head");
  const heading = document.createElement("h1");
  heading.textContent = "Ramen Restaurant";
  content.appendChild(heading);
  const copy = document.createElement("p");
  copy.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate?";
  content.appendChild(copy);
  const nav = document.createElement("nav");
  const home = document.createElement("a");
  const menu = document.createElement("a");
  const contact = document.createElement("a");
  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  const navbar = document.getElementById("nav");
  navbar.appendChild(nav);
}

export default pageSetup;

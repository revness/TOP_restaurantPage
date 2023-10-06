function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Tonkotsu Ramen",
      "Pork bone broth, Chashu, Ajitama, Kikurage, Scallion, Nori, Menma, Garlic oil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Shoyu Tonkotsu Ramen",
      "Soy sauce flavored pork bone broth, Chashu, Ajitama, Kikurage, Scallion, Nori, Menma, Garlic oil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Tantanmen",
      "Spicy pork bone broth, Chashu, Ajitama, Kikurage, Scallion, Nori, Menma, Garlic oil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Vegetarian Ramen",
      "Vegetable broth, Tofu, Ajitama, Kikurage, Scallion, Nori, Menma, Garlic oil"
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `images/ramen/${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;

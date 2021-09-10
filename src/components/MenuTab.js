import menuData from "../data/menuData";
import Modal from "./Modal";

const MenuTab = () => {
  const menuTab = document.createElement("div");
  menuTab.classList.add("tabs-content-container");

  const menuTitle = document.createElement("h1");
  menuTitle.innerText =
    "Have a look at our delicious menu. You will definitely find something you like!";
  menuTitle.classList.add("tab-title");

  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content-container");

  menuData.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const image = document.createElement("img");
    image.classList.add("menu-item-image");
    image.src = item.photo;

    const title = document.createElement("div");
    title.innerHTML = item.name;
    title.classList.add("menu-item-title");

    menuItem.addEventListener("mouseover", () => {
      title.classList.remove("hide");
      title.classList.add("show");
    });
    menuItem.addEventListener("mouseout", () => {
      title.classList.remove("show");
      title.classList.add("hide");
    });

    menuItem.addEventListener("click", () => {
      const card = document.createElement("div");
      card.classList.add("info-card");

      const lastModal = document.querySelector(".backdrop");
      if (lastModal) {
        lastModal.remove();
      }

      const cardText = document.createElement("p");
      cardText.innerText = item.description;
      cardText.style.marginBottom = "3rem";

      const cardImage = document.createElement("img");
      cardImage.src = item.photo;
      cardImage.classList.add("card-image");

      card.appendChild(cardText);
      card.appendChild(cardImage);

      const { backdrop: modal } = Modal(card);

      document.body.appendChild(modal);
    });

    menuItem.appendChild(image);
    menuItem.appendChild(title);
    menuContent.appendChild(menuItem);
  });

  const disclaimer = document.createElement("p");
  disclaimer.innerText =
    "For the list of alergens, please enquire at the time of order!";
  disclaimer.style.textAlign = "center";

  menuTab.appendChild(menuTitle);
  menuTab.appendChild(menuContent);
  menuTab.appendChild(disclaimer);
  return { menuTab };
};

export default MenuTab;

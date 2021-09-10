const HomeTab = () => {
  const homeTab = document.createElement("div");
  homeTab.classList.add("tabs-content-container");

  const title = document.createElement("h1");
  title.classList.add("tab-title");
  title.innerHTML = "Welcome to Sven's Eatery";

  const subtitle = document.createElement("p");
  subtitle.innerText = "The best food this part of Sweden!";
  subtitle.classList.add("home-tab-subtitle");

  const image = document.createElement("img");
  image.src = "../../assets/home-image.jpg";
  image.classList.add("home-image");

  const openingHours = document.createElement("div");
  openingHours.innerHTML =
    "<p>Opening Hours: </p> <p class='info-center'>Monday-Friday : 11:00 - 23:00</p><p class='info-center'>Saturday - Sunday: 10:00 - 23.30</p>";
  openingHours.classList.add("info-right");

  const quotation = document.createElement("figure");
  quotation.classList.add("info-center");
  quotation.innerHTML = "<blockquote cite=''><p>The best swedish food restaurant outside of Ikea!</p></blockquote> <figcaption>--Lars Andersson, <cite>Regular customer</cite> </figcaption>"

  homeTab.appendChild(title);
  homeTab.appendChild(subtitle);
  homeTab.appendChild(image);
  homeTab.appendChild(openingHours);
  homeTab.appendChild(quotation);

  return { homeTab };
};

export default HomeTab;

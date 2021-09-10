const Header = () => {
  const header = document.createElement("header");
  const title = document.createElement("h1");
  title.innerHTML = "Sven's Eatery";
  title.classList.add("title");
  header.appendChild(title);
  return { header };
};

export default Header;

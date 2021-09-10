const Footer = () => {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  const disclaimer = document.createElement("p");
  disclaimer.innerText =
    "Copyright 2021 Eduard Gavrila. Disclaimer: This is not a real restaurant!";
  footer.appendChild(disclaimer);
  return { footer };
};

export default Footer;

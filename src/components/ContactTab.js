const ContactTab = () => {
  const contactTab = document.createElement("div");
  contactTab.classList.add("tabs-content-container");

  const title = document.createElement("h1");
  title.classList.add("tab-title");
  title.innerText = "We deliver in your area!";

  const subtitle = document.createElement("p");
  subtitle.classList.add("tab-subtitle");
  subtitle.innerText = "Please contact us using the numbers below!";

  const phonesTitle = document.createElement("h2");
  phonesTitle.classList.add("contact-phones-title");
  phonesTitle.innerText = "Our Phones:";

  const phoneNumber1 = document.createElement("p");
  phoneNumber1.classList.add("phone-numbers");
  phoneNumber1.innerHTML =
    "<i class='fas fa-phone'></i>&nbsp;&nbsp;   555-0123-4567";

  const phoneNumber2 = document.createElement("p");
  phoneNumber2.classList.add("phone-numbers");
  phoneNumber2.innerHTML =
    "<i class='fas fa-phone'></i>&nbsp;&nbsp;   555-3421-7645";

  const email = document.createElement("p");
  email.classList.add("phone-numbers");
  email.innerHTML =
    "<i class='fas fa-envelope'></i>&nbsp;&nbsp;orders@notrealemail.com";

  contactTab.appendChild(title);
  contactTab.appendChild(subtitle);
  contactTab.appendChild(phonesTitle);
  contactTab.appendChild(phoneNumber1);
  contactTab.appendChild(phoneNumber2);
  contactTab.appendChild(email);

  return { contactTab };
};

export default ContactTab;

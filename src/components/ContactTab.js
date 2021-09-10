const ContactTab = () => {
  const contactTab = document.createElement("div");
  contactTab.innerHTML="Contact Tab";
  contactTab.classList.add("tabs-content-container");

  return { contactTab };
};

export default ContactTab;

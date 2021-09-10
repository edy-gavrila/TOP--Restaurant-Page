import MenuTab from "./MenuTab";
import HomeTab from "./HomeTab";
import ContactTab from "./ContactTab";

const Tabs = () => {
  let currentTab = null;
  // const { homeTab: homeTabContent } = HomeTab();
  // currentTab = homeTabContent;

  const { menuTab: menuTabContent } = MenuTab();
  currentTab = menuTabContent;

  const tabs = document.createElement("div");
  tabs.classList.add("tabs-container");

  const tabsHeader = document.createElement("div");
  tabsHeader.classList.add("tabs-header");

  const homeTab = document.createElement("div");
  const menuTab = document.createElement("div");
  const contactTab = document.createElement("div");

  const tabClickHandler = (e) => {
    homeTab.classList.remove("active");
    menuTab.classList.remove("active");
    contactTab.classList.remove("active");
    e.target.classList.add("active");
  };

  homeTab.classList.add("tab");
  homeTab.innerHTML = "Home";
  homeTab.addEventListener("click", (e) => {
    tabClickHandler(e);
    const { homeTab: homeTab } = HomeTab();
    currentTab.remove();
    currentTab = homeTab;
    tabs.appendChild(currentTab);
  });

  menuTab.classList.add("tab");
  menuTab.innerHTML = "Menu";
  menuTab.addEventListener("click", (e) => {
    tabClickHandler(e);
    const { menuTab: menuTab } = MenuTab();
    currentTab.remove();
    currentTab = menuTab;
    tabs.appendChild(currentTab);
  });

  contactTab.classList.add("tab");
  contactTab.innerHTML = "Contact";
  contactTab.addEventListener("click", (e) => {
    tabClickHandler(e);
    const { contactTab: contactTab } = ContactTab();
    currentTab.remove();
    currentTab = contactTab;
    tabs.appendChild(currentTab);
  });

  homeTab.classList.add("active");
  tabsHeader.appendChild(homeTab);
  tabsHeader.appendChild(menuTab);
  tabsHeader.appendChild(contactTab);
  tabs.appendChild(tabsHeader);
  tabs.appendChild(currentTab);

  return { tabs };
};

export default Tabs;

import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";

const { header: pageHeader } = Header();
const { welcome: initialWelcome, setButtonClickHandler } = Welcome();
const { tabs: tabs } = Tabs();
const { footer: pageFooter } = Footer();

setButtonClickHandler(() => {
  initialWelcome.remove();
  document.body.appendChild(tabs);
});

document.body.appendChild(pageHeader);
document.body.appendChild(tabs);
document.body.appendChild(pageFooter);
//document.body.appendChild(initialWelcome);

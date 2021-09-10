const Welcome = () => {
  const welcome = document.createElement("div");
  welcome.classList.add("welcome-container");

  const content = document.createElement("div");
  content.classList.add("greeting-card");

  const subtitle = document.createElement("h2");
  subtitle.classList.add("subtitle");
  subtitle.innerHTML = "Welcome To Sven's Eatery";

  const enterBtn = document.createElement("button");
  enterBtn.classList.add("btn-enter");
  enterBtn.innerHTML = " COME ON IN! <i class='fas fa-arrow-right'></i>";

  const setButtonClickHandler = (handler) => {
    enterBtn.addEventListener("click", handler);
  };

  content.appendChild(subtitle);
  content.appendChild(enterBtn);
  welcome.appendChild(content);

  return { welcome, setButtonClickHandler };
};

export default Welcome;

{
  /* <main class="main">
  <div id="content" class="content">
    <h2 class="subtitle">Welcome To Sven's Eatery'</h2>
    <button class="btn-enter">
      COME ON IN! <i class="fas fa-arrow-right"></i>
    </button>
  </div>
</main>; */
}

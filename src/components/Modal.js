const Modal = (content, yPos) => {
  const backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");
  backdrop.style.top = yPos + "px";

  backdrop.appendChild(content);

  backdrop.addEventListener("click", () => {
    content.classList.add("hide-modal");
    const timer = setTimeout(() => {
      backdrop.remove();
      clearInterval(timer);
    }, 500);
  });
  return { backdrop };
};

export default Modal;

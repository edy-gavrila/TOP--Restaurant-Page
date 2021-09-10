const Modal = (content) => {
  const backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");


  backdrop.appendChild(content);
  backdrop.addEventListener("click", () => {
    content.classList.add("hide-modal");
    const timer = setTimeout(() => {
      backdrop.remove();
    }, 500);
  });
  return { backdrop };
};

export default Modal;

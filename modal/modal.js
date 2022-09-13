const list = document.querySelector("ul");
const modalText = document.querySelector(".modal-text");
const backdrop = document.querySelector(".backdrop");
const btn = document.querySelector("button");

list.addEventListener("click", openModal);
btn.addEventListener("click", closeModal);
backdrop.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    return;
  }
  closeModal();
});

function openModal(event) {
  let content;
  if (event.target.nodeName === "P") {
    content = event.target.textContent;
  } else if (event.target.nodeName === "LI") {
    content = event.target.firstElementChild.textContent;
  } else {
    return;
  }

  modalText.textContent = content;
  backdrop.classList.add("open");

  window.addEventListener("keydown", closeModalByESC);
}

function closeModal() {
  modalText.textContent = "";
  backdrop.classList.remove("open");
  window.removeEventListener("keydown", closeModalByESC);
}

function closeModalByESC(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}

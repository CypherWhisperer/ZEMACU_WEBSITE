
// Modal Behaviour - Events
//TODO: refactor this to a proper Event, not the legacy thing going on

function openModal(src, type) {
  var modal = document.getElementById("modal");
  var modalContent = document.getElementById("modalContent");
  modal.style.display = "block";
  if (type === "image") {
    modalContent.innerHTML = `<img src="${src}" alt="Modal Image" style="max-width: 100%; max-height: 80vh;">`;
  } else if (type === "video") {
    modalContent.innerHTML = `<iframe src="${src}" width="100%" height="80vh" frameborder="0" allowfullscreen></iframe>`;
  }
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
  var modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = "";
}

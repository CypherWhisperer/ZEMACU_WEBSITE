// ======================================================================
// ===============================   MODAL ==============================

// Moving the modals from their parent to be children to the body
document.querySelectorAll('.modal').forEach(modal => {
  document.body.appendChild(modal);
});

const modalTriggers = document.querySelectorAll(".modal-trigger");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close-btn");

// Open Modal
modalTriggers.forEach(trigger => {
  trigger.addEventListener("click", () => {
    const targetId = trigger.getAttribute("data-target");
    const targetModal = document.getElementById(targetId);
    if (targetModal) {
      targetModal.classList.remove("hidden");
    }
  });
});

// Close Modal
closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    if (modal) {
      modal.classList.add("hidden");
    }
  });
});

// Close on background click
modals.forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});

// Optional: Escape key closes modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modals.forEach(modal => modal.classList.add("hidden"));
  }
});


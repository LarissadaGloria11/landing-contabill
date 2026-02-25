// Dark Mode
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// FAQ Acordeão
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Validação de formulário
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const toast = document.getElementById("toast");

  if (!name || !email || !message) {
    alert("Preencha todos os campos!");
    return;
  }

  if (!email.includes("@")) {
    alert("Digite um e-mail válido!");
    return;
  }

  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);

  this.reset();
});
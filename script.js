document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const perfil = form.perfil.value;
    const updates = form.updates.checked;

    console.log("Inscrição na wishlist:", { nome, email, perfil, updates });

    alert("Obrigado por se inscrever! Em breve enviaremos novidades 🌊");

    form.reset();
  });
});

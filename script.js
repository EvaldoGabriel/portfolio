// ===============================
// EmailJS - Configuração
// ===============================
(function () {
  emailjs.init("3PWYg5gFVubR3FFNB"); // 🔴 coloque sua Public Key
})();

// ===============================
// Envio do formulário
// ===============================
const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  statusMsg.innerText = "Enviando mensagem...";

  emailjs.send("service_we23sjr", "template_kpb0mfa", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  })
  .then(() => {
    statusMsg.innerText = "Mensagem enviada com sucesso!";
    form.reset();
  })
  .catch((error) => {
    statusMsg.innerText = "Erro ao enviar mensagem. Tente novamente.";
    console.error(error);
  });
});


// ===============================
// Botão de download do currículo
// ===============================
const downloadBtn = document.getElementById("downloadCV");

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    const cvUrl = "https://drive.google.com/uc?export=download&id=1GtSMsLefoBT-VImr_c_JKZJX3tobQyh5";

    const a = document.createElement("a");
    a.href = cvUrl;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.click();
  });
}


// ===============================
// Smooth Scroll
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href").substring(1);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});
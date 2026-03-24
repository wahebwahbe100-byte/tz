
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form, .form");
  const buttons = document.querySelectorAll('button[type="button"]');
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("This is a static demo. Connect this form to email, WhatsApp, or your backend.");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('button[type="button"]').forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Dies ist eine statische Demo. Das Formular kann später mit E-Mail, WhatsApp oder einem Backend verbunden werden.");
    });
  });
});

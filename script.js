const contactForm = document.querySelector(".contact-form");
const formNote = document.querySelector(".form-note");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const contact = String(formData.get("contact") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const subject = encodeURIComponent("Question for Da Lunch Box");
  const body = encodeURIComponent(
    `Name: ${name || "Not provided"}\nContact: ${contact || "Not provided"}\n\n${message || "I'd like to ask about today's menu."}`
  );

  formNote.textContent = "Your message is ready. Calling the restaurant is best for the fastest answer.";
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});

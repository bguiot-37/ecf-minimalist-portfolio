//analyse saisie du formulaire page contact

let valid = document.querySelector("#btn-valid");

valid.addEventListener("click", (e) => {
  let validation = true;
  let name = document.querySelector("#name");
  let nameInvalid = document.querySelector("#name-invalid");
  let email = document.querySelector("#email");
  console.log(email.value);
  let emailInvalid = document.querySelector("#email-invalid");
  let message = document.querySelector("#message");
  let messageInvalid = document.querySelector("#message-invalid");
  let emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,8}$/g;
  let testEmail = emailRegExp.test(email.value);

  if (name.validity.valueMissing) {
    nameInvalid.innerHTML = "Ce champ est requis";
    nameInvalid.style.color = "var(--bright-red)";
    name.style.border = "1px solid var(--bright-red)";
    validation = false;
  }
  if (email.validity.valueMissing || !testEmail) {
    emailInvalid.innerHTML = "Ce champ est requis ou invalide";
    emailInvalid.style.color = "var(--bright-red)";
    email.style.border = "1px solid var(--bright-red)";
    validation = false;
  }
  if (message.validity.valueMissing) {
    messageInvalid.innerHTML = "Ce champ est requis";
    messageInvalid.style.color = "var(--bright-red)";
    message.style.border = "1px solid var(--bright-red)";
    validation = false;
  }
  if (!validation) {
    e.preventDefault();
  }
});

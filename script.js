const error_sign = document.querySelector(".error-sign");
const error_message = document.querySelector(".error");
const input = document.querySelector(".input");
const submit = document.querySelector(".btn-share");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.match(regex)) {
    error_message.classList.add("hide");
    error_sign.classList.add("hide");
    input.classList.remove("active");
  } else {
    error_message.classList.remove("hide");
    error_sign.classList.remove("hide");
    input.classList.add("active");
  }
});

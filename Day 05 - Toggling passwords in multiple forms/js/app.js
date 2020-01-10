window.addEventListener('click', showPassword, false);

function showPassword(event) {
  if (!event.target.matches("[data-checkbox]")) return;
  let getForm = event.target.closest("form")
  const pwdFields = Array.prototype.slice.call(getForm.querySelectorAll("[data-password]"));
  pwdFields.forEach(togglePassword);
}

function togglePassword(pwd) {
  if (event.target.checked) {
    pwd.type = 'text';
  } else {
    pwd.type = 'password';
  }
}



// Doesnt' work if we try to target input type attribute
/*
window.addEventListener('click', showPassword, false);

function showPassword(event) {
  if (!event.target.matches('input[type="checkbox"]')) return;
  let getForm = event.target.closest("form")
  const pwdFields = Array.prototype.slice.call(getForm.querySelectorAll('input[type="password"]'));
  pwdFields.forEach(togglePassword);
}

function togglePassword(pwd) {
  if (event.target.checked) {
    pwd.type = 'text';
  } else {
    pwd.type = 'password';
  }
}

*/
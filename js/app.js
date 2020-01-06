const pwdCheckBox = document.querySelector('input[id="show-password"]');
const pwdField = document.querySelector('input[id="password"]');

pwdCheckBox.onchange = function() {
  if (pwdCheckBox.checked) {
    pwdField.type = 'text';
  } else {
    pwdField.type = 'password';
  }
};

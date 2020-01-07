const pwdCheckBox = document.querySelector('#show-password');
const pwdField = document.querySelector('#password');

// pwdCheckBox.onchange = function() {
//   if (pwdCheckBox.checked) {
//     pwdField.type = 'text';
//   } else {
//     pwdField.type = 'password';
//   }
// };

pwdCheckBox.addEventListener('click', () => {
  if (pwdCheckBox.checked) {
    pwdField.type = 'text';
  } else {
    pwdField.type = 'password';
  }
});

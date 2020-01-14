const pwdCheckBox = document.querySelector('#show-passwords');
//As we'll get them as NodeList, hence converting them to an Array
const pwdFields = Array.prototype.slice.call(document.querySelectorAll('input[type="password"]'));

pwdCheckBox.addEventListener('click', () => {
  pwdFields.forEach((pwd) => {
    if (pwdCheckBox.checked) {
      pwd.type = 'text';
    } else {
      pwd.type = 'password';
    }
  });
});
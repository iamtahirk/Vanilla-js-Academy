const textArea = document.querySelector('#text');
const txtWordCounter = document.querySelector('#word-count');
const txtCharCounter = document.querySelector('#character-count');

textArea.addEventListener('input', function textCounter(e) {
    if (e.target.value) {
        txtCharCounter.innerText = e.target.value.split('').length;
        txtWordCounter.innerText = e.target.value.match(/\S+/g).length;
    }
}), false;



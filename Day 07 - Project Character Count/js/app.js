const textArea = document.querySelector('#text');
const txtCounter = document.querySelector('#character-count');

textArea.addEventListener('input', function characterCounter() {
    txtCounter.innerText = textArea.value.length;
}), false;
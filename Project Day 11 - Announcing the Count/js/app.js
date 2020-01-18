const textArea = document.querySelector('#text');
const counter = document.querySelector('#count');

textArea.addEventListener('input', function () {
    // Get the word count
    let words = text.value.split(/[\n\r\s]+/g).filter(function (word) {
        return word.length > 0;
    });

    // Display the word and character counts
    counter.innerHTML = 'You\'ve written <strong>' + words.length + ' words</strong> and <strong>' + text.value.length + ' characters</strong>.';

}, false);
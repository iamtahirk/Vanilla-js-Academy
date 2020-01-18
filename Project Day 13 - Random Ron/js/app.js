const ronQuote = document.querySelector('blockquote');
const moreButton = document.querySelector('button');

// Get Quotes on Load (avoid empty quote at load)
moreRonQuotes();

moreButton.addEventListener('click', moreRonQuotes, false);

function moreRonQuotes() {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(res => res.json())
        .then(data => {
            ronQuote.innerText = data[0];
        }).catch(error => console.error('Something Wrong: ' + error));
}
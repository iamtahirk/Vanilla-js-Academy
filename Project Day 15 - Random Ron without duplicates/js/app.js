const ronQuote = document.querySelector('#randomron');
const moreButton = document.querySelector('button');

// Store Quotes(max 50)
let quotesCollection = [];

const moreRonQuotes = function () {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(res => res.json())
        .then((data) => {
            console.log(data[0]);

            // Check if the Quote does exits in array & if it does load next one & return
            if (quotesCollection.indexOf(data[0]) > -1) {
                moreRonQuotes();
                return;
            }

            // Display the quote
            ronQuote.textContent = data[0];
            // Push current quote into quotesCollection Array
            quotesCollection.push(data[0]);

            // Check if array has reached 50 quotes. If it is remove the one from starting position.
            if (quotesCollection.length > 50) {
                quotesCollection.shift();
            }

        }).catch((error) => {
            console.error('Something went wrong: ' + error);
            ronQuote.innerText = '[Something went wrong, sorry!] I have a joke for you... The government in this town is excellent, and uses your tax dollars efficiently.';
        });
}

// Get Quotes on Load (avoid empty quote at load)
moreRonQuotes();

moreButton.addEventListener('click', moreRonQuotes, false);
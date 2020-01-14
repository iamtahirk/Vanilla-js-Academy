## Project Day 09: Character and Word Counter
[Go Make Things](https://gomakethings.com/)

In today’s project, we’re going to modify our character count script to also count the number of words in a block of text. We’ll again do this in real time as the user types or pastes content in.


####The Template
The template includes one small adjustment. The paragraph includes second span element, this time with an ID of #word-count.

As the user types or pastes content in, the text of the #word-count and #character-count elements should be updated to show how many words and characters are in the #text field.


```html
<label for="text">Enter your text below.</label>
<textarea id="text"></textarea>

<p>You've written <strong><span id="word-count">0</span> words</strong> and <strong><span id="character-count">0</span> characters</strong>.</p>
```
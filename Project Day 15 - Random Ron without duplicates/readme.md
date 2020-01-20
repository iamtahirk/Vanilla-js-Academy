## Project Day 15 - Random Ron without duplicates
[Go Make Things](https://gomakethings.com/)

In today’s project, we’re going to modify our Random Ron script to prevent the same quote from showing up twice.

Here’s the API endpoint:
```
http://ron-swanson-quotes.herokuapp.com/v2/quotes
```


####The Template
Modify previous project so that if the same quote gets returned from the API in the last 50 quotes, you skip it and fetch another one instead.

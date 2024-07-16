const quotes = [
    {
        quote: "ummm",
        author: "gang",
    },
    {
        quote: "ooo",
        author: "wow",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
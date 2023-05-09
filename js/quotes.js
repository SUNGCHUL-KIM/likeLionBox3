const quotes =[ {
    quote: "집가고싶다",
    author: "김성철",
},
{
    quote: "굿끼제먹",
    author: "김성철",
},
{
    quote: "술이 인생이지",
    author: "김성철",
},
{
    quote: "놀고싶다",
    author: "김성철",
},
{
    quote: "행복은 가까운 곳에",
    author: "김성철",
},
{
    quote: "그 가까운 곳은 술집",
    author: "김성철",
},
{
    quote: "5/16 예비군",
    author: "김성철",
},
{
    quote: "으아아아아악2",
    author: "김성철",
},
{
    quote: "으아아아아악3",
    author: "김성철",
},
{
    quote: "으아아아아악4",
    author: "김성철",
},
{
    quote: "으아아아아악5",
    author: "김성철",
},
{
    quote: "으아아아아악6",
    author: "김성철",
},
{
    quote: "으아아아아악7",
    author: "김성철",
},

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
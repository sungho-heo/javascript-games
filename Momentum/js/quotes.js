const quotes = [
    {
        quote: "No Pain No Gain",
        author: "Francis O Ogunleye",
    },
    {
        quote: "When you have faults, do not fear to abandon them.",
        author: "Confucius",
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell",
    },
    {
        quote: "Youth isn’t always all it’s touted to be.",
        author: "Lawana Blackwell",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },
    {
        quote: "he greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "The goal of life is living in agreement with nature.",
        author: "Zeno",
    },
    {
        quote: "his too shall pass.",
        author: "Et hoc transibit",
    },
    {
        quote: "The die is cast.",
        author: "Julius caesar",
    },
    {
        quote: "Only I can change me life, no one can do it for me.",
        author: "Carol Burnett",
    },
];

const quoteUser = document.querySelector("#named-quotes span:first-child");
const author = document.querySelector("#named-quotes span:last-child");
const getQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoteUser.innerText = getQuote.quote;
author.innerText = getQuote.author;

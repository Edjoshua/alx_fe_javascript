const quotes = [
{ text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
{ text: "Life is what happens when you're busy making other plans.", category: "Life" },
{ text: "Your time is limited, don’t waste it living someone else’s life.", category: "Inspiration" }
];


function showRandomQuote() {
const randomIndex = Math.floor(Math.random() * quotes.length);
const quoteDisplay = document.getElementById('quoteDisplay');
quoteDisplay.textContent = `${quotes[randomIndex].text} - (${quotes[randomIndex].category})`;
}


document.getElementById('newQuote').addEventListener('click', showRandomQuote);


document.getElementById('addQuoteBtn').addEventListener('click', addQuote);


function addQuote() {
const newQuoteText = document.getElementById('newQuoteText').value;
const newQuoteCategory = document.getElementById('newQuoteCategory').value;


if (newQuoteText && newQuoteCategory) {
quotes.push({ text: newQuoteText, category: newQuoteCategory });
alert('New quote added!');
} else {
alert('Please fill in both fields.');
}
}
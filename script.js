// Declare quotes array globally
var quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Your time is limited, don’t waste it living someone else’s life.", category: "Inspiration" }
];

// Function to display a random quote
function displayRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.textContent = quotes[randomIndex].text + " - (" + quotes[randomIndex].category + ")";
}

// Function to add a new quote
function addQuote() {
  var newQuoteText = document.getElementById("newQuoteText").value.trim();
  var newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (newQuoteText !== "" && newQuoteCategory !== "") {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    alert("New quote added!");
    displayRandomQuote();
  } else {
    alert("Please fill in both fields.");
  }
}

// Add event listeners for buttons
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

// Step 1: Create the quotes array
const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Your time is limited, don’t waste it living someone else’s life.", category: "Inspiration" }
];

// Step 2: Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById("quoteDisplay");
  const randomQuote = quotes[randomIndex];
  quoteDisplay.textContent = `${randomQuote.text} - (${randomQuote.category})`;
}

// Step 3: Function to add a new quote
function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value.trim();
  const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (newQuoteText && newQuoteCategory) {
    // Add new quote to array
    quotes.push({ text: newQuoteText, category: newQuoteCategory });

    // Update DOM to confirm addition
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.textContent = `New quote added: "${newQuoteText}" (${newQuoteCategory})`;

    // Clear inputs
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
  } else {
    alert("Please fill in both fields.");
  }
}

// Step 4: Event listener for "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

// Step 5: Event listener for "Add Quote" button
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

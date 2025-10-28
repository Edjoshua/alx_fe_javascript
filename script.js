// ===== Step 1: Quotes Data =====
const quotes = [
  { text: "The only way to do great work is to love what you do.", category: "Motivation" },
  { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" },
  { text: "Success is not final; failure is not fatal.", category: "Life" }
];

// ===== Step 2: Display a Random Quote =====
function showRandomQuote() {
  const quoteDisplay = document.getElementById('quoteDisplay');

  if (quotes.length === 0) {
    quoteDisplay.textContent = "No quotes available.";
    return;
  }

  // Pick a random quote
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Display in the DOM
  quoteDisplay.textContent = `"${randomQuote.text}" - (${randomQuote.category})`;
}

// ===== Step 3: Create a Form to Add Quotes Dynamically =====
function createAddQuoteForm() {
  const newQuoteText = document.getElementById('newQuoteText').value.trim();
  const newQuoteCategory = document.getElementById('newQuoteCategory').value.trim();

  if (newQuoteText === "" || newQuoteCategory === "") {
    alert("Please enter both quote text and category.");
    return;
  }

  // Create new quote object
  const newQuote = {
    text: newQuoteText,
    category: newQuoteCategory
  };

  // Add to array
  quotes.push(newQuote);

  // Clear inputs
  document.getElementById('newQuoteText').value = "";
  document.getElementById('newQuoteCategory').value = "";

  // Update display to show confirmation
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.textContent = `New quote added: "${newQuote.text}" (${newQuote.category})`;
}

// ===== Step 4: Event Listeners =====
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
document.getElementById('addQuoteBtn').addEventListener('click', createAddQuoteForm);

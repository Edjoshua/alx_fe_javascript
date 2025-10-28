// ===== Dynamic Quote Generator =====

// Initial list of quotes
const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Your time is limited, don’t waste it living someone else’s life.", category: "Inspiration" }
];

// ===== Populate Categories Dynamically =====
function populateCategories() {
  const categorySelect = document.getElementById('categorySelect');
  const uniqueCategories = [...new Set(quotes.map(q => q.category))];

  // Reset and add default option
  categorySelect.innerHTML = '<option value="all">All Categories</option>';

  // Add each unique category as an option
  uniqueCategories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

// ===== Display a Random Quote =====
function showRandomQuote() {
  const categorySelect = document.getElementById('categorySelect');
  const selectedCategory = categorySelect.value;

  // Filter quotes based on selected category
  const filteredQuotes =
    selectedCategory === 'all'
      ? quotes
      : quotes.filter(q => q.category === selectedCategory);

  if (filteredQuotes.length === 0) {
    document.getElementById('quoteDisplay').textContent =
      'No quotes available for this category.';
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  const randomQuote = filteredQuotes[randomIndex];

  document.getElementById('quoteDisplay').textContent = 
    `"${randomQuote.text}" - (${randomQuote.category})`;
}

// ===== Add New Quote Dynamically =====
function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value.trim();
  const newQuoteCategory = document.getElementById('newQuoteCategory').value.trim();

  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });

    // Clear input fields
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';

    // Update dropdown with new category if needed
    populateCategories();

    alert('✅ New quote added successfully!');
  } else {
    alert('⚠️ Please fill in both fields before adding a quote.');
  }
}

// ===== Event Listeners =====
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
document.getElementById('addQuoteBtn').addEventListener('click', addQuote);

// Initialize categories on page load
populateCategories();

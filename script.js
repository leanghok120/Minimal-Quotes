const apiUrl = "https://api.quotable.io/random";
const quoteEl = document.getElementById("quoteEl");

async function getQuotes() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data.content);
  quoteEl.textContent = `“${data.content}”`;
}

getQuotes();

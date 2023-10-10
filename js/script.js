/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/** 
initiate array of quote objects
***/

let quotes = [];

quotes.push(
  {
    quote:
      "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.",
    source: "Henry David Thoreau",
    citation: "Walden",
    year: 1854,
  },
  {
    quote: "Dude, where's my car?",
    source: "Jesse",
    citation: "Dude, Where's My Car?",
    year: 2000,
    tags: [
      "comedy",
      "dudes",
      "cars",
      "zoltan",
      "Ashton Kutcher",
      "Sean William Scott",
    ]
  },
  {
    quote: "I'll be back.",
    source: "Terminator",
    tags: [
      "T100",
      "Arnold",
      "CyberneticOrganism",
    ]
  },
  {
    quote: "Speak softly and carry a big stick.",
    source: "Theodore Roosevelt",
  },
  {
    quote: "That's one small step for man, a giant leap for mankind.",
    source: "Neil Armstrong",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    source: "Mahatma Gandhi",
  }
);

/*** 
setup random quote selector function. Returns full object.
***/

function getRandomQuote() {
  let randomValue = Math.floor(Math.random() * quotes.length);
  let quote = quotes[randomValue];
  return quote;
}

//function for updating the background color to a random color.

const  randomValue = () => Math.floor(Math.random() * 256);
function updateBGColor(){
  const color = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
  document.body.style.backgroundColor = color;
}

/***
setup print quote function. This will use the getRandomQuote functio above, and add the right formatting depending on the properties of the quote.
***/

function printQuote() {
  let quote = getRandomQuote();
  let html = `
  <p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`;

  if (Object.keys(quote).includes("citation")) {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (Object.keys(quote).includes("year")) {
    html += `<span class="year">${quote.year}</span>`;
  }

  html += "</p>";

  if (Object.keys(quote).includes("tags")) {
    html += `<span class="tags">${quote.tags.join(', ')}</span>`;
  }
  document.getElementById("quote-box").innerHTML = html;
  updateBGColor();
}

//auto refresh every 20 seconds.
setInterval(printQuote,20000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

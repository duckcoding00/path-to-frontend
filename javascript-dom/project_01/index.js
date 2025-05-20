const btn = document.querySelector(".button");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    person: "Walt Disney",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    person: "Steve Jobs",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    person: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    person: "James Cameron",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon",
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    person: "Mother Teresa",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    person: "Abraham Lincoln",
  },
  {
    quote:
      "Always remember that you are absolutely unique. Just like everyone else.",
    person: "Margaret Mead",
  },
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[random].quote;
  person.innerHTML = quotes[random].person;
});

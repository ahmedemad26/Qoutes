var authorOutput = document.getElementById('authorOutput');
var quoteOutput = document.getElementById('quoteOutput');

var quotes = [
    {
        quote: 'Be yourself; everyone else is already taken.',
        name: 'Oscar Wilde'
    },
    {
        quote: 'So many books, so little time.',
        name: 'Frank Zappa'
    },
    {
        quote: 'Be the change that you wish to see in the world.',
        name: 'Mahatma Gandhi'
    },
    {
        quote: 'You only live once, but if you do it right, once is enough.',
        name: 'Mae West'
    },
    {
        quote: 'A room without books is like a body without a soul.',
        name: 'Marcus Tullius Cicero'
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        name: 'Robert Frost'
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        name: 'Mark Twain'
    }
];

function generateQuote() {
    let num = Math.floor(Math.random() * quotes.length);
    
    quoteOutput.innerHTML = quotes[num].quote;
    authorOutput.innerHTML = quotes[num].name; 
}

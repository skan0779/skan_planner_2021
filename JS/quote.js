const quotes=[
    {
        quote:"To see the world, things dangerous to come to, to see behind walls, to draw closer, to find each other, and to feel. That is the purpose of life.", 
        author:"Walter Mitty",
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", 
        author:"Albert Einstein",
    },
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.", 
        author:"Nelson Mandela",
    },
    {
        quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", 
        author:"Steve Jobs",
    },
    {
        quote:"Life is what happens when you're busy making other plans.", 
        author:"John Lennon",
    },
    {
        quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier.", 
        author:"Mother Teresa",
    },
    {
        quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.", 
        author:"Benjamin Franklin",
    },
    {
        quote:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", 
        author:"Helen Keller",
    },
    {
        quote:"In the end, it's not the years in your life that count. It's the life in your years.", 
        author:"Abraham Lincoln",
    },
    {
        quote:"Many of life's failures are people who did not realize how close they were to success when they gave up.", 
        author:"Thomas A. Edison",
    }
];
const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

savedQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=savedQuote.quote;
author.innerText=savedQuote.author;




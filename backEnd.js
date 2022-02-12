let quotesDiv = document.getElementById('quotes')

    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(quote => {
        quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
})

let quoteButton = document.getElementById('giveQuote')

quoteButton.addEventListener("click", evt => {

    let quotesDiv = document.getElementById('newQuote')
    
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(quote => {
        quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
        })
})

let catButton = document.getElementById('giveCat')

catButton.addEventListener("click", evt => {

    let catDiv = document.getElementById('catPic')
    
    fetch('https://api.thecatapi.com/v1/images/search?')
    .then(res => res.json())
    .then(cats => {
        cats.forEach(cat => {
            catDiv.innerHTML = `<h3>Too bad. Here's a kitty </h3>
            <img src ="${cat.url}" alt = "kitty" />`
        });
    })

})

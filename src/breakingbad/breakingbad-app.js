const fetchQuote = async ()=>{

    const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/1');
    const data = await response.json();
    console.log(data[0]);

    return data[0];
}


export const BreakingBadApp = async (title, element)=>{

    title.innerHTML = 'BrakingBad APP';
    element.innerHTML = 'Loading...';

    const  quoteLabel = document.createElement('blockquote');   
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'next quote';

    const renderQuote = (data) =>{
        quoteLabel.innerText = data.quote;
        authoLabel.innerText = data.author;

        element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton);
    }

    nextQuoteButton.addEventListener('click', async ()=>{

        element.innerHTML = 'Loading...';    
        
        const quote = await fetchQuote();

        renderQuote(quote);

    });

    fetchQuote().then(data => renderQuote(data))

}
console.log('Running HW2');

let state = {
    stockList: [
        {
            "symbol": "Wala",
            "price": "Wala"
        },
    ],
};


//_____________________________________________________API

function displayBarGraph() {

    let barsInGraph = document.querySelector('#ToJavaScript');
    barsInGraph.innerHTML = '';

    for (let stockInfo of state.stockList) {

        // grab the prices and symbols for each stock
        let stockPrice = stockInfo.price;

        // grab the names for each stock
        let stockName = stockInfo.symbol;

        // create a new div that contains this info
        let newDiv = document.createElement('div');
        
        //create a new h2 that contains the symbol
        let newH3 = document.createElement('h3');
        newH3.textContent = stockName + " - $" + stockPrice;
        newH3.classList.add('BarNamePosition');

        // add a class to the newDiv called .BarsInGraph
        newDiv.classList.add('BarsInGraph');

        // add values from .BarsInGraph
        newDiv.style.height = stockPrice / 10 + '%';

        // append new stuff
        newDiv.appendChild(newH3);
        barsInGraph.appendChild(newDiv);
        
    }
}

function displayNameButtons() {
    let stockSymbolNames = document.querySelector('#CheckBoxToJavaScript');
    
    for (let stockSymbol of state.stockList) {
        let stockName = stockSymbol.symbol;
        let newCheckBox = document.createElement('button');
        newCheckBox.textContent = stockName;
        stockSymbolNames.appendChild(newCheckBox);
    }
}



function doFetch() {
    fetch('https://financialmodelingprep.com/api/v3/stock/real-time-price')
        .then(response => response.json())
        .then(data => {
            state.stockList = data.stockList.filter(stockdata => 
            stockdata.symbol === "CMG" || 
            stockdata.symbol === "MCD" || 
            stockdata.symbol === "PEP" || 
            stockdata.symbol === "WEN" || 
            stockdata.symbol === "COKE");
            displayBarGraph();
        });
}

function doFetchAgain() {
    fetch('https://financialmodelingprep.com/api/v3/stock/real-time-price')
        .then(response => response.json())
        .then(data => {
            state.stockList = data.stockList.filter(stockdata => 
            stockdata.symbol === "CMG" || 
            stockdata.symbol === "MCD" || 
            stockdata.symbol === "PEP" || 
            stockdata.symbol === "WEN" || 
            stockdata.symbol === "COKE" ||
            stockdata.symbol === "AMZN" ||
            stockdata.symbol === "GOOGL" ||
            stockdata.symbol === "IBM" ||
            stockdata.symbol === "AAPL" ||
            stockdata.symbol === "MSFT");
            displayNameButtons();
        });
}

doFetch();
doFetchAgain();
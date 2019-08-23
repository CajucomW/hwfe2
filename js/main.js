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
    console.log('running displayBarGraph');

    let barsInGraph = document.querySelector('#ToJavaScript');
    barsInGraph.innerHTML = '';
    console.log('barsInGraph defined');

    for (let stockInfo of state.stockList) {
        console.log('for loop activated');

        // grab the prices and symbols for each stock
        let stockPrice = stockInfo.price;
        console.log('stockPrice defined');

        // grab the names for each stock
        let stockName = stockInfo.symbol;
        console.log('stockName defined');

        // create a new div that contains this info
        let newDiv = document.createElement('div');
        console.log('newDiv defined');

        //create a new h2 that contains the symbol
        let newH3 = document.createElement('h3');
        newH3.textContent = stockName + " - $" + stockPrice;
        console.log('newH3 defined');
        newH3.classList.add('BarNamePosition');

        // add a class to the newDiv called .BarsInGraph
        newDiv.classList.add('BarsInGraph');
        console.log('BarsInGraph added in newDiv');
        
        // add values from .BarsInGraph
        newDiv.style.height = stockPrice / 10 + '%';
        console.log('height established');

        console.log('newDiv created', newDiv, 'new h2 created', newH3);
        newDiv.appendChild(newH3);
        barsInGraph.appendChild(newDiv);
        
    }

}

function doFetch() {
    fetch('https://financialmodelingprep.com/api/v3/stock/real-time-price')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            state.stockList = data.stockList.filter(stockdata => 
            stockdata.symbol === "CMG" || 
            stockdata.symbol === "MCD" || 
            stockdata.symbol === "PEP" || 
            stockdata.symbol === "WEN" || 
            stockdata.symbol === "COKE");
            displayBarGraph();
        });
}

doFetch();
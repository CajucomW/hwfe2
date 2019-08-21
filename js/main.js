console.log('Running HW2');

let state = {
    stockList: [
        {
            symbol: "Wala",
            price: "Wala",
        },
    ],
};

// function render() {
//     console.log('rendering HW2');

//     // fetch the div from index.html
//     let barsInGraph = document.querySelector('#ToJavaScript');
//     console.log('barsInGraph defined');

//     // loop through the array of information
//     for (let stockInfo of stockList) {
//         console.log('for loop activated');

//         // grab the prices and symbols for each stock
//         let stockPrice = stockInfo.price;
//         console.log('stockPrice defined');
//         // grab the names for each stock
//         let stockName = stockInfo.symbol;
//         console.log('stockName defined');

//         // create a new div that contains this info
//         let newDiv = document.createElement('div');
//         console.log('newDiv defined');

//         // // create a new h2 that contains the symbol
//         // let newH2 = document.createElement('h2');
//         // console.log('newH2 defined');

//         // add a class to the newDiv called .BarsInGraph
//         newDiv.classList.add('BarsInGraph');
//         console.log('BarsInGraph added in newDiv');
//         newDiv.textContent = stockName + " - $" + stockPrice;
        
//         //add a class to the newH2 called .BarNamePosition
//         // newH2.textContent = stockName;
//         // console.log('BarNamePosition added in newH2');

//         // add values from .BarsInGraph
//         newDiv.style.height = stockPrice / 10 + '%';
//         console.log('height established');

//         // if (newDiv.style.height < 10) {
//         //     let newH2 = document.createElement('h2');
//         //     newH2.textContent = stockName;
//         //     newH2.classList.add('BarNamePosition');
//         // }

//         console.log('newDiv created', newDiv);
//         barsInGraph.appendChild(newDiv);    
//     }
// }

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

        // add a class to the newDiv called .BarsInGraph
        newDiv.classList.add('BarsInGraph');
        console.log('BarsInGraph added in newDiv');
        newDiv.textContent = stockName + " - $" + stockPrice;

        // add values from .BarsInGraph
        newDiv.style.height = stockPrice / 10 + '%';
        console.log('height established');

        console.log('newDiv created', newDiv);
        barsInGraph.appendChild(newDiv);
    }

}

function doFetch() {
    fetch('https://financialmodelingprep.com/api/v3/stock/real-time-price')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            state.stockList = data;
        });
}

displayBarGraph();
doFetch();
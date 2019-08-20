// function mcDonaldBar () {
//     console.log('Clicked on McDondald');
//     alert('A share of McDonalds Corp stock is worth: $219.71')
// }

// function wendyBar () {
//     console.log('Clicked on Wendys');
//     alert('A share of Wendys stock is worth: $19.65')
// }

// function chipotleBar () {
//     console.log('Clicked on Chipotle');
//     alert('A share of Chipotle stock is worth: $817')
// }

// function pepsiBar () {
//     console.log('Clicked on Pepsi');
//     alert('A share of PepsiCo stock is worth: $129.94')
// }

// function cokeBar () {
//     console.log('Clicked on Coke');
//     alert('A share of Coca-Cola stock is worth: $351.67')
// }

// HW 2 Code
console.log('Running HW2');

// let state = {
let stockList = [
        {
            symbol: "MCD",
            price: "218.41",
        },
        {
            symbol: "WEN",
            price: "19.65",
        },
        {
            symbol: "CMG",
            price: "817",
        },
        {
            symbol: "PEP",
            price: "817",
        },
        {
            symbol: "COKE",
            price: "351.67"
        }
    ];
// };

function render() {
    console.log('rendering HW2');

    // fetch the div from index.html
    let barsInGraph = document.querySelector('#ToJavaScript');
    console.log('barsInGraph defined');

    // loop through the array of information
    for (let stockInfo of stockList) {
        console.log('for loop activated');

        // grab the prices for each stock
        let stockPrice = stockInfo.price;
        console.log('stockPrice defined');

        // grab the names for each stock
        let stockName = stockInfo.symbol;
        console.log('stockName defined');

        // create a new div that contains this info
        let newDiv = document.createElement('div');
        console.log('newDiv defined');

        // create a new h2 that contains the symbol
        let newH2 = document.createElement('h2');
        console.log('newH2 defined');

        // add a class to the newDiv called .BarsInGraph
        newDiv.classList.add('BarsInGraph');
        console.log('BarsInGraph added in newDiv');

        //add a class to the newH2 called .BarNamePosition
        newDiv.classList.add('.BarNamePosition');
        console.log('BarNamePosition added in newH2');

        // add values from .BarsInGraph
        newDiv.style.height = stockPrice / 10 + '%';
        console.log('height established');

        console.log('newDiv created', newDiv);
        barsInGraph.appendChild(newDiv);
        console.log('newH2 created', newH2);
        barsInGraph.appendChild(newH2);
    }
}


// function doFetch() {
//     fetch('https://financialmodelingprep.com/api/v3/stock/real-time-price')
//         .then(response => response.json())
//         .then(stockList => {
//             console.log(data);
//             state.stockList = stocklist;
//         });
// }

render();
const container = document.getElementById('container');

function fetchdata(){
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then((res)=> res.json())
    .then((data) => {
        showData(data)
        console.log(data)
    });
}


function showData(data){

    data.forEach(element => {

        const row = document.createElement('div');
        row.classList.add('row');
        row.innerHTML = ` 
        <div class="data-container">
            <div class="info">
                <img id="img" src=${element.image} alt="">
                <h2 id="name">${element.name}</h2>
            </div>
            <div class="symbol">
                <h2 id="symbol">${element.symbol}</h2>
            </div>
            <div class="current-price">
                <h2 id="curr-price">$${element.current_price}</h2>
            </div>
            <div class="total">
                <h2 id="total">$${element.total_volume}</h2>
            </div>
            <div class="growth">
                <h2 id="growth" class="${getColor(element.market_cap_change_percentage_24h)}">${element.market_cap_change_percentage_24h}%</h2>
            </div>
            <div class="market-cap">
                <h2 id="mkt-cap"> MKT CAP : $${element.market_cap}</h2>
            </div>
        </div>
        <hr />
    `

    container.appendChild(row);
    });
}

function getColor(value){
   return  value >= 0 ? "green" : "red";
}

fetchdata();
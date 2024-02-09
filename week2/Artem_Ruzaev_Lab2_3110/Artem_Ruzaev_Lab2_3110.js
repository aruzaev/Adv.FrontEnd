function getTickers() {
    const apiURL = "https://api.wazirx.com/sapi/v1/tickers/24hr";

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(json => updateUI(json))
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Failed to fetch data. Please try again later.');
        });
}

function updateUI(tickerJSON) {
    console.log(tickerJSON);
    console.log(tickerJSON[0].baseAsset);
    

    for (let index = 0; index < 5; index++) {

        const tickers = document.getElementsByClassName("crypto-symbol");
        const price = document.getElementsByClassName("crypto-price");
        const volume = document.getElementsByClassName("crypto-volume");

        tickers[index].innerHTML = JSON.stringify(tickerJSON[index].baseAsset, null, 2).replaceAll("\"", "");
        price[index].innerHTML = JSON.stringify(tickerJSON[index].lastPrice, null, 2).replaceAll("\"", "");
        volume[index].innerHTML = JSON.stringify(tickerJSON[index].volume, null, 2).replaceAll("\"", "");

        
    }
}

getTickers();

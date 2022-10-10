let result = document.getElementById('result');
let searchCoin = document.getElementById('searchInp');


// Display Preloader 

let preload = document.getElementById('preload');

window.addEventListener('load', loader);

function loader(){

	preload.style.display = 'none';
};




// Fetch Data Form Rapid API

window.addEventListener('load', getData)
function getData(e){
	// e.preventDefault();
	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c9c52e558mshbbf1e382acb5d8fp10be7ajsnfcf89a0ecd4d',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

async function fetchData(){
	let responseData = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options);
	let data = await responseData.json();
	let coins = data.data.coins;
	
	//console.log(coins)

	try {
		let coinall = "" ;
	coins.forEach( function(coin) {

		let price = coin.price;
		let prices = price.slice(0, price.length -9);

		coinall += 

			`
			<div class="card">
				<div class="card-head">
						<img src=${coin.iconUrl}>
						<h2>${coin.name}</h2>
						<small>${coin.symbol}</small>
					</div>
						<div class="divider"></div>
					<div class="card-body">
						<h2>Price:<strong> ${prices}</strong><span>$</span></h2>
						<p>Rank: <strong> ${coin.rank}</strong></p>
						<p>Market Cap:<strong> ${coin.marketCap}</strong></p>
					</div>
						<div class="divider"></div>
					<div class="card-footer">
						<small>Change:<strong> ${coin.change}</strong>$</small>
				</div>
			</div>
			`
		
		
	});

	result.innerHTML = coinall;

	} catch(error) {
		
		console.log(error);
	}
	



searchInp.addEventListener('keyup', serchfnc);


	function serchfnc(){

	if(searchInp.value.length > 2){

		let Svalue = searchInp.value.toLowerCase();
		
		for( i=0; i<Svalue.length; i++){

			let coi = ""
			coins.forEach( function(coi) {
				console.log(coi.name)
			});
			
		}
		
	}
};

	
}

fetchData()

}



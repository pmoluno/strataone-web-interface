const { networksP, networks } = require('../config/data');

// Function to fetch price for a given coin
async function getCoinPrice(coinTicker) {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinTicker}&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=false&precision=5&x_cg_demo_api_key=CG-LqFnJJcWtaLjjgyNX1fDgqjm`;
    const options = { method: 'GET' };
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      return {
        price: json[coinTicker].usd,
        change: json[coinTicker].usd_24h_change.toFixed(2),
      };
    } catch (err) {
      console.error('Error fetching price for', coinTicker, err);
      return { price: null, change: null };
    }
  }
  
  // Function to get prices for all coins
  async function getAllCoinPrices() {
    const prices = {};
    for (const network of networksP) {
      const { price, change } = await getCoinPrice(network.ticker.toLowerCase());
      prices[network.name] = { price, change };
    }
    return prices;
  }
  

  module.exports = { getCoinPrice, getAllCoinPrices };

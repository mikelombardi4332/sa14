const form = document.getElementById('converterForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const sourceCurrency = document.getElementById('sourceCurrency').value;
  const targetCurrency = document.getElementById('targetCurrency').value;
  const amount = document.getElementById('amount').value;
  
  if (!amount) {
    alert('Please enter an amount');
    return;
  }

  const exchangeRate = await getExchangeRate(sourceCurrency, targetCurrency);
  const convertedAmount = amount * exchangeRate;

  resultDiv.innerHTML = `Converted amount: ${convertedAmount.toFixed(2)} ${targetCurrency}`;
});

async function getExchangeRate(sourceCurrency, targetCurrency) {
  const apiKey = '';
  const apiUrl = ``;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }
    const data = await response.json();
    return data.rates[targetCurrency];
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    alert('Failed to fetch exchange rates. Please try again later.');
    return null;
  }
}

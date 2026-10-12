const CurrencyRates = {
    EUR: 1,
    USD: 1.13,
    GBP: 0.86
};

function convertCurrency(amount, sourceCurrency, targetCurrency) {
    const SOURCE = sourceCurrency.toUpperCase();
    const TARGET = targetCurrency.toUpperCase();
    const convertedAmount = (amount * CurrencyRates[TARGET]) / CurrencyRates[SOURCE];


    console.log(amount, sourceCurrency.toUpperCase(), 
    convertedAmount.toFixed(2), 
    targetCurrency.toUpperCase());

    return convertedAmount.toFixed(2);

}

const amountToCompare = 10;
const sourceCurrency = "EUR";
const eurAmount = Number(convertCurrency(amountToCompare, sourceCurrency, "EUR"));
const usdAmount = Number(convertCurrency(amountToCompare, sourceCurrency, "USD"));
const gbpAmount = Number(convertCurrency(amountToCompare, sourceCurrency, "GBP"));

if (eurAmount > usdAmount && eurAmount > gbpAmount) {
    console.log("EUR has the highest converted value.");
} else if (usdAmount > eurAmount && usdAmount > gbpAmount) {
    console.log("USD has the highest converted value.");
} else if (gbpAmount > eurAmount && gbpAmount > usdAmount) {
    console.log("GBP has the highest converted value.");
} else {
    console.log("There is a tie for the highest converted value.");
}

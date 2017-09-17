import { twoDecimalPlacesFormatter } from './precision.formatter';
import { toUSD } from './usd.normalizer';

const displayFee = (amount, totalExchanged) => amount + totalExchanged >= 6000 && amount !== 0;
const minimumFee = (amount) => amount < 0.01 ? 0.01 : amount;

export const calculateFee = (amount, totalExchanged, amountCurrency, targetCurrency) => {
  if (displayFee(toUSD(amount, amountCurrency), totalExchanged)) {
    const toTargetCurrencyRate = amountCurrency.exchangeRates[targetCurrency.code];
    const fromUSDToTargetCurrencyRate = (targetCurrency.code === 'USD') ? 1 : targetCurrency.exchangeRates['USD'];

    if (totalExchanged >= 6000) {
      return Number(twoDecimalPlacesFormatter(minimumFee((amount * toTargetCurrencyRate) * 0.005)));
    } else {
      return Number(
        twoDecimalPlacesFormatter(
          minimumFee(((totalExchanged - 6000 + toUSD(amount, amountCurrency)) / fromUSDToTargetCurrencyRate) * 0.005)
        )
      );
    }
  }

  return 0;
};

export const calculateReverseFee = (amount, totalExchanged, amountCurrency) => {
  if (displayFee(toUSD(amount, amountCurrency), totalExchanged)) {
    const fromUSDtoAmountCurrencyRate = (amountCurrency.code === 'USD') ? 1 : amountCurrency.exchangeRates['USD'];

    if (totalExchanged >= 6000) {
      return Number(
        twoDecimalPlacesFormatter(
          minimumFee(
            ((toUSD(amount, amountCurrency) / 0.995) * 0.005) / fromUSDtoAmountCurrencyRate
          )
        )
      );
    } else {
      return Number(
        twoDecimalPlacesFormatter(
          minimumFee(
            ((((totalExchanged - 6000 + toUSD(amount, amountCurrency)) / 0.995) * 0.005) / fromUSDtoAmountCurrencyRate)
          )
        )
      );
    }
  }

  return 0;
};

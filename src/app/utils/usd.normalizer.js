import { twoDecimalPlacesFormatter } from './precision.formatter';

export const toUSD = (amount, currency) => {
  if (!amount) {
    return 0;
  }

  if (currency.code === 'USD') {
    return amount;
  }

  return Number(twoDecimalPlacesFormatter(amount * currency.exchangeRates['USD']));
};

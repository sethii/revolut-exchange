import { calculateFee, calculateReverseFee } from './fee.calculator';

describe('Fee calculator', () => {
  it('returns zero if no need to calculate', () => {
    const amount = 100;
    const totalExchanged = 10;
    const amountCurrency = {
      code: 'USD',
      exchangeRates: {
        EUR: 0.5
      }
    };

    const targetCurrency = {
      code: 'EUR',
      exchangeRates: {
        USD: 2.0
      }
    };

    expect(calculateFee(amount, totalExchanged, amountCurrency, targetCurrency)).toEqual(0)
  });

  it('returns minimum fee when total exchanged exceeded 6000 before amount was added', () => {
    const amount = 5;
    const totalExchanged = 7000;
    const amountCurrency = {
      code: 'USD',
      exchangeRates: {
        EUR: 0.5
      }
    };

    const targetCurrency = {
      code: 'EUR',
      exchangeRates: {
        USD: 2.0
      }
    };
    expect(calculateFee(amount, totalExchanged, amountCurrency, targetCurrency)).toEqual(0.01)
  });

  it('returns minimum fee when total exchanged exceeded 6000 after amount was added', () => {
    const amount = 8;
    const totalExchanged = 5997;
    const amountCurrency = {
      code: 'USD',
      exchangeRates: {
        EUR: 0.5
      }
    };

    const targetCurrency = {
      code: 'EUR',
      exchangeRates: {
        USD: 2.0
      }
    };

    expect(calculateFee(amount, totalExchanged, amountCurrency, targetCurrency)).toEqual(0.01)
  });

  it('calculates fee for USD', () => {
    const amount = 10;
    const totalExchanged = 6000;
    const amountCurrency = {
      code: 'EUR',
      exchangeRates: {
        USD: 2
      }
    };

    const targetCurrency = {
      code: 'USD',
      exchangeRates: {
        USD: 0.5
      }
    };

    expect(calculateFee(amount, totalExchanged, amountCurrency, targetCurrency)).toEqual(0.1)
  });

  it('calculates fee for non USD currency', () => {
    const amount = 10;
    const totalExchanged = 6000;
    const amountCurrency = {
      code: 'USD',
      exchangeRates: {
        EUR: 0.5
      }
    };

    const targetCurrency = {
      code: 'EUR',
      exchangeRates: {
        USD: 2.0
      }
    };

    expect(calculateFee(amount, totalExchanged, amountCurrency, targetCurrency)).toEqual(0.02)
  });

  it('returns zero when amount in non USD currency is lower than 6000 USD after conversion', () => {
    const amount = 6000;
    const totalExchanged = 0;
    const amountCurrency = {
      code: 'EUR',
      exchangeRates: {
        USD: 0.5
      }
    };

    const targetCurrency = {
      code: 'USD',
      exchangeRates: {
        EUR: 2.0
      }
    };

    expect(calculateFee(amount, totalExchanged, amountCurrency, targetCurrency)).toEqual(0)
  });

  it('returns zero if no need to calculate reverse fee', () => {
    const amount = 100;
    const totalExchanged = 0;
    const amountCurrency = {
      code: 'EUR',
      exchangeRates: {
        USD: 0.5
      }
    };

    expect(calculateReverseFee(amount, totalExchanged, amountCurrency)).toEqual(0);
  });

  it('it calculates reverse fee for USD currency', () => {
    const amount = 7000;
    const totalExchanged = 0;
    const amountCurrency = {
      code: 'USD',
      exchangeRates: {
        EUR: 0.5
      }
    };

    expect(calculateReverseFee(amount, totalExchanged, amountCurrency)).toEqual(5.02);
  });

  it('it calculates reverse fee for non USD currency', () => {
    const amount = 8000;
    const totalExchanged = 0;
    const amountCurrency = {
      code: 'EUR',
      exchangeRates: {
        USD: 0.83
      }
    };

    expect(calculateReverseFee(amount, totalExchanged, amountCurrency)).toEqual(3.87);
  });

  it('it returns minimum fee for reverse fee', () => {
    const amount = 7231;
    const totalExchanged = 0;
    const amountCurrency = {
      code: 'EUR',
      exchangeRates: {
        USD: 0.83
      }
    };

    expect(calculateReverseFee(amount, totalExchanged, amountCurrency)).toEqual(0.01);
  });
});

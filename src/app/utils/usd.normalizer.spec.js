import { toUSD } from './usd.normalizer';

describe('USD normalizer', () => {
  it('returns zero when no amount given', () => {
    const currency = {
      code: 'EUR',
      exchangeRates: {
        USD: 1.5
      }
    };

    expect(toUSD('', currency)).toEqual(0);
  });

  it('returns amount when USD given', () => {
    const currency = {
      code: 'USD',
      exchangeRates: {
        EUR: 1.5
      }
    };

    expect(toUSD(100, currency)).toEqual(100);
  });

  it('returns usd amount when amount in different currency given', () => {
    const currency = {
      code: 'EUR',
      exchangeRates: {
        USD: 1.5
      }
    };

    expect(toUSD(100, currency)).toEqual(150);
  });
});

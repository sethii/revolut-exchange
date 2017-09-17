import { calculateFromAmountByToAmount, calculateAmount, calculateAmountWithFee } from './amount.calculator';

describe('Amount calculator', () => {
  it('calculates from amount by to amount', () => {
    const amount = 100;
    const rate = 10;

    expect(calculateFromAmountByToAmount(amount, rate)).toEqual(1000)
  });

  it('calculates to amount by from amount', () => {
    const amount = 100;
    const rate = 10;
    const fee = 20;

    expect(calculateAmount(amount, rate, fee)).toEqual(980)
  });

  it('returns zero when amount is empty or zero', () => {
    expect(calculateAmountWithFee('', 100, 0.5)).toEqual(0);
    expect(calculateAmountWithFee(0, 100, 0.5)).toEqual(0);
  });

  it('calculates amount with fee', () => {
    const amount = 100;
    const rate = 0.5;
    const usdFee = 20;

    expect(calculateAmountWithFee(amount, usdFee, rate)).toEqual(140);
  })
});

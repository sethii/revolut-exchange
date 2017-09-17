import { twoDecimalPlacesFormatter, fourDecimalPlacesFormatter, precisionFormatter } from './precision.formatter';

describe('Precision formatter', () => {
  it('returns empty when empty amount given', () => {
    expect(precisionFormatter(2)('')).toEqual('');
  });

  it('returns exact amount when value finishing with . given', () => {
    expect(precisionFormatter(3)("123.")).toEqual("123.");
  });

  it('returns amount with expected numbers after comma', () => {
    expect(precisionFormatter(3)("123.45678")).toEqual("123.45");
  });

  it('returns amount with 2 places after comma', () => {
    expect(twoDecimalPlacesFormatter("123.45678")).toEqual("123.45");
  });

  it('returns amount with 4 places after comma', () => {
    expect(fourDecimalPlacesFormatter("123.45678")).toEqual("123.4567");
  });
});

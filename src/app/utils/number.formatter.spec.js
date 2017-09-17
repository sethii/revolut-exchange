import { numberFormatter, prefixedNumberFormatter } from './number.formatter';

describe('Number formatter', () => {
  it('replaces comma with dot', () => {
    expect(numberFormatter('123,35')).toEqual('123.35');
  });

  it('removes all characters except numbers and .', () => {
    expect(numberFormatter('asdc123.34')).toEqual('123.34');
  });

  it('removes leading zero if it is only character', () => {
    expect(numberFormatter('01')).toEqual('1');
  });

  it('keeps leading zero if it is part of number', () => {
    expect(numberFormatter('0.1')).toEqual('0.1');
  });

  it('formats number to two decimals', () => {
    expect(numberFormatter('0.1456')).toEqual('0.14');
  });

  it('prefixs number', () => {
    expect(prefixedNumberFormatter('0.1456', '+')).toEqual('+0.14');
  });
});

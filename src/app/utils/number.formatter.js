import { twoDecimalPlacesFormatter } from './precision.formatter';

const replaceComma = (text) => text.replace(',', '.');
const stripUnsupportedCharacters = (text) => text.replace(/[^0-9.]/gi, '');
const stripLeadingZero = (text) => {
  if (text.toString()[0] === '0' && !/[.]/.test(text) && text.length > 1) {
    return text.substr(1);
  }

  return text;
};

export const numberFormatter = (text) => {
  return twoDecimalPlacesFormatter(stripLeadingZero(stripUnsupportedCharacters(replaceComma(text.toString()))));
};

export const prefixedNumberFormatter = (text, prefix) => {
  if (text.length > 0) {
    return prefix + numberFormatter(text);
  }

  return numberFormatter(text);
};

export const precisionFormatter = (decimalPlaces) => (amount) => {
  if (amount === '') {
    return '';
  }

  if (amount.toString()[amount.toString().length - 1] === '.') {
    return amount;
  }

  const numberExploded = amount.toString().split('.');
  const length = numberExploded[0].length + decimalPlaces;

  return amount.toString().substr(0, length);
};

export const twoDecimalPlacesFormatter = precisionFormatter(3);
export const fourDecimalPlacesFormatter = precisionFormatter(5);

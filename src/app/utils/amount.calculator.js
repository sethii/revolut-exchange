export const calculateAmount = (amount, rate, fee) => amount * rate - fee;
export const calculateFromAmountByToAmount = (amount, rate) => amount * rate;
export const calculateAmountWithFee = (amount, usdFee, rate) => {
  if (!amount) {
    return 0;
  }

  return Number(amount) + (usdFee/rate);
};

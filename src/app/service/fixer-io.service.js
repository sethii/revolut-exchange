class FixerIOService {
  fetchRates(currency = 'USD') {
    return fetch(`https://api.fixer.io/latest?base=${currency}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .catch(error => ({
        error: true,
        content: error
      }));
  }
}

export const fixerIOService = new FixerIOService();

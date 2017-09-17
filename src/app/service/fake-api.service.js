class ApiService {
  loadWallets() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
            USD: {
              code: 'USD',
              amount: 50000
            }
          }
        )
      }, 5000);
    })
  }
}

export const apiService = new ApiService();

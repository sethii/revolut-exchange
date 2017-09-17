import { createEmptyWallet } from './wallet.factory';

describe('Wallet factory', () => {
  it('creates empty wallet', () => {
    expect(createEmptyWallet('USD')).toEqual({
      code: 'USD',
      amount: 0
    })
  });
});

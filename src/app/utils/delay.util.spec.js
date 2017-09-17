import { delay } from './delay.util';

describe('Delay', () => {
  it('it delays', (done) => {
    delay(500).then(() => done())
  });
});

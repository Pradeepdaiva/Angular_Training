import { TestingPipePipe } from './testing-pipe.pipe';

describe('TestingPipePipe', () => {
  it('create an instance', () => {
    const pipe = new TestingPipePipe();
    expect(pipe).toBeTruthy();
  });
});

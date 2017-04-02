import { OrderByPublishDatePipe } from './order-by-publish-date.pipe';

describe('OrderByPublishDatePipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPublishDatePipe();
    expect(pipe).toBeTruthy();
  });
});

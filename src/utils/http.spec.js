import getJson from './http';

const stub = {
  'response': 'something',
}
const url = stub;

describe('getJson', () => {
  it('should return a json', () => {
    expect(getJson(stub)).toBe(stub);
  })
})

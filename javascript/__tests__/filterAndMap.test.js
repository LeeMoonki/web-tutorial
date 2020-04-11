const { getProductsWithPriceLowerThan, getProductsWithDiscount } = require('../filterAndMap');

describe('filter를 테스트합니다.', () => {
  const products = [
    { id: 1, name: '장난감', price: 8000 },
    { id: 2, name: '신발', price: 20000 },
    { id: 3, name: '컴퓨터', price: 100000 },
    { id: 4, name: '갈비', price: 15000 },
    { id: 5, name: '시계', price: 10000 },
    { id: 6, name: '안경', price: 32000 },
  ];

  it('getProductsWithPriceLowerThan 함수를 테스트합니다.', () => {
    expect(getProductsWithPriceLowerThan(15000, products)).toEqual([
      { id: 1, name: '장난감', price: 8000 },
      { id: 5, name: '시계', price: 10000 },
    ]);
  });

  it('getProductsWithDiscount 함수를 테스트합니다.', () => {
    expect(getProductsWithDiscount(0.3, products)).toEqual([
      { id: 1, name: '장난감', price: 8000, discountedPrice: 8000 * 0.3 },
      { id: 2, name: '신발', price: 20000, discountedPrice: 20000 * 0.3 },
      { id: 3, name: '컴퓨터', price: 100000, discountedPrice:100000 * 0.3 },
      { id: 4, name: '갈비', price: 15000, discountedPrice: 15000 * 0.3 },
      { id: 5, name: '시계', price: 10000, discountedPrice: 10000 * 0.3 },
      { id: 6, name: '안경', price: 32000, discountedPrice: 32000 * 0.3 },
    ]);
  });
});

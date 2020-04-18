
/**
 * getProductsWithPriceLowerThan 함수를 구현합니다.
 * 
 * getProductsWithPriceLowerThan(price, products) 의 형태로 생긴 이 함수는 다음과 같이 사용합니다.
 * 
 * getProductsWithPriceLowerThan(10000, products);
 * 
 * 이 함수는 products에서 price가 10000 보다 작은 값을들 반환합니다.
 */

// 예를 들어 products는 다음과 같이 생겼습니다.
/**
 * products = [
 *  { id: 1, name: '장난감', price: 8000 },
 *  ...
 * ];
 */
const products = [
  { id: 1, name: '장난감', price: 8000 },
  { id: 2, name: '신발', price: 20000 },
  { id: 3, name: '컴퓨터', price: 100000 },
  { id: 4, name: '갈비', price: 15000 },
  { id: 5, name: '시계', price: 10000 },
  { id: 6, name: '안경', price: 32000 },
];

function getProductsWithPriceLowerThan(price, products) {
  const filtered = products.filter((val) => (val.price < price));

  return filtered;
}


/**
 * getProductsWithDiscount 함수를 구현합니다.
 * 
 * getProductsWithDiscount(discount, products) 의 형태로 생긴 이 함수는 다음과 같이 사용합니다.
 * 
 * getProductsWithDiscount(0.3, products);
 * 
 * 이 함수는 30%(0.3) 할인이 적용된 새로운 값을 discountedPrice라는 값에 넣어 새로운 객체로 만듭니다.
 */

// 예를 들어 products는 다음과 같이 생겼습니다.
/**
 * products = [
 *  { id: 1, name: '장난감', price: 10000 },
 *  ...
 * ];
 */

// 예를 들어 getProductsWithDiscount(0.3, products) 의 결과는 다음과 같습니다.
/**
 * products = [
 *  { id: 1, name: '장난감', price: 10000, discountedPrice: 7000 },
 *  ...
 * ];
 */

function getProductsWithDiscount(discount, products) {
  const val = products.map(v => v.price * discount);

  for (let k in products) {
    products[k].discountedPrice = val[k];
  }

  return products;
}

// function getProductsWithDiscount(discount, products) {
//   const result = products.map(p => ({
//     ...p,
//     discountedPrice: p.price * discount,
//   }));

//   return result;
// }

getProductsWithPriceLowerThan(15000,products);
getProductsWithDiscount(0.3, products);

module.exports = {
  getProductsWithPriceLowerThan,
  getProductsWithDiscount
};

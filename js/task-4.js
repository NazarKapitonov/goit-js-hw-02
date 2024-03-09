// Можливе вирішення таким чином!
// Variant 1
// function getShippingCost(country) {
//   switch (country) {
//     case 'China':
//       return `Shipping to ${country} will cost 100 credits`;
//     case 'Chile':
//       return `Shipping to ${country} will cost 250 credits`;
//     case 'Australia':
//       return `Shipping to ${country} will cost 170 credits`;
//     case 'Jamaica':
//       return `Shipping to ${country} will cost 120 credits`;
//     default:
//       return 'Sorry, there is no delivery to your country';
//   }
// }

// console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

// Variant 2
function getShippingCost(country, price) {
  switch (country) {
    case 'China':
      return `Shipping to ${country} will cost ${price} credits`;
    case 'Chile':
      return `Shipping to ${country} will cost ${price} credits`;
    case 'Australia':
      return `Shipping to ${country} will cost ${price} credits`;
    case 'Jamaica':
      return `Shipping to ${country} will cost ${price} credits`;
    default:
      return 'Sorry, there is no delivery to your country';
  }
}

console.log(getShippingCost('Australia', '170')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China', '100')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile', '250')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica', '120')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

// Variant 3
// function getShippingCost(country, price) {
//   function dynamicString(a, b) {
//     return `Shipping to ${a} will cost ${b} credits`;
//   }
//   switch (country) {
//     case 'China':
//       return dynamicString(country, price);
//     case 'Chile':
//       return dynamicString(country, price);
//     case 'Australia':
//       return dynamicString(country, price);
//     case 'Jamaica':
//       return dynamicString(country, price);
//     default:
//       return 'Sorry, there is no delivery to your country';
//   }
// }

// console.log(getShippingCost('Australia', '170')); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost('China', '100')); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost('Chile', '250')); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost('Jamaica', '120')); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

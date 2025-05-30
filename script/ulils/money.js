// we create a function which is used in two different files
export function formateCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);

}
export default formateCurrency;
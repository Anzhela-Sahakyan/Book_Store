export default function isNumber(value: string) {
  const numberPatter = /^[+-]?\d+(\.\d+)?$/;
  return numberPatter.test(value);
}

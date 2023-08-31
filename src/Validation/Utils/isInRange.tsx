export default function isInRange(
  value: string,
  min = Number.NEGATIVE_INFINITY,
  max: number = Number.POSITIVE_INFINITY
) {
  const number = Number(value);
  return number >= min && number <= max;
}

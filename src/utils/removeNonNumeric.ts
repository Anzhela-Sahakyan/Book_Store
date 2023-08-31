export function removeNonNumeric(value: string): string {
  return value.replace(/\D/g, "");
}

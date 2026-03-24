export function localizeDigits(
  number: number | string,
  numerals: string | string[]
): string {
  if (!number) return "";
  const numStr = number.toString();

  if (!numerals || numerals.length < 10) {
    return numStr;
  }

  // If provided as a string "0123456789", accessing by index works same as array
  return numStr.replace(/\d/g, (digit) => numerals[parseInt(digit, 10)]);
}

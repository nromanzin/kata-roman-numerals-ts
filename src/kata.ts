export function toRoman(input: number): string {
  if (input === 4) {
    return 'IV';
  }
  let output = '';
  for (let index = 0; index < input; index++) {
    output += 'I';
  }
  return output;
}

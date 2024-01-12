export function toRoman(input: number): string {
  let output = '';
  for (let index = 0; index < input; index++) {
    output += 'I';
  }
  return output;
}

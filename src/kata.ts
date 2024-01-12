type Mapping = {
  arab: number;
  roman: string;
};
const conversionMap: Mapping[] = [
  { arab: 1000, roman: 'M' },
  { arab: 900, roman: 'CM' },
  { arab: 500, roman: 'D' },
  { arab: 400, roman: 'CD' },
  { arab: 100, roman: 'C' },
  { arab: 90, roman: 'XC' },
  { arab: 50, roman: 'L' },
  { arab: 40, roman: 'XL' },
  { arab: 10, roman: 'X' },
  { arab: 9, roman: 'IX' },
  { arab: 5, roman: 'V' },
  { arab: 4, roman: 'IV' },
  { arab: 1, roman: 'I' },
];

export function toRoman(input: number): string {
  let output = '';
  while (input > 0) {
    const closestInferiorMapping = conversionMap.find(
      (entry: Mapping) => entry.arab <= input
    );
    output += closestInferiorMapping!.roman;
    input -= closestInferiorMapping!.arab;
  }
  return output;
}

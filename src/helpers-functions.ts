export function formattedNumber(value: number): number {
  return Math.ceil(value * 100) / 100;
}

export function numberToPrice(value: number): string {
  // format: $91,980.00
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function formattedNumber(value: number): number {
  return Math.ceil(value * 100) / 100;
}

/**
 * return format: $91,980.00
 * @param value
 */
export function numberToPrice(value: number): string {
  let num = formattedNumber(value);
  return num.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

/**
 * get savings %
 * format: 71.43%
 */
export function getSavingsPercent(savings: number): string {
  return formattedNumber(savings * 100) + "%";
}

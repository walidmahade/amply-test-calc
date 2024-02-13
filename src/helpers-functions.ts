function formattedNumber(value: number): number {
  return Math.ceil(value * 100) / 100;
}

/**
 * return format: $91,980.00
 * @param value
 */
function numberToPrice(value: number): string {
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
function getSavingsPercent(savings: number): string {
  return (savings * 100).toFixed(2) + "%";
}

export { formattedNumber, numberToPrice, getSavingsPercent };

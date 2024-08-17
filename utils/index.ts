export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}

export function yearsSince(year: number, month: number): number {
  const start = new Date(year, month - 1)
  const now = new Date()
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())
  return Math.round(months / 12)
}

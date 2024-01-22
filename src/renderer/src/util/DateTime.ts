const FORMATTER = new Intl.DateTimeFormat(window.context.locale, {
  dateStyle: "short",
  timeStyle: "short",
})

export function formatMs(ms: number): string {
  return FORMATTER.format(ms)
}

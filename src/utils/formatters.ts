export const formatCurrency = (
  value: number,
  currency: string,
  locale: string
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
};

export const formatDate = (date: string, locale: string) => {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
};

export const CURRENCIES = ["PLN", "EUR", "USD", "NOK"] as const;

export type Currency = (typeof CURRENCIES)[number];

export type NbpRate = {
  no: string;
  effectiveDate: string;
  mid: number;
};

export type NbpRateRangeResponse = {
  table: string;
  currency: string;
  code: string;
  rates: NbpRate[];
};

export type NbpTableRate = {
  currency: string;
  code: string;
  mid: number;
};

export type NbpTableSingleDateResponse = {
  table: string;
  no: string;
  effectiveDate: string;
  rates: NbpTableRate[];
};

export type RatesByDate = Record<string, Record<Currency, number>>;

export const TARGET_CURRENCIES: Set<string> = new Set(["EUR", "USD", "NOK"]);

export const subtractDays = (dateStr: string, days: number): string => {
  const date = new Date(dateStr);
  date.setUTCDate(date.getUTCDate() - days);
  return date.toISOString().split("T")[0];
};

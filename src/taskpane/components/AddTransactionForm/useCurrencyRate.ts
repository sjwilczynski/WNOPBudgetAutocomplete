import { useQuery } from "@tanstack/react-query";

export const CURRENCIES = ["PLN", "EUR", "USD", "NOK"] as const;

export type Currency = (typeof CURRENCIES)[number];

type NbpRate = {
  no: string;
  effectiveDate: string;
  mid: number;
};

type NbpRateRangeResponse = {
  table: string;
  currency: string;
  code: string;
  rates: NbpRate[];
};

const subtractDays = (dateStr: string, days: number): string => {
  const date = new Date(dateStr);
  date.setUTCDate(date.getUTCDate() - days);
  return date.toISOString().split("T")[0];
};

const fetchClosestCurrencyRate = async (
  currency: string,
  targetDate: string
): Promise<{ rate: number; dateMessage: string }> => {
  const endDate = targetDate;
  const startDate = subtractDays(targetDate, 4);

  const apiUrl = `https://api.nbp.pl/api/exchangerates/rates/A/${currency.toLowerCase()}/${startDate}/${endDate}?format=json`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch rate: ${response.status}`);
  }

  const data: NbpRateRangeResponse = await response.json();

  if (data?.rates && data.rates.length > 0) {
    const closestRate = data.rates[data.rates.length - 1];
    const message = closestRate.effectiveDate === targetDate ? "" : closestRate.effectiveDate;

    return { rate: closestRate.mid, dateMessage: message };
  }

  throw new Error(`No exchange rate found for ${currency} up to ${targetDate} within the NBP API`);
};

export const useCurrencyRate = (currency: Currency, targetDate: string | null) => {
  const enabled = currency !== "PLN" && targetDate !== null;

  return useQuery<{ rate: number; dateMessage: string }, Error>({
    queryKey: ["currencyRate", currency, targetDate],
    queryFn: () => fetchClosestCurrencyRate(currency, targetDate!),
    enabled: enabled,
    staleTime: 1000 * 60 * 60 * 24,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

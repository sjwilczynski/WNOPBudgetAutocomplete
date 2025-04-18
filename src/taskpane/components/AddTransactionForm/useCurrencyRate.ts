import { useQuery } from "@tanstack/react-query";

export const CURRENCIES = ["PLN", "EUR", "USD", "NOK"] as const;

export type Currency = (typeof CURRENCIES)[number];

type NbpRateResponse = {
  table: string;
  currency: string;
  code: string;
  rates: {
    no: string;
    effectiveDate: string;
    mid: number;
  }[];
};

const fetchCurrencyRate = async (currency: string, date: string): Promise<number> => {
  const apiUrl = `https://api.nbp.pl/api/exchangerates/rates/A/${currency.toLowerCase()}/${date}?format=json`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch rate: ${response.status}`);
  }

  const data: NbpRateResponse = await response.json();

  if (data?.rates?.[0]?.mid) {
    return data.rates[0].mid;
  } else {
    throw new Error("Invalid API response structure received from NBP.");
  }
};

export const useCurrencyRate = (currency: Currency, date: string | null) => {
  // The query is enabled only if currency is not PLN and date is provided
  const enabled = currency !== "PLN" && date !== null;

  return useQuery<number, Error>({
    queryKey: ["currencyRate", currency, date],
    queryFn: () => fetchCurrencyRate(currency, date!),
    enabled: enabled,
    staleTime: 1000 * 60 * 60 * 24,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

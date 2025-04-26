import { useQuery } from "@tanstack/react-query";
import { subtractDays } from "./common";
import type { Currency, NbpRateRangeResponse } from "./common";

const fetchClosestCurrencyRate = async (
  currency: string,
  targetDate: string
): Promise<NbpRateRangeResponse> => {
  const endDate = targetDate;
  const startDate = subtractDays(targetDate, 4);

  const apiUrl = `https://api.nbp.pl/api/exchangerates/rates/A/${currency.toLowerCase()}/${startDate}/${endDate}?format=json`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch rate: ${response.status}`);
  }

  const data: NbpRateRangeResponse = await response.json();

  if (data?.rates && data.rates.length > 0) {
    return data;
  }

  throw new Error(`No exchange rate found for ${currency} up to ${targetDate} within the NBP API`);
};

export const useCurrencyRate = (currency: Currency, targetDate: string | null) => {
  const enabled = currency !== "PLN" && targetDate !== null;

  const { data, isLoading, isError } = useQuery<NbpRateRangeResponse, Error>({
    queryKey: ["currencyRate", currency, targetDate],
    queryFn: () => fetchClosestCurrencyRate(currency, targetDate!),
    enabled,
    staleTime: 1000 * 60 * 60 * 24,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const closestRate = data?.rates[data?.rates.length - 1];
  const message = closestRate?.effectiveDate === targetDate ? "" : closestRate?.effectiveDate;

  const processedData = { rate: closestRate?.mid, dateMessage: message };

  return { data: processedData, isLoading, isError };
};

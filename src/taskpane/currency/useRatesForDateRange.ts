import * as React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { subtractDays, TARGET_CURRENCIES } from "./common";
import type { NbpTableSingleDateResponse, RatesByDate, Currency } from "./common";

const fetchTableForRange = async (
  startDate: string,
  endDate: string
): Promise<NbpTableSingleDateResponse[]> => {
  const apiUrl = `https://api.nbp.pl/api/exchangerates/tables/A/${startDate}/${endDate}/?format=json`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch table A range: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

export const useRatesForDateRange = (endDate: string | null) => {
  const startDate = endDate ? subtractDays(endDate, 6) : null;

  const { data: dailyTables } = useSuspenseQuery<NbpTableSingleDateResponse[], Error>({
    queryKey: ["ratesTableRange", startDate, endDate],
    queryFn: () => fetchTableForRange(startDate!, endDate!),
    staleTime: 1000 * 60 * 60 * 24,
    retry: 1,
    refetchOnWindowFocus: true,
  });

  const ratesByDate: RatesByDate = React.useMemo(() => {
    if (!dailyTables) {
      return {};
    }

    const processedRates: RatesByDate = {};

    dailyTables.forEach((table) => {
      const date = table.effectiveDate;
      processedRates[date] = {
        PLN: 1,
        EUR: 0,
        USD: 0,
        NOK: 0,
      };

      table.rates.forEach((rate) => {
        if (TARGET_CURRENCIES.has(rate.code)) {
          processedRates[date][rate.code as Exclude<Currency, "PLN">] = rate.mid;
        }
      });
    });

    return processedRates;
  }, [dailyTables]);

  return { ratesByDate };
};

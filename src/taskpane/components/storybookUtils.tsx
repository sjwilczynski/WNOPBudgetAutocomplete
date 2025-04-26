import type { Decorator, StoryContext } from "@storybook/react";
import { http, HttpResponse } from "msw";
import * as React from "react";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { ExcelProvider } from "../context/ExcelContext";
import { fn } from "@storybook/test";
import {
  mockRatesNOK,
  mockRatesEUR,
  mockRatesUSD,
  mockTodayTable,
} from "../currency/currencyMocks";

const allMockRates = {
  usd: mockRatesUSD,
  eur: mockRatesEUR,
  nok: mockRatesNOK,
};

type MockCurrencyCode = keyof typeof allMockRates;

export const nbpApiSingleHandler = http.get(
  "https://api.nbp.pl/api/exchangerates/rates/A/:currency/:startDate/:endDate",
  ({ params }) => {
    const { currency, startDate, endDate } = params;

    if (
      typeof currency !== "string" ||
      typeof startDate !== "string" ||
      typeof endDate !== "string"
    ) {
      return new HttpResponse("Invalid URL parameters (expected strings)", { status: 400 });
    }

    const requestedCurrencyCode = currency.toLowerCase() as MockCurrencyCode;

    if (!(requestedCurrencyCode in allMockRates)) {
      return new HttpResponse(null, {
        status: 404,
        statusText: `Mock data not found for currency: ${currency}`,
      });
    }

    const mockData = allMockRates[requestedCurrencyCode];

    const filteredRates = mockData.rates.filter(
      (rate) => rate.effectiveDate >= startDate && rate.effectiveDate <= endDate
    );

    return HttpResponse.json({
      ...mockData,
      rates: filteredRates,
    });
  }
);

export const nbpApiAllCurrenciesHandler = http.get(
  "https://api.nbp.pl/api/exchangerates/tables/A/:startDate/:endDate",
  ({ params }) => {
    const { startDate, endDate } = params;

    if (typeof startDate !== "string" || typeof endDate !== "string") {
      return new HttpResponse("Invalid URL parameters (expected strings)", { status: 400 });
    }

    return HttpResponse.json(
      mockTodayTable.filter(
        (rate) => rate.effectiveDate >= startDate && rate.effectiveDate <= endDate
      )
    );
  }
);

export const nbpApiSingleHandlerError = http.get(
  "https://api.nbp.pl/api/exchangerates/rates/A/:currency/:startDate/:endDate",
  () => {
    return new HttpResponse("Error", { status: 500 });
  }
);

export const nbpApiAllCurrenciesHandlerError = http.get(
  "https://api.nbp.pl/api/exchangerates/tables/A/:startDate/:endDate",
  () => {
    return new HttpResponse("Error", { status: 500 });
  }
);

const queryClient = new QueryClient();

export const submitTransactionMock = fn();

export const excelDecorator: Decorator = (Story, context: StoryContext) => {
  const { month, year } = context.parameters.excel || { month: "January", year: 2025 };

  return (
    <ExcelProvider submitTransaction={submitTransactionMock} month={month} year={year}>
      <Story />
    </ExcelProvider>
  );
};

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const ResetQueries = () => {
  const queryClient = useQueryClient();

  React.useEffect(() => {
    return () => {
      queryClient.resetQueries();
    };
  }, [queryClient]);

  return null;
};

export const reactQueryDecorator: Decorator = (Story) => (
  <ReactQueryProvider>
    <Story />
    <ResetQueries />
  </ReactQueryProvider>
);

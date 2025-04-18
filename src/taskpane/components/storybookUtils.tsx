import type { Decorator } from "@storybook/react/*";
import { http, HttpResponse } from "msw";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ExcelProvider } from "../context/ExcelContext";
import { fn } from "@storybook/test";

const mockRatesUSD = {
  table: "A",
  currency: "dolar amerykański",
  code: "USD",
  rates: [
    { no: "001/A/NBP/2025", effectiveDate: "2025-01-02", mid: 4.1219 },
    { no: "002/A/NBP/2025", effectiveDate: "2025-01-03", mid: 4.1512 },
    { no: "003/A/NBP/2025", effectiveDate: "2025-01-07", mid: 4.077 },
    { no: "004/A/NBP/2025", effectiveDate: "2025-01-08", mid: 4.1335 },
    { no: "005/A/NBP/2025", effectiveDate: "2025-01-09", mid: 4.1523 },
    { no: "006/A/NBP/2025", effectiveDate: "2025-01-10", mid: 4.1415 },
    { no: "007/A/NBP/2025", effectiveDate: "2025-01-13", mid: 4.1904 },
    { no: "008/A/NBP/2025", effectiveDate: "2025-01-14", mid: 4.1658 },
    { no: "009/A/NBP/2025", effectiveDate: "2025-01-15", mid: 4.133 },
    { no: "010/A/NBP/2025", effectiveDate: "2025-01-16", mid: 4.1433 },
    { no: "011/A/NBP/2025", effectiveDate: "2025-01-17", mid: 4.1462 },
    { no: "012/A/NBP/2025", effectiveDate: "2025-01-20", mid: 4.1321 },
    { no: "013/A/NBP/2025", effectiveDate: "2025-01-21", mid: 4.1101 },
    { no: "014/A/NBP/2025", effectiveDate: "2025-01-22", mid: 4.0646 },
    { no: "015/A/NBP/2025", effectiveDate: "2025-01-23", mid: 4.0515 },
    { no: "016/A/NBP/2025", effectiveDate: "2025-01-24", mid: 4.0124 },
    { no: "017/A/NBP/2025", effectiveDate: "2025-01-27", mid: 4.021 },
    { no: "018/A/NBP/2025", effectiveDate: "2025-01-28", mid: 4.0337 },
    { no: "019/A/NBP/2025", effectiveDate: "2025-01-29", mid: 4.0443 },
    { no: "020/A/NBP/2025", effectiveDate: "2025-01-30", mid: 4.0393 },
    { no: "021/A/NBP/2025", effectiveDate: "2025-01-31", mid: 4.0576 },
  ],
};
const mockRatesEUR = {
  table: "A",
  currency: "euro",
  code: "EUR",
  rates: [
    { no: "001/A/NBP/2025", effectiveDate: "2025-01-02", mid: 4.2668 },
    { no: "002/A/NBP/2025", effectiveDate: "2025-01-03", mid: 4.2718 },
    { no: "003/A/NBP/2025", effectiveDate: "2025-01-07", mid: 4.2515 },
    { no: "004/A/NBP/2025", effectiveDate: "2025-01-08", mid: 4.2656 },
    { no: "005/A/NBP/2025", effectiveDate: "2025-01-09", mid: 4.2794 },
    { no: "006/A/NBP/2025", effectiveDate: "2025-01-10", mid: 4.2657 },
    { no: "007/A/NBP/2025", effectiveDate: "2025-01-13", mid: 4.2715 },
    { no: "008/A/NBP/2025", effectiveDate: "2025-01-14", mid: 4.2737 },
    { no: "009/A/NBP/2025", effectiveDate: "2025-01-15", mid: 4.2611 },
    { no: "010/A/NBP/2025", effectiveDate: "2025-01-16", mid: 4.262 },
    { no: "011/A/NBP/2025", effectiveDate: "2025-01-17", mid: 4.2691 },
    { no: "012/A/NBP/2025", effectiveDate: "2025-01-20", mid: 4.2587 },
    { no: "013/A/NBP/2025", effectiveDate: "2025-01-21", mid: 4.2554 },
    { no: "014/A/NBP/2025", effectiveDate: "2025-01-22", mid: 4.2461 },
    { no: "015/A/NBP/2025", effectiveDate: "2025-01-23", mid: 4.2182 },
    { no: "016/A/NBP/2025", effectiveDate: "2025-01-24", mid: 4.21 },
    { no: "017/A/NBP/2025", effectiveDate: "2025-01-27", mid: 4.2176 },
    { no: "018/A/NBP/2025", effectiveDate: "2025-01-28", mid: 4.2092 },
    { no: "019/A/NBP/2025", effectiveDate: "2025-01-29", mid: 4.2077 },
    { no: "020/A/NBP/2025", effectiveDate: "2025-01-30", mid: 4.2039 },
    { no: "021/A/NBP/2025", effectiveDate: "2025-01-31", mid: 4.213 },
  ],
};
const mockRatesNOK = {
  table: "A",
  currency: "korona norweska",
  code: "NOK",
  rates: [
    { no: "001/A/NBP/2025", effectiveDate: "2025-01-02", mid: 0.3633 },
    { no: "002/A/NBP/2025", effectiveDate: "2025-01-03", mid: 0.3644 },
    { no: "003/A/NBP/2025", effectiveDate: "2025-01-07", mid: 0.3617 },
    { no: "004/A/NBP/2025", effectiveDate: "2025-01-08", mid: 0.3646 },
    { no: "005/A/NBP/2025", effectiveDate: "2025-01-09", mid: 0.3639 },
    { no: "006/A/NBP/2025", effectiveDate: "2025-01-10", mid: 0.3625 },
    { no: "007/A/NBP/2025", effectiveDate: "2025-01-13", mid: 0.364 },
    { no: "008/A/NBP/2025", effectiveDate: "2025-01-14", mid: 0.3651 },
    { no: "009/A/NBP/2025", effectiveDate: "2025-01-15", mid: 0.3643 },
    { no: "010/A/NBP/2025", effectiveDate: "2025-01-16", mid: 0.3644 },
    { no: "011/A/NBP/2025", effectiveDate: "2025-01-17", mid: 0.3641 },
    { no: "012/A/NBP/2025", effectiveDate: "2025-01-20", mid: 0.3616 },
    { no: "013/A/NBP/2025", effectiveDate: "2025-01-21", mid: 0.3607 },
    { no: "014/A/NBP/2025", effectiveDate: "2025-01-22", mid: 0.361 },
    { no: "015/A/NBP/2025", effectiveDate: "2025-01-23", mid: 0.3587 },
    { no: "016/A/NBP/2025", effectiveDate: "2025-01-24", mid: 0.3579 },
    { no: "017/A/NBP/2025", effectiveDate: "2025-01-27", mid: 0.3578 },
    { no: "018/A/NBP/2025", effectiveDate: "2025-01-28", mid: 0.3577 },
    { no: "019/A/NBP/2025", effectiveDate: "2025-01-29", mid: 0.357 },
    { no: "020/A/NBP/2025", effectiveDate: "2025-01-30", mid: 0.3571 },
    { no: "021/A/NBP/2025", effectiveDate: "2025-01-31", mid: 0.3582 },
  ],
};

const allMockRates = {
  usd: mockRatesUSD,
  eur: mockRatesEUR,
  nok: mockRatesNOK,
};

type MockCurrencyCode = keyof typeof allMockRates;

export const nbpApiHandler = http.get(
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
      (rate: { effectiveDate: string; mid: number }) =>
        rate.effectiveDate >= startDate && rate.effectiveDate <= endDate
    );

    return HttpResponse.json({
      ...mockData,
      rates: filteredRates,
    });
  }
);

export const nbpApiHandlerError = http.get(
  "https://api.nbp.pl/api/exchangerates/rates/A/:currency/:startDate/:endDate",
  () => {
    return new HttpResponse("Error", { status: 500 });
  }
);

const queryClient = new QueryClient();

export const submitTransactionMock = fn();

export const excelDecorator: Decorator = (Story) => (
  <ExcelProvider submitTransaction={submitTransactionMock} month="January" year={2025}>
    <Story />
  </ExcelProvider>
);

export const reactQueryDecorator: Decorator = (Story) => (
  <QueryClientProvider client={queryClient}>
    <Story />
  </QueryClientProvider>
);

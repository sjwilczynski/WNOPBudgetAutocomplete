import type { NbpRateRangeResponse, NbpTableSingleDateResponse } from "./common";

export const mockRatesUSD: NbpRateRangeResponse = {
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
export const mockRatesEUR: NbpRateRangeResponse = {
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
export const mockRatesNOK: NbpRateRangeResponse = {
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

export const mockTodayTable: NbpTableSingleDateResponse[] = [
  {
    table: "A",
    no: "042/A/NBP/2025",
    effectiveDate: "2025-03-03",
    rates: [
      {
        currency: "bat (Tajlandia)",
        code: "THB",
        mid: 0.1174,
      },
      {
        currency: "dolar amerykański",
        code: "USD",
        mid: 4.0112,
      },
      {
        currency: "dolar australijski",
        code: "AUD",
        mid: 2.4967,
      },
      {
        currency: "dolar Hongkongu",
        code: "HKD",
        mid: 0.5159,
      },
      {
        currency: "dolar kanadyjski",
        code: "CAD",
        mid: 2.7806,
      },
      {
        currency: "dolar nowozelandzki",
        code: "NZD",
        mid: 2.2496,
      },
      {
        currency: "dolar singapurski",
        code: "SGD",
        mid: 2.9754,
      },
      {
        currency: "euro",
        code: "EUR",
        mid: 4.1827,
      },
      {
        currency: "forint (Węgry)",
        code: "HUF",
        mid: 0.010406,
      },
      {
        currency: "frank szwajcarski",
        code: "CHF",
        mid: 4.4528,
      },
      {
        currency: "funt szterling",
        code: "GBP",
        mid: 5.0656,
      },
      {
        currency: "hrywna (Ukraina)",
        code: "UAH",
        mid: 0.0964,
      },
      {
        currency: "jen (Japonia)",
        code: "JPY",
        mid: 0.026681,
      },
      {
        currency: "korona czeska",
        code: "CZK",
        mid: 0.1667,
      },
      {
        currency: "korona duńska",
        code: "DKK",
        mid: 0.5608,
      },
      {
        currency: "korona islandzka",
        code: "ISK",
        mid: 0.028708,
      },
      {
        currency: "korona norweska",
        code: "NOK",
        mid: 0.3577,
      },
      {
        currency: "korona szwedzka",
        code: "SEK",
        mid: 0.3754,
      },
      {
        currency: "lej rumuński",
        code: "RON",
        mid: 0.8402,
      },
      {
        currency: "lew (Bułgaria)",
        code: "BGN",
        mid: 2.1386,
      },
      {
        currency: "lira turecka",
        code: "TRY",
        mid: 0.1099,
      },
      {
        currency: "nowy izraelski szekel",
        code: "ILS",
        mid: 1.1121,
      },
      {
        currency: "peso chilijskie",
        code: "CLP",
        mid: 0.004179,
      },
      {
        currency: "peso filipińskie",
        code: "PHP",
        mid: 0.0693,
      },
      {
        currency: "peso meksykańskie",
        code: "MXN",
        mid: 0.1963,
      },
      {
        currency: "rand (Republika Południowej Afryki)",
        code: "ZAR",
        mid: 0.2152,
      },
      {
        currency: "real (Brazylia)",
        code: "BRL",
        mid: 0.6816,
      },
      {
        currency: "ringgit (Malezja)",
        code: "MYR",
        mid: 0.8982,
      },
      {
        currency: "rupia indonezyjska",
        code: "IDR",
        mid: 0.0002434,
      },
      {
        currency: "rupia indyjska",
        code: "INR",
        mid: 0.045915,
      },
      {
        currency: "won południowokoreański",
        code: "KRW",
        mid: 0.00275,
      },
      {
        currency: "yuan renminbi (Chiny)",
        code: "CNY",
        mid: 0.5503,
      },
      {
        currency: "SDR (MFW)",
        code: "XDR",
        mid: 5.259,
      },
    ],
  },
  {
    table: "A",
    no: "043/A/NBP/2025",
    effectiveDate: "2025-03-04",
    rates: [
      {
        currency: "bat (Tajlandia)",
        code: "THB",
        mid: 0.1168,
      },
      {
        currency: "dolar amerykański",
        code: "USD",
        mid: 3.9543,
      },
      {
        currency: "dolar australijski",
        code: "AUD",
        mid: 2.4602,
      },
      {
        currency: "dolar Hongkongu",
        code: "HKD",
        mid: 0.5086,
      },
      {
        currency: "dolar kanadyjski",
        code: "CAD",
        mid: 2.7413,
      },
      {
        currency: "dolar nowozelandzki",
        code: "NZD",
        mid: 2.2243,
      },
      {
        currency: "dolar singapurski",
        code: "SGD",
        mid: 2.9422,
      },
      {
        currency: "euro",
        code: "EUR",
        mid: 4.1568,
      },
      {
        currency: "forint (Węgry)",
        code: "HUF",
        mid: 0.010441,
      },
      {
        currency: "frank szwajcarski",
        code: "CHF",
        mid: 4.4356,
      },
      {
        currency: "funt szterling",
        code: "GBP",
        mid: 5.0324,
      },
      {
        currency: "hrywna (Ukraina)",
        code: "UAH",
        mid: 0.0951,
      },
      {
        currency: "jen (Japonia)",
        code: "JPY",
        mid: 0.02653,
      },
      {
        currency: "korona czeska",
        code: "CZK",
        mid: 0.1658,
      },
      {
        currency: "korona duńska",
        code: "DKK",
        mid: 0.5573,
      },
      {
        currency: "korona islandzka",
        code: "ISK",
        mid: 0.028452,
      },
      {
        currency: "korona norweska",
        code: "NOK",
        mid: 0.3531,
      },
      {
        currency: "korona szwedzka",
        code: "SEK",
        mid: 0.3753,
      },
      {
        currency: "lej rumuński",
        code: "RON",
        mid: 0.8352,
      },
      {
        currency: "lew (Bułgaria)",
        code: "BGN",
        mid: 2.1253,
      },
      {
        currency: "lira turecka",
        code: "TRY",
        mid: 0.1086,
      },
      {
        currency: "nowy izraelski szekel",
        code: "ILS",
        mid: 1.095,
      },
      {
        currency: "peso chilijskie",
        code: "CLP",
        mid: 0.00416,
      },
      {
        currency: "peso filipińskie",
        code: "PHP",
        mid: 0.0686,
      },
      {
        currency: "peso meksykańskie",
        code: "MXN",
        mid: 0.1894,
      },
      {
        currency: "rand (Republika Południowej Afryki)",
        code: "ZAR",
        mid: 0.2129,
      },
      {
        currency: "real (Brazylia)",
        code: "BRL",
        mid: 0.6719,
      },
      {
        currency: "ringgit (Malezja)",
        code: "MYR",
        mid: 0.8853,
      },
      {
        currency: "rupia indonezyjska",
        code: "IDR",
        mid: 0.00024046,
      },
      {
        currency: "rupia indyjska",
        code: "INR",
        mid: 0.045307,
      },
      {
        currency: "won południowokoreański",
        code: "KRW",
        mid: 0.002709,
      },
      {
        currency: "yuan renminbi (Chiny)",
        code: "CNY",
        mid: 0.5439,
      },
      {
        currency: "SDR (MFW)",
        code: "XDR",
        mid: 5.2071,
      },
    ],
  },
  {
    table: "A",
    no: "044/A/NBP/2025",
    effectiveDate: "2025-03-05",
    rates: [
      {
        currency: "bat (Tajlandia)",
        code: "THB",
        mid: 0.1153,
      },
      {
        currency: "dolar amerykański",
        code: "USD",
        mid: 3.8785,
      },
      {
        currency: "dolar australijski",
        code: "AUD",
        mid: 2.4372,
      },
      {
        currency: "dolar Hongkongu",
        code: "HKD",
        mid: 0.499,
      },
      {
        currency: "dolar kanadyjski",
        code: "CAD",
        mid: 2.6968,
      },
      {
        currency: "dolar nowozelandzki",
        code: "NZD",
        mid: 2.2029,
      },
      {
        currency: "dolar singapurski",
        code: "SGD",
        mid: 2.903,
      },
      {
        currency: "euro",
        code: "EUR",
        mid: 4.1545,
      },
      {
        currency: "forint (Węgry)",
        code: "HUF",
        mid: 0.010439,
      },
      {
        currency: "frank szwajcarski",
        code: "CHF",
        mid: 4.3787,
      },
      {
        currency: "funt szterling",
        code: "GBP",
        mid: 4.9787,
      },
      {
        currency: "hrywna (Ukraina)",
        code: "UAH",
        mid: 0.0937,
      },
      {
        currency: "jen (Japonia)",
        code: "JPY",
        mid: 0.025962,
      },
      {
        currency: "korona czeska",
        code: "CZK",
        mid: 0.1658,
      },
      {
        currency: "korona duńska",
        code: "DKK",
        mid: 0.557,
      },
      {
        currency: "korona islandzka",
        code: "ISK",
        mid: 0.02832,
      },
      {
        currency: "korona norweska",
        code: "NOK",
        mid: 0.3516,
      },
      {
        currency: "korona szwedzka",
        code: "SEK",
        mid: 0.376,
      },
      {
        currency: "lej rumuński",
        code: "RON",
        mid: 0.8347,
      },
      {
        currency: "lew (Bułgaria)",
        code: "BGN",
        mid: 2.1241,
      },
      {
        currency: "lira turecka",
        code: "TRY",
        mid: 0.1066,
      },
      {
        currency: "nowy izraelski szekel",
        code: "ILS",
        mid: 1.074,
      },
      {
        currency: "peso chilijskie",
        code: "CLP",
        mid: 0.004103,
      },
      {
        currency: "peso filipińskie",
        code: "PHP",
        mid: 0.0677,
      },
      {
        currency: "peso meksykańskie",
        code: "MXN",
        mid: 0.1891,
      },
      {
        currency: "rand (Republika Południowej Afryki)",
        code: "ZAR",
        mid: 0.2109,
      },
      {
        currency: "real (Brazylia)",
        code: "BRL",
        mid: 0.659,
      },
      {
        currency: "ringgit (Malezja)",
        code: "MYR",
        mid: 0.8756,
      },
      {
        currency: "rupia indonezyjska",
        code: "IDR",
        mid: 0.00023778,
      },
      {
        currency: "rupia indyjska",
        code: "INR",
        mid: 0.044599,
      },
      {
        currency: "won południowokoreański",
        code: "KRW",
        mid: 0.002679,
      },
      {
        currency: "yuan renminbi (Chiny)",
        code: "CNY",
        mid: 0.5344,
      },
      {
        currency: "SDR (MFW)",
        code: "XDR",
        mid: 5.1841,
      },
    ],
  },
  {
    table: "A",
    no: "045/A/NBP/2025",
    effectiveDate: "2025-03-06",
    rates: [
      {
        currency: "bat (Tajlandia)",
        code: "THB",
        mid: 0.1145,
      },
      {
        currency: "dolar amerykański",
        code: "USD",
        mid: 3.8674,
      },
      {
        currency: "dolar australijski",
        code: "AUD",
        mid: 2.449,
      },
      {
        currency: "dolar Hongkongu",
        code: "HKD",
        mid: 0.4976,
      },
      {
        currency: "dolar kanadyjski",
        code: "CAD",
        mid: 2.6958,
      },
      {
        currency: "dolar nowozelandzki",
        code: "NZD",
        mid: 2.2175,
      },
      {
        currency: "dolar singapurski",
        code: "SGD",
        mid: 2.9008,
      },
      {
        currency: "euro",
        code: "EUR",
        mid: 4.1766,
      },
      {
        currency: "forint (Węgry)",
        code: "HUF",
        mid: 0.010434,
      },
      {
        currency: "frank szwajcarski",
        code: "CHF",
        mid: 4.3645,
      },
      {
        currency: "funt szterling",
        code: "GBP",
        mid: 4.9798,
      },
      {
        currency: "hrywna (Ukraina)",
        code: "UAH",
        mid: 0.0936,
      },
      {
        currency: "jen (Japonia)",
        code: "JPY",
        mid: 0.02615,
      },
      {
        currency: "korona czeska",
        code: "CZK",
        mid: 0.1666,
      },
      {
        currency: "korona duńska",
        code: "DKK",
        mid: 0.5599,
      },
      {
        currency: "korona islandzka",
        code: "ISK",
        mid: 0.028393,
      },
      {
        currency: "korona norweska",
        code: "NOK",
        mid: 0.3559,
      },
      {
        currency: "korona szwedzka",
        code: "SEK",
        mid: 0.3829,
      },
      {
        currency: "lej rumuński",
        code: "RON",
        mid: 0.8393,
      },
      {
        currency: "lew (Bułgaria)",
        code: "BGN",
        mid: 2.1354,
      },
      {
        currency: "lira turecka",
        code: "TRY",
        mid: 0.1058,
      },
      {
        currency: "nowy izraelski szekel",
        code: "ILS",
        mid: 1.0698,
      },
      {
        currency: "peso chilijskie",
        code: "CLP",
        mid: 0.004161,
      },
      {
        currency: "peso filipińskie",
        code: "PHP",
        mid: 0.0675,
      },
      {
        currency: "peso meksykańskie",
        code: "MXN",
        mid: 0.189,
      },
      {
        currency: "rand (Republika Południowej Afryki)",
        code: "ZAR",
        mid: 0.211,
      },
      {
        currency: "real (Brazylia)",
        code: "BRL",
        mid: 0.6738,
      },
      {
        currency: "ringgit (Malezja)",
        code: "MYR",
        mid: 0.8735,
      },
      {
        currency: "rupia indonezyjska",
        code: "IDR",
        mid: 0.00023683,
      },
      {
        currency: "rupia indyjska",
        code: "INR",
        mid: 0.044395,
      },
      {
        currency: "won południowokoreański",
        code: "KRW",
        mid: 0.002671,
      },
      {
        currency: "yuan renminbi (Chiny)",
        code: "CNY",
        mid: 0.5338,
      },
      {
        currency: "SDR (MFW)",
        code: "XDR",
        mid: 5.1648,
      },
    ],
  },
  {
    table: "A",
    no: "046/A/NBP/2025",
    effectiveDate: "2025-03-07",
    rates: [
      {
        currency: "bat (Tajlandia)",
        code: "THB",
        mid: 0.1143,
      },
      {
        currency: "dolar amerykański",
        code: "USD",
        mid: 3.8448,
      },
      {
        currency: "dolar australijski",
        code: "AUD",
        mid: 2.4274,
      },
      {
        currency: "dolar Hongkongu",
        code: "HKD",
        mid: 0.4947,
      },
      {
        currency: "dolar kanadyjski",
        code: "CAD",
        mid: 2.6887,
      },
      {
        currency: "dolar nowozelandzki",
        code: "NZD",
        mid: 2.202,
      },
      {
        currency: "dolar singapurski",
        code: "SGD",
        mid: 2.8929,
      },
      {
        currency: "euro",
        code: "EUR",
        mid: 4.176,
      },
      {
        currency: "forint (Węgry)",
        code: "HUF",
        mid: 0.010469,
      },
      {
        currency: "frank szwajcarski",
        code: "CHF",
        mid: 4.3762,
      },
      {
        currency: "funt szterling",
        code: "GBP",
        mid: 4.9747,
      },
      {
        currency: "hrywna (Ukraina)",
        code: "UAH",
        mid: 0.0933,
      },
      {
        currency: "jen (Japonia)",
        code: "JPY",
        mid: 0.026073,
      },
      {
        currency: "korona czeska",
        code: "CZK",
        mid: 0.1668,
      },
      {
        currency: "korona duńska",
        code: "DKK",
        mid: 0.5599,
      },
      {
        currency: "korona islandzka",
        code: "ISK",
        mid: 0.028389,
      },
      {
        currency: "korona norweska",
        code: "NOK",
        mid: 0.3549,
      },
      {
        currency: "korona szwedzka",
        code: "SEK",
        mid: 0.3811,
      },
      {
        currency: "lej rumuński",
        code: "RON",
        mid: 0.8393,
      },
      {
        currency: "lew (Bułgaria)",
        code: "BGN",
        mid: 2.1351,
      },
      {
        currency: "lira turecka",
        code: "TRY",
        mid: 0.1054,
      },
      {
        currency: "nowy izraelski szekel",
        code: "ILS",
        mid: 1.0641,
      },
      {
        currency: "peso chilijskie",
        code: "CLP",
        mid: 0.004138,
      },
      {
        currency: "peso filipińskie",
        code: "PHP",
        mid: 0.0673,
      },
      {
        currency: "peso meksykańskie",
        code: "MXN",
        mid: 0.19,
      },
      {
        currency: "rand (Republika Południowej Afryki)",
        code: "ZAR",
        mid: 0.2129,
      },
      {
        currency: "real (Brazylia)",
        code: "BRL",
        mid: 0.6671,
      },
      {
        currency: "ringgit (Malezja)",
        code: "MYR",
        mid: 0.8708,
      },
      {
        currency: "rupia indonezyjska",
        code: "IDR",
        mid: 0.00023595,
      },
      {
        currency: "rupia indyjska",
        code: "INR",
        mid: 0.044248,
      },
      {
        currency: "won południowokoreański",
        code: "KRW",
        mid: 0.002663,
      },
      {
        currency: "yuan renminbi (Chiny)",
        code: "CNY",
        mid: 0.5318,
      },
      {
        currency: "SDR (MFW)",
        code: "XDR",
        mid: 5.1394,
      },
    ],
  },
  {
    table: "A",
    no: "047/A/NBP/2025",
    effectiveDate: "2025-03-10",
    rates: [
      {
        currency: "bat (Tajlandia)",
        code: "THB",
        mid: 0.1141,
      },
      {
        currency: "dolar amerykański",
        code: "USD",
        mid: 3.8573,
      },
      {
        currency: "dolar australijski",
        code: "AUD",
        mid: 2.4404,
      },
      {
        currency: "dolar Hongkongu",
        code: "HKD",
        mid: 0.4966,
      },
      {
        currency: "dolar kanadyjski",
        code: "CAD",
        mid: 2.6868,
      },
      {
        currency: "dolar nowozelandzki",
        code: "NZD",
        mid: 2.2141,
      },
      {
        currency: "dolar singapurski",
        code: "SGD",
        mid: 2.8979,
      },
      {
        currency: "euro",
        code: "EUR",
        mid: 4.1857,
      },
      {
        currency: "forint (Węgry)",
        code: "HUF",
        mid: 0.010488,
      },
      {
        currency: "frank szwajcarski",
        code: "CHF",
        mid: 4.3977,
      },
      {
        currency: "funt szterling",
        code: "GBP",
        mid: 4.9797,
      },
      {
        currency: "hrywna (Ukraina)",
        code: "UAH",
        mid: 0.0934,
      },
      {
        currency: "jen (Japonia)",
        code: "JPY",
        mid: 0.026199,
      },
      {
        currency: "korona czeska",
        code: "CZK",
        mid: 0.1677,
      },
      {
        currency: "korona duńska",
        code: "DKK",
        mid: 0.5612,
      },
      {
        currency: "korona islandzka",
        code: "ISK",
        mid: 0.028494,
      },
      {
        currency: "korona norweska",
        code: "NOK",
        mid: 0.3589,
      },
      {
        currency: "korona szwedzka",
        code: "SEK",
        mid: 0.3812,
      },
      {
        currency: "lej rumuński",
        code: "RON",
        mid: 0.841,
      },
      {
        currency: "lew (Bułgaria)",
        code: "BGN",
        mid: 2.1401,
      },
      {
        currency: "lira turecka",
        code: "TRY",
        mid: 0.1055,
      },
      {
        currency: "nowy izraelski szekel",
        code: "ILS",
        mid: 1.0666,
      },
      {
        currency: "peso chilijskie",
        code: "CLP",
        mid: 0.004149,
      },
      {
        currency: "peso filipińskie",
        code: "PHP",
        mid: 0.0672,
      },
      {
        currency: "peso meksykańskie",
        code: "MXN",
        mid: 0.1904,
      },
      {
        currency: "rand (Republika Południowej Afryki)",
        code: "ZAR",
        mid: 0.2109,
      },
      {
        currency: "real (Brazylia)",
        code: "BRL",
        mid: 0.6661,
      },
      {
        currency: "ringgit (Malezja)",
        code: "MYR",
        mid: 0.872,
      },
      {
        currency: "rupia indonezyjska",
        code: "IDR",
        mid: 0.00023606,
      },
      {
        currency: "rupia indyjska",
        code: "INR",
        mid: 0.044171,
      },
      {
        currency: "won południowokoreański",
        code: "KRW",
        mid: 0.002652,
      },
      {
        currency: "yuan renminbi (Chiny)",
        code: "CNY",
        mid: 0.5313,
      },
      {
        currency: "SDR (MFW)",
        code: "XDR",
        mid: 5.1321,
      },
    ],
  },
  {
    table: "A",
    no: "048/A/NBP/2025",
    effectiveDate: "2025-03-11",
    rates: [
      {
        currency: "bat (Tajlandia)",
        code: "THB",
        mid: 0.1138,
      },
      {
        currency: "dolar amerykański",
        code: "USD",
        mid: 3.8481,
      },
      {
        currency: "dolar australijski",
        code: "AUD",
        mid: 2.421,
      },
      {
        currency: "dolar Hongkongu",
        code: "HKD",
        mid: 0.4953,
      },
      {
        currency: "dolar kanadyjski",
        code: "CAD",
        mid: 2.6706,
      },
      {
        currency: "dolar nowozelandzki",
        code: "NZD",
        mid: 2.1968,
      },
      {
        currency: "dolar singapurski",
        code: "SGD",
        mid: 2.89,
      },
      {
        currency: "euro",
        code: "EUR",
        mid: 4.1977,
      },
      {
        currency: "forint (Węgry)",
        code: "HUF",
        mid: 0.010476,
      },
      {
        currency: "frank szwajcarski",
        code: "CHF",
        mid: 4.3669,
      },
      {
        currency: "funt szterling",
        code: "GBP",
        mid: 4.9771,
      },
      {
        currency: "hrywna (Ukraina)",
        code: "UAH",
        mid: 0.0929,
      },
      {
        currency: "jen (Japonia)",
        code: "JPY",
        mid: 0.026109,
      },
      {
        currency: "korona czeska",
        code: "CZK",
        mid: 0.1681,
      },
      {
        currency: "korona duńska",
        code: "DKK",
        mid: 0.5628,
      },
      {
        currency: "korona islandzka",
        code: "ISK",
        mid: 0.028614,
      },
      {
        currency: "korona norweska",
        code: "NOK",
        mid: 0.3611,
      },
      {
        currency: "korona szwedzka",
        code: "SEK",
        mid: 0.3837,
      },
      {
        currency: "lej rumuński",
        code: "RON",
        mid: 0.8434,
      },
      {
        currency: "lew (Bułgaria)",
        code: "BGN",
        mid: 2.1462,
      },
      {
        currency: "lira turecka",
        code: "TRY",
        mid: 0.1051,
      },
      {
        currency: "nowy izraelski szekel",
        code: "ILS",
        mid: 1.0571,
      },
      {
        currency: "peso chilijskie",
        code: "CLP",
        mid: 0.004076,
      },
      {
        currency: "peso filipińskie",
        code: "PHP",
        mid: 0.0672,
      },
      {
        currency: "peso meksykańskie",
        code: "MXN",
        mid: 0.1893,
      },
      {
        currency: "rand (Republika Południowej Afryki)",
        code: "ZAR",
        mid: 0.2107,
      },
      {
        currency: "real (Brazylia)",
        code: "BRL",
        mid: 0.6572,
      },
      {
        currency: "ringgit (Malezja)",
        code: "MYR",
        mid: 0.872,
      },
      {
        currency: "rupia indonezyjska",
        code: "IDR",
        mid: 0.00023457,
      },
      {
        currency: "rupia indyjska",
        code: "INR",
        mid: 0.044111,
      },
      {
        currency: "won południowokoreański",
        code: "KRW",
        mid: 0.002651,
      },
      {
        currency: "yuan renminbi (Chiny)",
        code: "CNY",
        mid: 0.532,
      },
      {
        currency: "SDR (MFW)",
        code: "XDR",
        mid: 5.1522,
      },
    ],
  },
  {
    table: "A",
    no: "049/A/NBP/2025",
    effectiveDate: "2025-03-12",
    rates: [
      {
        currency: "bat (Tajlandia)",
        code: "THB",
        mid: 0.1137,
      },
      {
        currency: "dolar amerykański",
        code: "USD",
        mid: 3.8496,
      },
      {
        currency: "dolar australijski",
        code: "AUD",
        mid: 2.4208,
      },
      {
        currency: "dolar Hongkongu",
        code: "HKD",
        mid: 0.4955,
      },
      {
        currency: "dolar kanadyjski",
        code: "CAD",
        mid: 2.6663,
      },
      {
        currency: "dolar nowozelandzki",
        code: "NZD",
        mid: 2.1977,
      },
      {
        currency: "dolar singapurski",
        code: "SGD",
        mid: 2.8862,
      },
      {
        currency: "euro",
        code: "EUR",
        mid: 4.2017,
      },
      {
        currency: "forint (Węgry)",
        code: "HUF",
        mid: 0.010478,
      },
      {
        currency: "frank szwajcarski",
        code: "CHF",
        mid: 4.3568,
      },
      {
        currency: "funt szterling",
        code: "GBP",
        mid: 4.9795,
      },
      {
        currency: "hrywna (Ukraina)",
        code: "UAH",
        mid: 0.0927,
      },
      {
        currency: "jen (Japonia)",
        code: "JPY",
        mid: 0.025904,
      },
      {
        currency: "korona czeska",
        code: "CZK",
        mid: 0.168,
      },
      {
        currency: "korona duńska",
        code: "DKK",
        mid: 0.5633,
      },
      {
        currency: "korona islandzka",
        code: "ISK",
        mid: 0.028564,
      },
      {
        currency: "korona norweska",
        code: "NOK",
        mid: 0.3615,
      },
      {
        currency: "korona szwedzka",
        code: "SEK",
        mid: 0.3824,
      },
      {
        currency: "lej rumuński",
        code: "RON",
        mid: 0.8441,
      },
      {
        currency: "lew (Bułgaria)",
        code: "BGN",
        mid: 2.1483,
      },
      {
        currency: "lira turecka",
        code: "TRY",
        mid: 0.1051,
      },
      {
        currency: "nowy izraelski szekel",
        code: "ILS",
        mid: 1.057,
      },
      {
        currency: "peso chilijskie",
        code: "CLP",
        mid: 0.00412,
      },
      {
        currency: "peso filipińskie",
        code: "PHP",
        mid: 0.0672,
      },
      {
        currency: "peso meksykańskie",
        code: "MXN",
        mid: 0.1903,
      },
      {
        currency: "rand (Republika Południowej Afryki)",
        code: "ZAR",
        mid: 0.2095,
      },
      {
        currency: "real (Brazylia)",
        code: "BRL",
        mid: 0.6625,
      },
      {
        currency: "ringgit (Malezja)",
        code: "MYR",
        mid: 0.8689,
      },
      {
        currency: "rupia indonezyjska",
        code: "IDR",
        mid: 0.00023408,
      },
      {
        currency: "rupia indyjska",
        code: "INR",
        mid: 0.044145,
      },
      {
        currency: "won południowokoreański",
        code: "KRW",
        mid: 0.002652,
      },
      {
        currency: "yuan renminbi (Chiny)",
        code: "CNY",
        mid: 0.5314,
      },
      {
        currency: "SDR (MFW)",
        code: "XDR",
        mid: 5.1339,
      },
    ],
  },
];

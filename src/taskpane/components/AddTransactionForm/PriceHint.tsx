import * as React from "react";
import { Spinner, Text } from "@fluentui/react-components";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useCurrencyRate } from "./useCurrencyRate";
import type { FormData } from "./formSchema";
import { useExcel } from "../../context/ExcelContext";

const monthNameToNumber: Record<string, string> = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

type PriceHintProps = {
  watch: UseFormWatch<FormData>;
  setValue: UseFormSetValue<FormData>;
  dayValue: number | undefined;
  isDayValid: boolean;
};

export const PriceHint: React.FC<PriceHintProps> = ({ watch, setValue, dayValue, isDayValid }) => {
  const { t } = useTranslation();
  const { month, year } = useExcel();

  const currencyValue = watch("currency");

  const monthNumber = month ? monthNameToNumber[month] : null;
  const dateForRate =
    isDayValid && monthNumber && year && dayValue
      ? `${year}-${monthNumber}-${dayValue.toString().padStart(2, "0")}`
      : null;

  const {
    data: { rate, dateMessage } = { rate: 1, dateMessage: "" },
    isLoading: rateLoading,
    isError,
  } = useCurrencyRate(currencyValue, dateForRate);

  React.useEffect(() => {
    setValue("exchangeRate", rate);
  }, [rate, setValue]);

  if (currencyValue === "PLN") {
    return null;
  }
  if (rateLoading) {
    return <Spinner size="tiny" />;
  }
  if (isError) {
    return (
      <Text size={200} weight="regular" style={{ color: "red" }}>
        {t("error-fetch-rate-unknown")}
      </Text>
    );
  }
  if (rate) {
    const decimalPoints = rate > 1 ? 2 : 3;
    return (
      <Text size={200} weight="regular">
        {`1 ${currencyValue} = ${rate.toFixed(decimalPoints)} PLN ${dateMessage ? `(${dateMessage})` : ""}`}
      </Text>
    );
  }

  return null;
};

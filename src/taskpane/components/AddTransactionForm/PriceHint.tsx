import * as React from "react";
import { Spinner, Text, tokens } from "@fluentui/react-components";
import type { UseFormSetError, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useCurrencyRate } from "../../currency/useCurrencyRate";
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
  setError: UseFormSetError<FormData>;
  dayValue: number | undefined;
  isDayValid: boolean;
};

export const PriceHint: React.FC<PriceHintProps> = ({
  watch,
  setValue,
  setError,
  dayValue,
  isDayValid,
}) => {
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
    setValue("exchangeRate", rate ?? 1);
  }, [rate, setValue]);

  React.useEffect(() => {
    if (isError) {
      setError("currency", { type: "server", message: t("error-fetch-rate-unknown") });
    }
  }, [isError, setError, t]);

  if (currencyValue === "PLN") {
    return null;
  }
  if (rateLoading) {
    return <Spinner size="tiny" />;
  }

  if (isError) {
    return (
      <Text size={200} weight="regular" style={{ color: tokens.colorPaletteRedForeground1 }}>
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

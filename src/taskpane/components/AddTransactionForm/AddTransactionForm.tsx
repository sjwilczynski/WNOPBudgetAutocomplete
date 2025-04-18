import * as React from "react";
import { Field, Input, Dropdown, Option, Spinner, Text } from "@fluentui/react-components";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import "./AddTransactionForm.css";
import { Button } from "@fluentui/react-components";
import { CalendarLtr24Regular, Money24Regular } from "@fluentui/react-icons";
import { useFormResolver, type FormData, type FormContext } from "./formSchema";
import { CategoriesField } from "./CategoriesField";
import { useExcel } from "../../context/ExcelContext";
import { useCurrencyRate, CURRENCIES, type Currency } from "./useCurrencyRate";

// eslint-disable-next-line no-unused-vars
export type FormSubmit = (data: FormData) => void;

type Props = {
  categories: Record<string, string[]>;
};

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

export const AddTransactionForm = ({ categories }: Props) => {
  const { month, year } = useExcel();
  const resolver = useFormResolver();
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isDirty, isValid },
    getFieldState,
  } = useForm<FormData, FormContext>({
    resolver,
    mode: "onTouched",
    context: { categories },
    defaultValues: {
      currency: "PLN",
      exchangeRate: 1,
    },
  });
  const { t } = useTranslation();

  const dayValue = watch("day");
  const currencyValue = watch("currency");

  const monthNumber = month ? monthNameToNumber[month] : null;
  const isDayValid = !(getFieldState("day").invalid || !getFieldState("day").isDirty);
  const dateForRate =
    isDayValid && monthNumber && year
      ? `${year}-${monthNumber}-${dayValue.toString().padStart(2, "0")}`
      : null;

  const {
    data: fetchedExchangeRate,
    isLoading: rateLoading,
    isError,
  } = useCurrencyRate(currencyValue, dateForRate);

  React.useEffect(() => {
    setValue("exchangeRate", fetchedExchangeRate ?? 1);
  }, [currencyValue, fetchedExchangeRate, setValue]);

  const getPriceHint = () => {
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
    if (fetchedExchangeRate) {
      return `1 ${currencyValue} = ${fetchedExchangeRate.toFixed(2)} PLN`;
    }
    return null;
  };

  const onSubmit = useSubmit();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <CategoriesField
        categories={categories}
        control={control}
        error={errors.subcategory ?? errors.category}
        setValue={setValue}
      />
      <Controller
        name="day"
        control={control}
        render={({ field }) => (
          <Field
            className="textfield"
            label={t("day")}
            required={true}
            validationState={errors.day ? "error" : "success"}
            validationMessage={errors.day?.message}
          >
            <Input
              placeholder={t("day-placeholder")}
              type="number"
              {...field}
              value={field.value?.toString() ?? ""}
              contentBefore={<CalendarLtr24Regular />}
              onFocus={(e) => e.currentTarget.select()}
            />
          </Field>
        )}
      />
      <Controller
        name="currency"
        control={control}
        render={({ field }) => (
          <Field
            label={t("currency")}
            className="textfield"
            validationState={errors.currency ? "error" : "success"}
            validationMessage={errors.currency?.message}
          >
            <Dropdown
              {...field}
              value={field.value}
              onOptionSelect={(_, data) => field.onChange(data.optionValue as Currency)}
              disabled={!isDayValid}
            >
              {CURRENCIES.map((curr) => (
                <Option key={curr} value={curr}>
                  {curr}
                </Option>
              ))}
            </Dropdown>
          </Field>
        )}
      />
      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <Field
            className="textfield"
            label={t("price")}
            required={true}
            validationState={errors.price ? "error" : "success"}
            validationMessage={errors.price?.message}
            hint={getPriceHint()}
          >
            <Input
              placeholder={t("price-placeholder")}
              type="number"
              step={0.01}
              {...field}
              value={field.value?.toString() ?? ""}
              contentBefore={<Money24Regular />}
              onFocus={(e) => e.currentTarget.select()}
            />
          </Field>
        )}
      />
      <Button appearance="primary" className="submit" type="submit" disabled={!isDirty || !isValid}>
        {t("add-transaction")}
      </Button>
    </form>
  );
};

const useSubmit = () => {
  const { submitTransaction } = useExcel();
  const handleFormSubmit = React.useCallback(
    (data: FormData) => {
      let finalPrice = data.price;
      if (data.currency !== "PLN") {
        finalPrice = data.price * data.exchangeRate;
      }

      const dataToSubmit: FormData = {
        ...data,
        price: finalPrice,
      };
      submitTransaction(dataToSubmit);
    },
    [submitTransaction]
  );
  return handleFormSubmit;
};

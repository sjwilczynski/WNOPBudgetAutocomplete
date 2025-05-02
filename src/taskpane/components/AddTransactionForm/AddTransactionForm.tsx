import * as React from "react";
import { Field, Input, Dropdown, Option, makeStyles } from "@fluentui/react-components";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button } from "@fluentui/react-components";
import { CalendarLtr24Regular, Money24Regular } from "@fluentui/react-icons";
import { useFormResolver } from "./formSchema";
import { CategoriesField } from "./CategoriesField";
import { PriceHint } from "./PriceHint";
import { CURRENCIES, type Currency } from "../../currency/common";
import { useExcel } from "../../context/ExcelContext";

// eslint-disable-next-line no-unused-vars
export type FormSubmit = (data: FormData) => void;

type Props = {
  categories: Record<string, string[]>;
};

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  submitButton: {
    width: "70%",
    alignSelf: "center",
  },
});

export const AddTransactionForm = ({ categories }: Props) => {
  const styles = useStyles();
  const resolver = useFormResolver();
  const {
    handleSubmit,
    control,
    setValue,
    setError,
    watch,
    formState: { errors, isDirty, isValid },
    getFieldState,
  } = useForm({
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

  const isDayValid = !(getFieldState("day").invalid || !getFieldState("day").isDirty);

  const onSubmit = useSubmit();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
            label={t("price")}
            required={true}
            validationState={errors.price ? "error" : "success"}
            validationMessage={errors.price?.message}
            hint={
              <PriceHint
                watch={watch}
                setValue={setValue}
                setError={setError}
                dayValue={dayValue}
                isDayValid={isDayValid}
              />
            }
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
      <Button
        appearance="primary"
        className={styles.submitButton}
        type="submit"
        disabled={!isDirty || !isValid}
      >
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

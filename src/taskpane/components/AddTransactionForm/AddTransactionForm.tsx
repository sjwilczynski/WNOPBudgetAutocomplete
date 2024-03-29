import * as React from "react";
import { InputField } from "@fluentui/react-components/unstable";
import { Controller, useForm } from "react-hook-form";
import { addTransaction } from "./addTransaction";
import { useTranslation } from "react-i18next";
import "./AddTransactionForm.css";
import { Button } from "@fluentui/react-components";
import { CalendarLtr24Regular, Money24Regular } from "@fluentui/react-icons";
import { useFormResolver, FormData, FormContext } from "./formSchema";
import { CategoriesField } from "./CategoriesField";

type Props = {
  categories: Record<string, string[]>;
};

export const AddTransactionForm = ({ categories }: Props) => {
  const resolver = useFormResolver();
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm<FormData, FormContext>({ resolver, mode: "onTouched", context: { categories } });
  const { t } = useTranslation();

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
          <InputField
            className="textfield"
            label={t("day")}
            placeholder={t("day-placeholder")}
            type="number"
            {...field}
            value={field.value?.toString() ?? ""}
            required={true}
            validationState={errors.day ? "error" : "success"}
            validationMessage={errors.day?.message}
            contentBefore={<CalendarLtr24Regular />}
            onFocus={(e) => e.currentTarget.select()}
          />
        )}
      />
      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <InputField
            className="textfield"
            label={t("price")}
            placeholder={t("price-placeholder")}
            type="number"
            step={0.01}
            {...field}
            value={field.value?.toString() ?? ""}
            required={true}
            validationState={errors.price ? "error" : "success"}
            validationMessage={errors.price?.message}
            contentBefore={<Money24Regular />}
            onFocus={(e) => e.currentTarget.select()}
          />
        )}
      />
      <Button appearance="primary" className="submit" type="submit" disabled={!isDirty || !isValid}>
        {t("add-transaction")}
      </Button>
    </form>
  );
};

function onSubmit({ category, subcategory, day, price }: FormData): void {
  addTransaction(category, subcategory, day, price);
}

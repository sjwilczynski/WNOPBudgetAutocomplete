import * as React from "react";
import { ComboBox, IComboBoxOption, PrimaryButton, SelectableOptionMenuItemType, TextField } from "@fluentui/react";
import { Controller, useForm } from "react-hook-form";
import { addTransaction } from "./addTransaction";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import yupLocalePL from "yup-locale-pl";
import "./AddTransactionForm.css";

const separator = "$%^";

type Props = {
  categories: Record<string, string[]>;
};

type FormData = yup.InferType<ReturnType<typeof useYupSchema>>;

export const AddTransactionForm = ({ categories }: Props) => {
  const schema = useYupSchema();
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<FormData>({ resolver: yupResolver(schema), mode: "onChange" });
  const { t } = useTranslation();

  const options = getOptions(categories);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <Controller
        name="categoryDetails"
        control={control}
        render={({ field }) => (
          <ComboBox
            {...field}
            options={options}
            label={t("choose-category")}
            autoComplete="on"
            allowFreeform={true}
            onChange={(_event, option) => {
              field.onChange(option?.data);
            }}
            required={true}
            errorMessage={errors.categoryDetails?.message}
          />
        )}
      />
      <Controller
        name="day"
        control={control}
        render={({ field }) => (
          <TextField
            label={t("day")}
            placeholder={t("day-placeholder")}
            type="number"
            {...field}
            value={field.value?.toString()}
            required={true}
            errorMessage={errors.day?.message}
          />
        )}
      />
      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <TextField
            label={t("price")}
            placeholder={t("price-placeholder")}
            type="number"
            step={0.01}
            {...field}
            value={field.value?.toString()}
            required={true}
            errorMessage={errors.price?.message}
          />
        )}
      />
      <PrimaryButton className="submit" type="submit" disabled={!isDirty || !isValid}>
        {t("add-transaction")}
      </PrimaryButton>
    </form>
  );
};

function onSubmit({ categoryDetails, day, price }: FormData): void {
  const separatorStart = categoryDetails.indexOf(separator);
  const separatorEnd = categoryDetails.indexOf(separator) + separator.length;
  const category = categoryDetails.substring(0, separatorStart);
  const subcategory = categoryDetails.substring(separatorEnd);
  addTransaction(category, subcategory, day, price);
}

function getOptions(categories: Record<string, string[]>): IComboBoxOption[] {
  const options: IComboBoxOption[] = [];
  Object.entries(categories).forEach((value) => {
    const [category, subCategories] = value;
    options.push({ key: category, text: category, itemType: SelectableOptionMenuItemType.Header });
    for (const subcategory of subCategories) {
      const key = `${category}${separator}${subcategory}`;
      options.push({ key, text: subcategory, data: key });
    }
  });
  return options;
}

function useYupSchema() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  if (language === "pl-PL") {
    yup.setLocale(yupLocalePL);
  } else {
    yup.setLocale({});
  }

  return yup
    .object({
      categoryDetails: yup.string().required(),
      day: yup.number().typeError(t("day-type-error")).required().min(1).max(31),
      price: yup.number().typeError(t("price-type-error")).required().min(0),
    })
    .required();
}

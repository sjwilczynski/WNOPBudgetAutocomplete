import * as React from "react";
import { ComboBox, DefaultButton, IComboBoxOption, SelectableOptionMenuItemType, TextField } from "@fluentui/react";
import { Controller, useForm } from "react-hook-form";
import { addTransaction } from "./addTransaction";

const separator = "$%^";

type Props = {
  categories: { [key in string]: string[] };
};

type FormData = {
  categoryDetails: string;
  day: number;
  price: number;
};

export const AddTransactionForm = ({ categories }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const options = getOptions(categories);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="categoryDetails"
        control={control}
        render={({ field }) => (
          <ComboBox
            {...field}
            options={options}
            label="Wybierz kategorię"
            autoComplete="on"
            allowFreeform={true}
            onChange={(_event, option) => {
              field.onChange(option.data);
            }}
          />
        )}
      />
      <p>{errors.categoryDetails?.message}</p>
      <Controller
        name="day"
        control={control}
        render={({ field }) => <TextField label="Dzień" type="number" {...field} value={field.value?.toString()} />}
      />
      <p>{errors.day?.message}</p>
      <Controller
        name="price"
        control={control}
        render={({ field }) => <TextField label="Cena" type="number" {...field} value={field.value?.toString()} />}
      />
      <p>{errors.price?.message}</p>
      <DefaultButton type="submit">Dodaj transakcję</DefaultButton>
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

function getOptions(categories: { [x: string]: string[] }): IComboBoxOption[] {
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

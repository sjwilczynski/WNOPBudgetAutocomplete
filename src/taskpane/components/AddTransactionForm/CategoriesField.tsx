import * as React from "react";
import { Control, Controller, FieldError, UseFormSetValue } from "react-hook-form";
import { ComboboxField, OptionGroup, Option } from "@fluentui/react-components/unstable";
import { useTranslation } from "react-i18next";
import { FormData, SEPARATOR } from "./formSchema";
import "./CategoriesField.css";

type Props = {
  categories: Record<string, string[]>;
  control: Control<FormData>;
  error: FieldError | undefined;
  setValue: UseFormSetValue<FormData>;
};

export const CategoriesField = ({ categories, control, error, setValue }: Props) => {
  const { t } = useTranslation();

  const [categoryFilter, setCategoryFilter] = React.useState("");

  return (
    <>
      <Controller
        name="category"
        control={control}
        defaultValue=""
        render={({ field }) => <input type="hidden" {...field} />}
      />
      <Controller
        name="subcategory"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <ComboboxField
            {...field}
            label={t("choose-category")}
            autoComplete="on"
            inlinePopup={true}
            onChange={(event) => {
              const value = event.target.value.trim();
              setCategoryFilter(value);
              field.onChange(value);
            }}
            onOptionSelect={(_event, { optionValue, optionText }) => {
              // needed to make sure selection is not cleared on retyping
              if (optionText && optionValue) {
                setValue("category", optionText?.split(SEPARATOR)[0]);
                field.onChange(optionValue);
              }
            }}
            required={true}
            validationState={error ? "error" : "success"}
            validationMessage={error?.message}
            listbox={{ className: "category-listbox" }}
            onFocus={(e) => e.currentTarget.select()}
          >
            <CategoryOptions filter={categoryFilter} categories={categories} />
          </ComboboxField>
        )}
      />
    </>
  );
};

const CategoryOptions = React.memo(
  ({ filter, categories }: { filter: string; categories: Record<string, string[]> }) => {
    const matches = (filter: string, text: string) => text.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    const macthesFilter = (subcategory: string) => matches(filter, subcategory);
    const matchingCategories = Object.entries(categories).filter(([, subcatgeories]) =>
      subcatgeories.some(macthesFilter)
    );

    const { t } = useTranslation();
    return (
      <>
        {matchingCategories.length > 0 ? (
          matchingCategories.map(([category, subCategories]) => (
            <OptionGroup key={category} label={category}>
              {subCategories.filter(macthesFilter).map((subcategory) => {
                const key = `${category}${SEPARATOR}${subcategory}`;
                return (
                  <Option key={key} value={subcategory} text={key}>
                    {subcategory}
                  </Option>
                );
              })}
            </OptionGroup>
          ))
        ) : (
          <Option value="no-matches" text="No matches" disabled>
            {t("no-matches")}
          </Option>
        )}
      </>
    );
  }
);

CategoryOptions.displayName = "CategoryOptions";

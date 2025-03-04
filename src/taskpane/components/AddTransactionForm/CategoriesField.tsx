import * as React from "react";
import { Control, Controller, FieldError, UseFormSetValue } from "react-hook-form";
import { Field, Combobox, Option, OptionGroup } from "@fluentui/react-components";
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
          <Field
            label={t("choose-category")}
            required={true}
            validationState={error ? "error" : "success"}
            validationMessage={error?.message}
          >
            <Combobox
              {...field}
              autoComplete="on"
              inlinePopup={true}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const value = event.target.value.trim();
                setCategoryFilter(value);
                field.onChange(value);
              }}
              onOptionSelect={(_, data) => {
                // needed to make sure selection is not cleared on retyping
                if (data.optionText && data.optionValue) {
                  setValue("category", data.optionText?.split(SEPARATOR)[0]);
                  field.onChange(data.optionValue);
                }
              }}
              listbox={{ className: "category-listbox" }}
              onFocus={(e) => e.currentTarget.select()}
            >
              <CategoryOptions filter={categoryFilter} categories={categories} />
            </Combobox>
          </Field>
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

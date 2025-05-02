// @ts-expect-error - the package itself is not typed
import yupLocalePL from "yup-locale-pl";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import type { FieldError, Resolver, ResolverOptions, ResolverResult } from "react-hook-form";
import { useEffect } from "react";
import { CURRENCIES, type Currency } from "../../currency/common";

type FormContext = { categories: Record<string, string[]> };

function useYupSchema() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  useEffect(() => {
    if (language === "pl-PL") {
      yup.setLocale(yupLocalePL);
    } else {
      yup.setLocale({});
    }
  }, [language]);

  return yup
    .object({
      category: yup.string().required(),
      subcategory: yup.string().required(),
      day: yup.number().typeError(t("day-type-error")).required().min(1).max(31),
      price: yup.number().typeError(t("price-type-error")).required(),
      currency: yup
        .string()
        .oneOf<Currency>([...CURRENCIES])
        .required(),
      exchangeRate: yup.number().required(),
    })
    .required();
}

export const useFormResolver: () => Resolver<FormData, FormContext> = () => {
  const schema = useYupSchema();
  const { t } = useTranslation();
  const simpleFieldsResolver = yupResolver(schema);

  return async (
    values: FormData,
    context: FormContext | undefined,
    options: ResolverOptions<FormData>
  ): Promise<ResolverResult<FormData>> => {
    const categories = context?.categories ?? {};
    const { category, subcategory } = values;
    const allCategories = Object.keys(categories);
    const allSubcategories = Object.values(categories).flat();
    const categoryError: FieldError | undefined = allCategories.includes(category)
      ? undefined
      : { message: t("error-category"), type: "custom" };
    const subcategoryError: FieldError | undefined = allSubcategories.includes(subcategory)
      ? undefined
      : { message: t("error-subcategory"), type: "custom" };
    const errors = { category: categoryError, subcategory: subcategoryError };
    const validationResult = await simpleFieldsResolver(values, context, options);
    return categoryError || subcategoryError
      ? { values: {}, errors: { ...errors, ...validationResult.errors } }
      : validationResult;
  };
};

export type FormData = yup.InferType<ReturnType<typeof useYupSchema>>;

export const SEPARATOR = "$%^";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { AddTransactionForm } from "./AddTransactionForm/AddTransactionForm";
import { Header } from "./Header/Header";
import { MonthLabel } from "./MonthLabel";
import { Progress } from "./Progress";
import "./App.css";

type Props = {
  categories?: Record<string, string[]>;
};

export default function App({ categories }: Props) {
  const { t } = useTranslation();

  return (
    <main className="app">
      <Header message={t("welcome")} />
      {categories ? (
        <>
          <MonthLabel />
          <AddTransactionForm categories={categories} />
        </>
      ) : (
        <Progress message={t("loading")} />
      )}
    </main>
  );
}

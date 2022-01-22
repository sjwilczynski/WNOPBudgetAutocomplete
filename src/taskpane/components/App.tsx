import * as React from "react";
import { useTranslation } from "react-i18next";
import { AddTransactionForm } from "./AddTransactionForm";
import { Header } from "./Header";
import { MonthLabel } from "./MonthLabel";
import { Progress } from "./Progress";
import "./App.css";

type Props = {
  categories?: Record<string, string[]>;
};

export default function App({ categories }: Props) {
  const { t } = useTranslation();

  if (!categories) {
    return <Progress title={t("app-title")} message={t("loading")} />;
  }

  return (
    <main className="app">
      <Header message={t("welcome")} />
      <MonthLabel />
      <AddTransactionForm categories={categories}></AddTransactionForm>
    </main>
  );
}

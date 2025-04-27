import * as React from "react";
import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "./Header/Header";
import { MonthLabel } from "./MonthLabel/MonthLabel";
import { Progress } from "./Progress";
import { TabList, Tab, makeStyles, tokens } from "@fluentui/react-components";
import type { SelectTabData, SelectTabEvent } from "@fluentui/react-components";
import { useExcel } from "../context/ExcelContext";

const AddTransactionForm = lazy(() =>
  import("./AddTransactionForm/AddTransactionForm").then((module) => ({
    default: module.AddTransactionForm,
  }))
);
const RatesView = lazy(() =>
  import("./RatesView/RatesView").then((module) => ({ default: module.RatesView }))
);

type Props = {
  categories?: Record<string, string[]>;
};

const useStyles = makeStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "24px",
    paddingTop: "12px",
  },
  tabList: {
    marginLeft: `calc(${tokens.spacingHorizontalMNudge} * -1)`,
  },
});

export default function App({ categories }: Props) {
  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = React.useState<string>("none");
  const styles = useStyles();
  const { month } = useExcel();

  const isMonthView = month !== "LOADING" && month !== "NOT_FOUND";
  const isLoading = month === "LOADING";

  const onTabSelect = (_event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value as string);
  };

  React.useEffect(() => {
    if (month === "NOT_FOUND" && selectedValue !== "rates") {
      setSelectedValue("rates");
    }
    if (isMonthView && selectedValue === "none") {
      setSelectedValue("add-transaction");
    }
  }, [month, selectedValue, isMonthView]);

  return (
    <main className={styles.app}>
      <Header message={t("welcome")} />
      {categories && !isLoading ? (
        <>
          <TabList
            selectedValue={selectedValue}
            onTabSelect={onTabSelect}
            className={styles.tabList}
          >
            <Tab value="add-transaction" disabled={!isMonthView}>
              {t("tab-add-transaction")}
            </Tab>
            <Tab value="rates">{t("tab-rates")}</Tab>
          </TabList>
          <Suspense fallback={<Progress message={t("loading")} />}>
            {selectedValue === "add-transaction" && (
              <>
                <MonthLabel />
                <AddTransactionForm categories={categories} />
              </>
            )}
          </Suspense>
          <Suspense fallback={<Progress message={t("loading")} />}>
            {selectedValue === "rates" && <RatesView />}
          </Suspense>
        </>
      ) : (
        <Progress message={t("loading")} />
      )}
    </main>
  );
}

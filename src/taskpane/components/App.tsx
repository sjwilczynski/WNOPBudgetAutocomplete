import * as React from "react";
import { useTranslation } from "react-i18next";
import { AddTransactionForm } from "./AddTransactionForm/AddTransactionForm";
import { Header } from "./Header/Header";
import { MonthLabel } from "./MonthLabel/MonthLabel";
import { Progress } from "./Progress";
import { TabList, Tab, makeStyles, tokens } from "@fluentui/react-components";
import type { SelectTabData, SelectTabEvent } from "@fluentui/react-components";
import { RatesView } from "./RatesView/RatesView";

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
  const [selectedValue, setSelectedValue] = React.useState<string>("add-transaction");
  const styles = useStyles();

  const onTabSelect = (_event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value as string);
  };

  return (
    <main className={styles.app}>
      <Header message={t("welcome")} />
      {categories ? (
        <>
          <MonthLabel />
          <TabList
            selectedValue={selectedValue}
            onTabSelect={onTabSelect}
            className={styles.tabList}
          >
            <Tab value="add-transaction">{t("tab-add-transaction")}</Tab>
            <Tab value="rates">{t("tab-rates")}</Tab>
          </TabList>

          <div>
            {selectedValue === "add-transaction" && <AddTransactionForm categories={categories} />}
            {selectedValue === "rates" && <RatesView />}
          </div>
        </>
      ) : (
        <Progress message={t("loading")} />
      )}
    </main>
  );
}

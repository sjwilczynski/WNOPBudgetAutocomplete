import * as React from "react";
import {
  Field,
  Spinner,
  Text,
  DataGridBody,
  DataGridRow,
  DataGrid,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridCell,
  createTableColumn,
  type TableColumnId,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { useTranslation } from "react-i18next";
import { useRatesForDateRange } from "../../currency/useRatesForDateRange";

const formatDateToYYYYMMDD = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  dateColumn: {
    minWidth: "85px",
  },
  error: {
    color: tokens.colorPaletteRedForeground1,
  },
});

type GridItem = {
  date: string;
  EUR: number;
  USD: number;
  NOK: number;
};

export const RatesView = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const today = React.useMemo(() => new Date(), []);
  const [selectedDate, setSelectedDate] = React.useState<Date | null | undefined>(today);
  const endDate = selectedDate ? formatDateToYYYYMMDD(selectedDate) : null;

  const onSelectDate = (date: Date | null | undefined): void => {
    setSelectedDate(date);
  };

  const { ratesByDate, isLoading, isError } = useRatesForDateRange(endDate);

  const items: GridItem[] = React.useMemo(() => {
    return Object.entries(ratesByDate)
      .map(([date, rates]) => ({
        date,
        EUR: rates.EUR,
        USD: rates.USD,
        NOK: rates.NOK,
      }))
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [ratesByDate]);

  const columns = React.useMemo(
    () => [
      createTableColumn<GridItem>({
        columnId: "date",
        renderHeaderCell: () => t("date"),
        renderCell: (item) => item.date,
      }),
      createTableColumn<GridItem>({
        columnId: "eur",
        renderHeaderCell: () => "EUR",
        renderCell: (item) => item.EUR?.toFixed(2) ?? "-",
      }),
      createTableColumn<GridItem>({
        columnId: "usd",
        renderHeaderCell: () => "USD",
        renderCell: (item) => item.USD?.toFixed(2) ?? "-",
      }),
      createTableColumn<GridItem>({
        columnId: "nok",
        renderHeaderCell: () => "NOK",
        renderCell: (item) => item.NOK?.toFixed(3) ?? "-",
      }),
    ],
    [t]
  );

  const getColumnClassName = (columnId: TableColumnId) => {
    return columnId === "date" ? styles.dateColumn : undefined;
  };

  return (
    <div className={styles.root}>
      <Field label={t("select-date")}>
        <DatePicker
          value={selectedDate}
          onSelectDate={onSelectDate}
          minDate={new Date("2000-01-01")}
          maxDate={today}
        />
      </Field>

      {isLoading && <Spinner label={t("loading")} />}
      {isError && (
        <Text size={300} weight="semibold" className={styles.error}>
          {t("rates-loading-error")}
        </Text>
      )}
      {!isLoading && !isError && endDate && (
        <DataGrid items={items} columns={columns} aria-label={t("rates-table-label")}>
          <DataGridHeader>
            <DataGridRow>
              {(column) => (
                <DataGridHeaderCell
                  key={column.columnId}
                  className={getColumnClassName(column.columnId)}
                >
                  {column.renderHeaderCell()}
                </DataGridHeaderCell>
              )}
            </DataGridRow>
          </DataGridHeader>
          <DataGridBody<GridItem>>
            {({ item, rowId }) => (
              <DataGridRow<GridItem> key={rowId}>
                {(column) => (
                  <DataGridCell
                    key={column.columnId}
                    className={getColumnClassName(column.columnId)}
                  >
                    {column.renderCell(item)}
                  </DataGridCell>
                )}
              </DataGridRow>
            )}
          </DataGridBody>
        </DataGrid>
      )}
    </div>
  );
};

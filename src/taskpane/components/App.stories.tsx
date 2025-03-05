import { Decorator, Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import App from "./App";
import { ExcelProvider } from "../context/ExcelContext";
import * as React from "react";


const excelDecorator: Decorator = (Story) => (
  <ExcelProvider submitTransaction={action("submitTransaction")} month="January">
    <Story />
  </ExcelProvider>
);

const meta = {
  title: "App",
  component: App,
  decorators: [excelDecorator],
  args: {
    categories: {
      Food: ["Groceries", "Restaurants", "Snacks"],
      Transportation: ["Public Transport", "Car", "Parking"],
      Entertainment: ["Movies", "Concerts", "Books"],
    },
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphonese2",
    },
  },
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof App>;

export const Default: Story = {};

import { Decorator, Meta, StoryObj } from "@storybook/react";
import { within, expect, userEvent, fn } from "@storybook/test";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import App from "./App";
import { ExcelProvider } from "../context/ExcelContext";
import * as React from "react";

const submitTransactionMock = fn();

const excelDecorator: Decorator = (Story) => (
  <ExcelProvider submitTransaction={submitTransactionMock} month="January">
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

export const ValidForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const submitButton = await canvas.findByRole("button", { name: "Add transaction" });
    await expect(submitButton).toBeDisabled();
    await fillInForm(canvas, "Car", "1", "100");
    await expect(submitButton).toBeEnabled();
    await userEvent.click(submitButton);
    await expect(submitTransactionMock).toHaveBeenCalledWith(
      {
        category: "Transportation",
        subcategory: "Car",
        day: 1,
        price: 100,
      },
      expect.objectContaining({})
    );
  },
};

export const InvalidCategory: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const categoryField = await canvas.findByRole("combobox", { name: "Category" });
    await userEvent.type(categoryField, "Invalid");
    await userEvent.click(canvas.getByRole("spinbutton", { name: "Day" }));
    const submitButton = canvas.getByRole("button", { name: "Add transaction" });
    await expect(submitButton).toBeDisabled();
    await expect(canvas.getByText("Subcategory is not valid")).toBeInTheDocument();
    await expect(categoryField).toBeInvalid();
  },
};

export const InvalidDay: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const dayField = await canvas.findByRole("spinbutton", { name: "Day" });
    await userEvent.type(dayField, "32");
    const submitButton = canvas.getByRole("button", { name: "Add transaction" });
    await userEvent.click(canvas.getByRole("spinbutton", { name: "Price" }));
    await expect(submitButton).toBeDisabled();
    await expect(canvas.getByText("day must be less than or equal to 31")).toBeInTheDocument();
    await expect(dayField).toBeInvalid();
  },
};

export const InvalidPrice: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const priceField = await canvas.findByRole("spinbutton", { name: "Price" });
    await userEvent.type(priceField, "103124-");
    await userEvent.click(canvas.getByRole("spinbutton", { name: "Day" }));
    const submitButton = canvas.getByRole("button", { name: "Add transaction" });
    await expect(submitButton).toBeDisabled();
    await expect(canvas.getByText("Price must be a number")).toBeInTheDocument();
    await expect(priceField).toBeInvalid();
  },
};

export const KeyboardNavigation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await new Promise((resolve) => setTimeout(resolve, 500));
    await fillInForm(canvas, "Car", "1", "100");
    await userEvent.tab();
    const submitButton = canvas.getByRole("button", { name: "Add transaction" });
    const categoryField = canvas.getByRole("combobox", { name: "Category" });
    const dayField = canvas.getByRole("spinbutton", { name: "Day" });
    const priceField = canvas.getByRole("spinbutton", { name: "Price" });
    await expect(submitButton).toHaveFocus();
    await userEvent.tab({ shift: true });
    await expect(priceField).toHaveFocus();
    await userEvent.tab({ shift: true });
    await expect(dayField).toHaveFocus();
    await userEvent.tab({ shift: true });
    await expect(categoryField).toHaveFocus();
  },
};

const fillInForm = async (
  canvas: ReturnType<typeof within>,
  category: string,
  day: string,
  price: string
) => {
  const categoryField = await canvas.findByRole("combobox", { name: "Category" });
  await userEvent.click(categoryField);
  await userEvent.click(canvas.getByRole("option", { name: category }));
  const dayField = await canvas.findByRole("spinbutton", { name: "Day" });
  await userEvent.type(dayField, day);
  const priceField = await canvas.findByRole("spinbutton", { name: "Price" });
  await userEvent.type(priceField, price);
};

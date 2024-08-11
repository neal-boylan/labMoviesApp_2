import type { Meta, StoryObj } from "@storybook/react";
import SeriesListHeader from "../components/headerSeriesList";

const meta = {
  title: "Series Page/Header",
  component: SeriesListHeader,
} satisfies Meta<typeof SeriesListHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { title: "Discover Series" },
};

Basic.storyName = "Default";

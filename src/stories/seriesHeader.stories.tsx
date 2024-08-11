import type { Meta, StoryObj } from "@storybook/react";
import SeriesHeader from "../components/headerSeries";
import SampleSeries from "./sampleSeriesData";

const meta = {
  title: "Series Details Page/SeriesHeader",
  component: SeriesHeader,
} satisfies Meta<typeof SeriesHeader>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: SampleSeries,
};
Basic.storyName = "Default";

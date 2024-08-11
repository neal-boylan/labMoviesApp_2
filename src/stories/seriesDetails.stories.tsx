import type { Meta, StoryObj } from "@storybook/react";
import SeriesDetails from "../components/seriesDetails";
import SampleSeries from "./sampleSeriesData";

const meta = {
  title: "Series Details Page/SeriesDetails",
  component: SeriesDetails,
} satisfies Meta<typeof SeriesDetails>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: SampleSeries,
};
Basic.storyName = "Default";

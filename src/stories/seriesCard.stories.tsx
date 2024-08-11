import type { Meta, StoryObj } from "@storybook/react";
import SeriesCard from "../components/seriesCard";
import SampleSeries from "./sampleSeriesData";

const meta = {
  title: "Home Page/SeriesCard",
  component: SeriesCard,
} satisfies Meta<typeof SeriesCard>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: SampleSeries,
};
Basic.storyName = "Default";

const sampleNoPoster = { ...SampleSeries, poster_path: undefined };
export const Exceptional: Story = {
  args: sampleNoPoster,
};
Exceptional.storyName = "Exception";

import type { Meta, StoryObj } from "@storybook/react";
import { Satellite } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const meta = {
  title: "Components/SiteHeader",
  component: SiteHeader,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SiteHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Site Title",
    icon: <Satellite />,
    children: "Children",
  },
};

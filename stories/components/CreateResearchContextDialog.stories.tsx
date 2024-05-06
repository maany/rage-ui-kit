import type { Meta, StoryObj } from "@storybook/react";

import { CreateResearchContextDialog } from "@/components/dialog/CreateResearchContextDialog";


import { action } from '@storybook/addon-actions';


const meta = {
    title: "Components/Dialogs/CreateResearchContext",
    component: CreateResearchContextDialog,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof CreateResearchContextDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyAction: Story = {
    args: {
        buttonAction: action('buttonAction'),
    },
};

export const AlertExample: Story = {
    args: {
        buttonAction: (inputValues: { [key: string]: string }) => {
            const formattedInputValues = Object.entries(inputValues)
                .map(([key, value]) => `${key}: ${value}`)
                .join('\n   ');
            alert(`User inputs were:\n\n   ${formattedInputValues}`);
        },
    },
};
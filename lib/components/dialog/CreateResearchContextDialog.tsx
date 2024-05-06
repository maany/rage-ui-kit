"use client";
import { Dialog as ShadcnDialog } from "@/ui/dialog"
import { Button } from "@/components/button/index"
import { Label as ShadcnLabel } from "@/ui/label"
import { Input as ShadcnInput } from "@/ui/input"
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"

import { useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

export interface CreateResearchContextDialog {
    buttonAction: (inputValues: { [key: string]: string }) => void;
};


/**
 * Create a new research context dialog
 */
export const CreateResearchContextDialog = ({
    buttonAction,
    ...props
}: CreateResearchContextDialog) => {

    const isDarkMode = useDarkMode();

    const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

    const handleInputChange = (field: string, value: string) => {
        setInputValues(prev => ({ ...prev, [field]: value }));
    };

    const handleButtonClick = () => {
        buttonAction(inputValues);
    };


    return (

        <ShadcnDialog>

            <DialogTrigger asChild>
                <Button
                    variant="default"
                    size="icon"
                    label={<span style={{ fontSize: '28px', fontWeight: 'bold' }}>+</span>}
                />
            </DialogTrigger>

            <DialogContent className={`sm:max-w-md ${isDarkMode ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-black'}`}>

                <DialogClose asChild
                    className="absolute top-2 right-2"
                />

                <DialogHeader
                    className="mb-4"
                >
                    <DialogTitle>New research context</DialogTitle>
                    <DialogDescription>Create a new research context to organize your research</DialogDescription>
                </DialogHeader>

                <div>
                    <ShadcnLabel>Name</ShadcnLabel>
                    <ShadcnInput
                        style={{ color: 'black', marginBottom: '8px', marginTop: '8px'}}
                        onChange={(e) => handleInputChange("researchContextName", e.target.value)}
                    />
                </div>
                <div>
                    <ShadcnLabel>Description</ShadcnLabel>
                    <ShadcnInput
                        style={{ color: 'black', marginBottom: '8px', marginTop: '8px'}}
                        onChange={(e) => handleInputChange("researchContextDescription", e.target.value)}
                    />
                </div>

                <Button
                    className="mt-8"
                    variant="default"
                    size="default"
                    label="Create new research context"
                    onClick={handleButtonClick}
                />

            </DialogContent>
        </ShadcnDialog>
    )
};

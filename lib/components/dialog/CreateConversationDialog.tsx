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

export interface buttonActionInputValues {
    conversationTitle: string;
}

export interface CreateConversationDialogProps {
    buttonAction: (inputValues: buttonActionInputValues) => void;
};


/**
 * Create a new conversation dialog
 */
export const CreateConversationDialog = ({
    buttonAction,
    ...props
}: CreateConversationDialogProps) => {

    const isDarkMode = useDarkMode();

    const [inputValues, setInputValues] = useState<{ conversationTitle: string }>({ conversationTitle: ''});

    const handleInputChange = (field: string, value: string) => {
        setInputValues(prev => ({ ...prev, [field]: value }));
    };

    const [validation, setValidation] = useState<{ conversationTitle: boolean}>({ conversationTitle: false})

    const handleButtonClick = () => {

        if (!inputValues.conversationTitle ) {
            setValidation({
                conversationTitle: !inputValues.conversationTitle,
                
            });
            return;
        }

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
                    <DialogTitle>New conversation</DialogTitle>
                    <DialogDescription>Create a new conversation to organize your research</DialogDescription>
                </DialogHeader>

                <label>
                    <ShadcnLabel>Title {validation.conversationTitle && <div style={{ color: 'red' }}>Required field</div>}</ShadcnLabel>
                    <ShadcnInput
                        style={{ 
                            color: 'black',
                            borderColor: validation.conversationTitle ? 'red' : 'black',
                            marginBottom: '8px',
                            marginTop: '8px'}}
                        onChange={(e) => handleInputChange("conversationTitle", e.target.value)}
                        placeholder="Enter a title for the conversation"
                    />
                    
                </label>


                <Button
                    className="mt-8"
                    variant="default"
                    size="default"
                    label="Create new conversation"
                    onClick={handleButtonClick}
                />

            </DialogContent>
        </ShadcnDialog>
    )
};

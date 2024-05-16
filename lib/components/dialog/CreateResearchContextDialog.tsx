"use client";
import { Dialog as ShadcnDialog } from "@/ui/dialog";
import { Button } from "@/components/button/index";
import { Label as ShadcnLabel } from "@/ui/label";
import { Input as ShadcnInput } from "@/ui/input";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { useState } from "react";
import { useDarkMode } from "storybook-dark-mode";

export interface buttonActionInputValues {
  researchContextName: string;
  researchContextDescription: string;
}

export interface CreateResearchContextDialogProps {
  buttonAction: (inputValues: buttonActionInputValues) => void;
}

/**
 * Create a new research context dialog
 */
export const CreateResearchContextDialog = ({
  buttonAction,
  ...props
}: CreateResearchContextDialogProps) => {
  const isDarkMode = useDarkMode();

  const [inputValues, setInputValues] = useState<{
    researchContextName: string;
    researchContextDescription: string;
  }>({ researchContextName: "", researchContextDescription: "" });

  const handleInputChange = (field: string, value: string) => {
    setInputValues((prev) => ({ ...prev, [field]: value }));
  };

  const [validation, setValidation] = useState<{
    researchContextName: boolean;
    researchContextDescription: boolean;
  }>({ researchContextName: false, researchContextDescription: false });

  const handleButtonClick = () => {
    if (
      !inputValues.researchContextName ||
      !inputValues.researchContextDescription
    ) {
      setValidation({
        researchContextName: !inputValues.researchContextName,
        researchContextDescription: !inputValues.researchContextDescription,
      });
      return;
    }

    buttonAction(inputValues);
  };

  return (
    <ShadcnDialog {...props}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="icon"
          label={
            <span style={{ fontSize: "28px", fontWeight: "bold" }}>+</span>
          }
        />
      </DialogTrigger>

      <DialogContent
        className={`sm:max-w-md ${isDarkMode ? "bg-neutral-800 text-white" : "bg-neutral-100 text-black"}`}
      >
        <DialogClose asChild className="absolute top-2 right-2" />

        <DialogHeader className="mb-4">
          <DialogTitle>New research context</DialogTitle>
          <DialogDescription>
            Create a new research context to organize your research
          </DialogDescription>
        </DialogHeader>

        <label>
          <ShadcnLabel>
            Name{" "}
            {validation.researchContextName && (
              <div style={{ color: "red" }}>Required field</div>
            )}
          </ShadcnLabel>
          <ShadcnInput
            style={{
              color: "black",
              borderColor: validation.researchContextName ? "red" : "black",
              marginBottom: "8px",
              marginTop: "8px",
            }}
            onChange={(e) =>
              handleInputChange("researchContextName", e.target.value)
            }
            placeholder="Enter a name for the research context"
          />
        </label>

        <label>
          <ShadcnLabel>
            Description{" "}
            {validation.researchContextDescription && (
              <div style={{ color: "red" }}>Required field</div>
            )}
          </ShadcnLabel>
          <ShadcnInput
            style={{
              color: "black",
              borderColor: validation.researchContextDescription
                ? "red"
                : "black",
              marginBottom: "8px",
              marginTop: "8px",
            }}
            onChange={(e) =>
              handleInputChange("researchContextDescription", e.target.value)
            }
            placeholder="Enter a description for the research context"
          />
        </label>

        <Button
          className="mt-8"
          variant="default"
          size="default"
          label="Create new research context"
          onClick={handleButtonClick}
        />
      </DialogContent>
    </ShadcnDialog>
  );
};

"use client";
import { Dialog as ShadcnDialog } from "@/ui/dialog";
import { Button } from "@/components/button/index";
import { Input as ShadcnInput } from "@/ui/input";
import { cn } from "@/utils/utils";

import {
  Form as ShadcnForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogClose,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PlusCircle } from "lucide-react";

/**
 * Interface representing the input values for the onSubmit function.
 */
export interface onSubmitInputValues {
  researchContextName: string;
  researchContextDescription: string;
}

/**
 * Props for the CreateResearchContextDialog component.
 */
export interface CreateResearchContextDialogProps {
  /**
   * Callback function that will be called when the form is submitted.
   */
  onSubmit: (inputValues: onSubmitInputValues) => void;
}

/**
 * Zod schema for the form values.
 */
const formSchema = z.object({
  researchContextName: z.string().min(6, {
    message:
      "Research context name is required and must be at least 6 characters long",
  }),
  researchContextDescription: z.string().min(10, {
    message:
      "Research context description is required and must be at least 10 characters long",
  }),
});

/**
 * Create a new research context dialog
 */
export const CreateResearchContextDialog = ({
  onSubmit,
  ...props
}: CreateResearchContextDialogProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      researchContextName: "",
      researchContextDescription: "",
    },
  });

  const onSubmitWrapper = (values: z.infer<typeof formSchema>) => {
    onSubmit(values);
  };

  return (
    <ShadcnDialog {...props}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="icon"
          label={<PlusCircle />} // Carla: find a good icon
        />
      </DialogTrigger>

      <DialogContent
        className={cn(
          "sm:max-w-md",
          "bg-neutral-100 dark:bg-neutral-800",
          "text-black dark:text-white",
        )}
      >
        <DialogClose asChild />

        <DialogHeader>
          <DialogTitle>New conversation</DialogTitle>
          <DialogDescription>
            Create a new conversation to organize your research
          </DialogDescription>
        </DialogHeader>

        <ShadcnForm {...form}>
          <form onSubmit={form.handleSubmit(onSubmitWrapper)}>
            <div className={cn("mt-medium mb-medium")}>
              <FormField
                control={form.control}
                name="researchContextName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>

                    <FormControl>
                      <ShadcnInput
                        className={cn(
                          "text-neutral-900",
                          form.formState.errors.researchContextName
                            ? "border-error-500"
                            : "border-neutral-300",
                        )}
                        placeholder="Enter a name for the research context"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className={cn("text-error-500")} />
                  </FormItem>
                )}
              />
            </div>

            <div className={cn("mt-medium mb-medium")}>
              <FormField
                control={form.control}
                name="researchContextDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description *</FormLabel>
                    <FormControl>
                      <ShadcnInput
                        className={cn(
                          "text-neutral-900 ",
                          form.formState.errors.researchContextDescription
                            ? "border-error-500"
                            : "border-neutral-300",
                        )}
                        placeholder="Enter a description for the research context"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className={cn("text-error-500")} />
                  </FormItem>
                )}
              />
            </div>

            <div className={cn("text-center")}>
              <Button
                className="mt-large"
                variant="default"
                size="default"
                label="Create new research context"
                type="submit"
              />
            </div>
          </form>
        </ShadcnForm>
      </DialogContent>
    </ShadcnDialog>
  );
};

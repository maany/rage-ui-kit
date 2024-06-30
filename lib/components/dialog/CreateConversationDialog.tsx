"use client";
import { Dialog as ShadcnDialog } from "@/ui/dialog";
import { Button } from "@/components/button/index";
import { Input as ShadcnInput } from "@/ui/input";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { cn } from "@/utils/utils";

import {
  Form as ShadcnForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PenSquare } from "lucide-react";

export interface buttonActionInputValues {
  conversationTitle: string;
}

export interface CreateConversationDialogProps {
  buttonAction: (inputValues: buttonActionInputValues) => void;
}

/**
 * Zod schema for the form values.
 */
const formSchema = z.object({
  conversationTitle: z
    .string()
    .transform((val) => val.trim()) // Remove leading and trailing whitespace
    .refine((val) => val.length >= 6, {
      message: "The title is required and must be at least 6 characters long",
    }),
});

/**
 * Create a new conversation dialog
 */
export const CreateConversationDialog = ({
  buttonAction,
  ...props
}: CreateConversationDialogProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      conversationTitle: "",
    },
  });

  const onSubmitWrapper = (values: z.infer<typeof formSchema>) => {
    buttonAction(values);
  };

  return (
    <ShadcnDialog {...props}>
      <DialogTrigger asChild>
        <Button variant="default" size="icon" label={<PenSquare />} />
      </DialogTrigger>

      <DialogContent
        className={cn(
          "sm:max-w-md",
          "bg-neutral-100 dark:bg-neutral-800",
          "text-black dark:text-white",
        )}
      >
        <DialogClose asChild className="absolute top-2 right-2" />

        <DialogHeader>
          <DialogTitle>New conversation</DialogTitle>
          <DialogDescription>
            Create a new conversation to organize your research
          </DialogDescription>
        </DialogHeader>

        <ShadcnForm {...form}>
          <form onSubmit={form.handleSubmit(onSubmitWrapper)}>
            <div className={cn("mt-small mb-small")}>
              <FormField
                control={form.control}
                name="conversationTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conversation title *</FormLabel>

                    <FormControl>
                      <ShadcnInput
                        className={cn(
                          "text-neutral-900",
                          form.formState.errors.conversationTitle
                            ? "border-error-500"
                            : "border-neutral-300",
                        )}
                        placeholder="Enter a title for the conversation"
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
                label="Create new conversation"
                type="submit"
              />
            </div>
          </form>
        </ShadcnForm>
      </DialogContent>
    </ShadcnDialog>
  );
};

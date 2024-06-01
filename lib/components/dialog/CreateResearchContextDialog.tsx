"use client";
import { Dialog as ShadcnDialog } from "@/ui/dialog";
import { Button } from "@/components/button/index";
import { Input as ShadcnInput } from "@/ui/input";

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

import { useDarkMode } from "storybook-dark-mode";

export interface onSubmitInputValues {
  researchContextName: string;
  researchContextDescription: string;
}

export interface CreateResearchContextDialogProps {
  onSubmit: (inputValues: onSubmitInputValues) => void;
}

const formSchema = z.object({
  researchContextName: z.string().min(1, {
    message: "Research context name is required",
  }),
  researchContextDescription: z.string().min(1, {
    message: "Research context description is required",
  }),
});

/**
 * Create a new research context dialog
 */
export const CreateResearchContextDialog = ({
  onSubmit,
  ...props
}: CreateResearchContextDialogProps) => {
  const isDarkMode = useDarkMode();

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
          <DialogTitle>New conversation</DialogTitle>
          <DialogDescription>
            Create a new conversation to organize your research
          </DialogDescription>
        </DialogHeader>

        <ShadcnForm {...form}>
          <form onSubmit={form.handleSubmit(onSubmitWrapper)}>
            <FormField
              control={form.control}
              name="researchContextName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <ShadcnInput
                      style={{
                        color: "black",
                        borderColor: form.formState.errors.researchContextName
                          ? "red"
                          : "black",
                        marginBottom: "8px",
                        marginTop: "8px",
                      }}
                      placeholder="Enter a name for the research context"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage style={{ color: "red" }} />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="researchContextDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <ShadcnInput
                      style={{
                        color: "black",
                        borderColor: form.formState.errors
                          .researchContextDescription
                          ? "red"
                          : "black",
                        marginBottom: "8px",
                        marginTop: "8px",
                      }}
                      placeholder="Enter a description for the research context"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage style={{ color: "red" }} />
                </FormItem>
              )}
            />

            <div style={{ textAlign: "center" }}>
              <Button
                className="mt-8"
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

"use client";
import {
  CardContent,
  CardHeader,
  CardTitle,
  Card as ShadcnCard,
} from "@/ui/card";

import {
  Form as ShadcnForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { cn } from "@/utils/utils";
import { useState } from "react";
import { Input as ShadcnInput } from "../ui/input";
import { Button } from "@/components/button/index";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";

export interface buttonActionInputValues {
  userName: string;
  userPassword: string;
}

export interface LoginCardProps {
  buttonAction: (inputValues: buttonActionInputValues) => void;
}

/**
 * Zod schema for the form values.
 */
const formSchema = z.object({
  userName: z.string().min(1, {
    message: "Username is required",
  }),
  userPassword: z.string().min(1, {
    message: "Password is required",
  }),
});

/**
 * Create a new login card
 */
export const LoginCard = ({ buttonAction, ...props }: LoginCardProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      userPassword: "",
    },
  });

  const buttonActionWrapper = (values: z.infer<typeof formSchema>) => {
    buttonAction(values);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <ShadcnCard {...props}>
      <CardContent
        className={cn(
          "flex flex-col xl:flex-row items-center justify-between p-4 xl:py-12",
          "bg-neutral-100 dark:bg-neutral-800",
          "text-black dark:text-white"
        )}
      >
        <CardHeader>
          <CardTitle className="xl:animate-fadeInUp animate-carla-spin font-gluten">Welcome to SDA</CardTitle>
          <h1>JAJAJAJA</h1>
        </CardHeader>

        <ShadcnForm {...form}>
          <form
            className={cn(
              "flex flex-col items-center justify-center gap-medium"
            )}
            onSubmit={form.handleSubmit(buttonActionWrapper)}
          >
            <div
              className={cn(
                "flex flex-col items-center justify-between gap-medium"
              )}
            >
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username *</FormLabel>

                    <FormControl>
                      <ShadcnInput
                        className={cn(
                          "text-neutral-900",
                          form.formState.errors.userName
                            ? "border-error-500"
                            : "border-neutral-300"
                        )}
                        placeholder="Enter your username"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className={cn("text-error-500")} />
                  </FormItem>
                )}
              />
            </div>

            <div
              className={cn(
                "w-full flex flex-col items-center justify-center px-4"
              )}
            >
              <FormField
                control={form.control}
                name="userPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password *</FormLabel>
                    <div
                      className={cn(
                        "border border-input rounded-md",
                        form.formState.errors.userPassword
                          ? "border border-error-500"
                          : "border-neutral-300"
                      )}
                    >
                      <FormControl>
                        <div className={cn("w-full flex flex-row px-0")}>
                          <div className="flex flex-row items-center justify-between border-none rounded-md bg-white focus-within:ring-2 ring-ring ring-offset-background ring-offset-2">
                            <ShadcnInput
                              className={cn(
                                "focus-visible:ring-3 pr-1",
                                "border-none",
                                "text-neutral-900"
                              )}
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              {...field}
                            />
                            <div className="flex flex-row items-center justify-between text-black bg-white rounded-md">
                              <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className={cn(
                                  "flex items-center justify-center",
                                  "bg-none",
                                  "border-none"
                                )}
                              >
                                {showPassword ? (
                                  <EyeOff size={16} />
                                ) : (
                                  <Eye size={16} />
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </FormControl>
                    </div>
                    <FormMessage className={cn("text-error-500")} />
                  </FormItem>
                )}
              />
            </div>

            <div className={cn("text-center")}>
              <Button
                variant="default"
                size="default"
                label="Login"
                type="submit"
              />
            </div>
          </form>
        </ShadcnForm>
      </CardContent>
    </ShadcnCard>
  );
};

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
          "sm:max-w-md",
          "bg-neutral-100 dark:bg-neutral-800",
          "text-black dark:text-white",
        )}
      >
        <CardHeader>
          <CardTitle>Welcome to SDA</CardTitle>
        </CardHeader>

        <ShadcnForm {...form}>
          <form onSubmit={form.handleSubmit(buttonActionWrapper)}>
            <div className={cn("mt-medium mb-medium")}>
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
                            : "border-neutral-300",
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

            <div className={cn("mt-medium mb-medium")}>
              <FormField
                control={form.control}
                name="userPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password *</FormLabel>
                    <FormControl>
                      <div className={cn("relative")}>
                        <ShadcnInput
                          className={cn(
                            "text-neutral-900",
                            form.formState.errors.userPassword
                              ? "border-error-500"
                              : "border-neutral-300",
                          )}
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className={cn(
                            "absolute right-2 top-1/2 transform -translate-y-1/2",
                            "text-black dark:text-black",
                            "bg-none",
                            "border-none",
                          )}
                        >
                          {showPassword ? (
                            <EyeOff size={16} />
                          ) : (
                            <Eye size={16} />
                          )}
                        </button>
                      </div>
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

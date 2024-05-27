"use client";
import {
  CardContent,
  CardHeader,
  CardTitle,
  Card as ShadcnCard,
} from "@/ui/card";

import { useState } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { Label as ShadcnLabel } from "../ui/label";
import { Input as ShadcnInput } from "../ui/input";
import { Button } from "@/components/button/index";

export interface buttonActionInputValues {
  userName: string;
  userPassword: string;
}

export interface LoginCardProps {
  buttonAction: (inputValues: buttonActionInputValues) => void;
}

/**
 * Create a new research context dialog
 */
export const LoginCard = ({ buttonAction, ...props }: LoginCardProps) => {
  const isDarkMode = useDarkMode();

  const [inputValues, setInputValues] = useState<{
    userName: string;
    userPassword: string;
  }>({ userName: "", userPassword: "" });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setInputValues((prev) => ({ ...prev, [field]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const [validation, setValidation] = useState<{
    userName: boolean;
    userPassword: boolean;
  }>({ userName: false, userPassword: false });

  const handleButtonClick = () => {
    if (!inputValues.userName || !inputValues.userPassword) {
      setValidation({
        userName: !inputValues.userName,
        userPassword: !inputValues.userPassword,
      });
      return;
    }

    buttonAction(inputValues);
  };

  return (
    <ShadcnCard
      className={`sm:max-w-md ${isDarkMode ? "bg-neutral-800 text-white" : "bg-neutral-100 text-black"}`}
      {...props}
    >
      <CardHeader>
        <CardTitle>Welcome to SDA</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <ShadcnLabel htmlFor="name">
                Username{" "}
                {validation.userName && (
                  <div style={{ color: "red" }}>Required field</div>
                )}
              </ShadcnLabel>
              <ShadcnInput
                id="name"
                placeholder="Enter your username"
                style={{ color: isDarkMode ? "black" : "inherit" }}
                onChange={(e) => handleInputChange("userName", e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <ShadcnLabel htmlFor="password">
                Password{" "}
                {validation.userPassword && (
                  <div style={{ color: "red" }}>Required field</div>
                )}
              </ShadcnLabel>
              <div style={{ position: "relative" }}>
                <ShadcnInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  style={{ color: isDarkMode ? "black" : "inherit" }}
                  onChange={(e) =>
                    handleInputChange("userPassword", e.target.value)
                  }
                />

                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    color: isDarkMode ? "black" : "black",
                  }}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-slash"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zM8 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M11.354 12.354a2 2 0 0 1-2.708-2.707L9.414 8 8 9.414l-1.354-1.353a2 2 0 0 1-2.708 2.708l-.707-.707a3 3 0 0 0 4.242-4.242l-.707-.707a4 4 0 0 1 5.656 5.656l-.707.707z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5 8-5.5 8-5.5Zm-8 4.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "5px",
        }}
      >
        <Button
          variant="default"
          size="default"
          label="Login"
          onClick={handleButtonClick}
        />
      </div>
    </ShadcnCard>
  );
};

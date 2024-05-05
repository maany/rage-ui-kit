"use client";

import { LogOut } from "lucide-react";
import * as React from "react";
import { Button } from "../..";

export interface SiteHeaderProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}
export function SiteHeader(props: SiteHeaderProps) {
  return (
    <div
      id="site-header"
      className="w-full flex flex-col lg:flex-row items-center justify-start gap-4"
    >
      <div
        id="site-header-icon-and-title"
        className="flex flex-col items-center lg:flex-row gap-4 font-bold text-primary-light dark:text-text-primary-dark"
      >
        <div className="flex items-center gap-2">{props.icon}</div>
        {props.title}
      </div>
      <div
        id="site-header-children"
        className="flex flex-grow items-center justify-end"
      >
        {props.children}
      </div>
      <div id="site-header-tail" className="">
        <Button variant="outline" label={<LogOut />} size="icon"></Button>
      </div>
    </div>
  );
}

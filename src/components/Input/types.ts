import type React from "react";

export interface IInput {
  name: string;
  errorMessage?: any;
  letfIcon?: React.ReactNode;
  control?: any;
  placeholder?: string | number;
  type: string;
}

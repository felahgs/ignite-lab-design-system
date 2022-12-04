import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
    children: ReactNode;
  }
  
export interface TextInputElementProps 
  extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export interface TextInputIconProps {
  children: ReactNode;
}
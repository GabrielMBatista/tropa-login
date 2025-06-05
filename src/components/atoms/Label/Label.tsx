import React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return <label {...rest}>{children}</label>;
};

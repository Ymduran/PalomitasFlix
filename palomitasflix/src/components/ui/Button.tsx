import type { ButtonHTMLAttributes } from "react";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: "primary" | "secondary" | "danger" | "ghost" }
export function Button({ variant = "primary", className = "", ...props }: Props) { return <button className={`button button--${variant} ${className}`} {...props} />; }
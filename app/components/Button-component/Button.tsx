import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
type ButtonProps = ComponentProps<"button">;

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "flex gap-2 bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-md items-center font-light w-full justify-center",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

import { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export default function InputField({ children, ...props }: InputProps) {
  return (
    <div className="p-1 group bg-transparent rounded flex items-center gap-2 px-3 border-2 focus-within:border-gray-800 border-gray-200 drop-shadow-2xl">
      {children}
      <input
        className="text-gray-500 w-full bg-transparent text-xl outline-0 font-light"
        {...props}
      />
    </div>
  );
}

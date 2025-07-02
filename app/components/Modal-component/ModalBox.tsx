import { ComponentProps } from "react";

type ModalBoxProps = ComponentProps<"div">;
export default function ModalBox({children}: ModalBoxProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative max-w-5xl mx-auto p-6 max-h-5xl bg-white shadow-lg rounded-lg fill-black">
        {children}
      </div>
    </div>
  );
}

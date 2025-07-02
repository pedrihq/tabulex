import { ComponentProps } from "react";
type ModalFormProps = ComponentProps<"form"> & {
    children: React.ReactNode;
};


export function ModalForm({ children, ...props }: ModalFormProps) {
  return (
    <form className="rounded space-y-4 flex mt-1 mb-2" {...props}>
      <div className="">{children }</div>
    </form>
  );
}

export function newColum ({children}: ModalFormProps) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-3 mb-3">
      {children}
    </div>
  )
}

import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export default function Button({ text, onClick, className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        className ??
        "inline-flex items-center justify-center rounded-full bg-ocean-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-ocean-900/15 transition hover:-translate-y-0.5 hover:bg-ocean-900"
      }
      {...props}
    >
      {text}
    </button>
  );
}

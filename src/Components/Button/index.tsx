import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export default function Button({ text, onClick, className, ...props }: ButtonProps) {
  return (
    <button type="button" onClick={onClick} className={className} {...props}>
      {text}
    </button>
  );
}

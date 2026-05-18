interface FieldErrorProps {
  message: string | null;
  id: string;
}

export function FieldError({ message, id }: FieldErrorProps) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-sm font-sans text-destructive mt-1">
      {message}
    </p>
  );
}

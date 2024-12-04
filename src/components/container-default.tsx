import { cn } from "@/lib/utils";

export function ContainerDefault({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "m-auto max-w-screen-2xl px-4 md:px-6",
        className
      )}
      {...props}
    />
  );
}

import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
  fullWidth = false,
}: {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}) => {
  return (
    <div
      className={cn(
        fullWidth ? "w-full px-4" : "max-w-7xl mx-auto px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;

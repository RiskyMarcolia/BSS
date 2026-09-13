
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "default" | "outline" | "destructive" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  icon?: boolean;
}

const CTAButton = ({
  children,
  className,
  href,
  variant = "default",
  size = "lg",
  icon = true,
}: CTAButtonProps) => {
  const buttonContent = (
    <>
      {children}
      {icon && <ChevronRight className="ml-2 h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <Button
        asChild
        variant={variant}
        size={size}
        className={cn("rounded-full font-medium", className)}
      >
        <a href={href}>{buttonContent}</a>
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("rounded-full font-medium", className)}
    >
      {buttonContent}
    </Button>
  );
};

export default CTAButton;

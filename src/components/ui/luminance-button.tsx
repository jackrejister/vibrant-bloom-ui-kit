
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

// Define button variants using cva
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        primary: "bg-luminance-primary-500 text-white hover:bg-luminance-primary-600 shadow-sm",
        secondary: "bg-luminance-teal-500 text-white hover:bg-luminance-teal-600 shadow-sm",
        accent: "bg-luminance-purple-500 text-white hover:bg-luminance-purple-600 shadow-sm",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        subtle: "bg-luminance-neutral-100 text-luminance-neutral-900 hover:bg-luminance-neutral-200 dark:bg-luminance-neutral-800 dark:text-luminance-neutral-100 dark:hover:bg-luminance-neutral-700",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  useMotion?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      leftIcon,
      rightIcon,
      children,
      useMotion = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    
    // Create motion variants for animation
    const motionVariants = {
      tap: { scale: 0.98 },
      hover: { scale: 1.05 },
    };

    if (useMotion) {
      return (
        <motion.button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          whileTap="tap"
          whileHover="hover"
          variants={motionVariants}
          {...props}
        >
          {leftIcon && <span className="mr-1">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-1">{rightIcon}</span>}
        </motion.button>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon && <span className="mr-1">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-1">{rightIcon}</span>}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

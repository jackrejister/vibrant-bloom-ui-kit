
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        primary: "bg-luminance-primary-500 text-white hover:bg-luminance-primary-600",
        secondary: "bg-luminance-teal-500 text-white hover:bg-luminance-teal-600",
        accent: "bg-luminance-purple-500 text-white hover:bg-luminance-purple-600",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        subtle: "bg-muted hover:bg-muted/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-8 rounded-md px-2.5 text-xs",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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

// Define a more specific type for motion buttons
interface MotionButtonProps extends Omit<HTMLMotionProps<"button">, keyof VariantProps<typeof buttonVariants>> {
  className?: string;
  children?: React.ReactNode;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const buttonAnimationVariants = {
  hover: {
    scale: 1.03,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.97,
    transition: { duration: 0.1 }
  }
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, leftIcon, rightIcon, useMotion = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const buttonContent = (
      <>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );
    
    if (useMotion) {
      // Create a motion props object with only the properties that motion.button accepts
      const motionProps: MotionButtonProps = {
        className: cn(buttonVariants({ variant, size, className })),
        whileHover: "hover",
        whileTap: "tap",
        variants: buttonAnimationVariants,
        leftIcon,
        rightIcon,
        ref,
        ...props as any // Cast to any as a workaround for type incompatibility
      };
      
      return (
        <motion.button {...motionProps}>
          {buttonContent}
        </motion.button>
      );
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {buttonContent}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

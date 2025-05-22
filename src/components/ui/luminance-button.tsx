
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

const buttonVariants = cva(
  "luminance-button-base",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Luminance custom variants
        primary: "bg-luminance-primary-500 text-white hover:bg-luminance-primary-600 focus:ring-luminance-primary-300",
        teal: "bg-luminance-teal-500 text-white hover:bg-luminance-teal-600 focus:ring-luminance-teal-300",
        purple: "bg-luminance-purple-500 text-white hover:bg-luminance-purple-600 focus:ring-luminance-purple-300",
        amber: "bg-luminance-amber-500 text-white hover:bg-luminance-amber-600 focus:ring-luminance-amber-300",
        coral: "bg-luminance-coral-500 text-white hover:bg-luminance-coral-600 focus:ring-luminance-coral-300",
        mint: "bg-luminance-mint-500 text-white hover:bg-luminance-mint-600 focus:ring-luminance-mint-300",
        // Soft variants
        softPrimary: "bg-luminance-primary-100 text-luminance-primary-800 hover:bg-luminance-primary-200",
        softTeal: "bg-luminance-teal-100 text-luminance-teal-800 hover:bg-luminance-teal-200",
        softPurple: "bg-luminance-purple-100 text-luminance-purple-800 hover:bg-luminance-purple-200",
        softAmber: "bg-luminance-amber-100 text-luminance-amber-800 hover:bg-luminance-amber-200",
        softCoral: "bg-luminance-coral-100 text-luminance-coral-800 hover:bg-luminance-coral-200",
        softMint: "bg-luminance-mint-100 text-luminance-mint-800 hover:bg-luminance-mint-200",
        // Gradient variants
        gradient: "bg-gradient-to-r from-luminance-primary-500 to-luminance-teal-500 text-white hover:from-luminance-primary-600 hover:to-luminance-teal-600",
        gradientPurple: "bg-gradient-to-r from-luminance-primary-500 to-luminance-purple-500 text-white hover:from-luminance-primary-600 hover:to-luminance-purple-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        none: "rounded-none",
        sm: "rounded",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      elevation: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
      },
      animation: {
        none: "",
        subtle: "transition-all duration-200",
        bounce: "transform transition-transform duration-200 active:scale-95 hover:-translate-y-0.5",
        glow: "relative overflow-hidden transition-colors before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-luminance-primary-300 before:to-luminance-teal-300 before:opacity-0 before:blur-xl before:transition-opacity hover:before:opacity-50",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
      elevation: "none",
      animation: "subtle"
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  useMotion?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, elevation, animation, asChild = false, isLoading, leftIcon, rightIcon, useMotion = false, ...props }, ref) => {
    const ButtonElement = useMotion ? motion.button : "button";
    
    const motionProps = useMotion ? {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 10 }
    } : {};
    
    return (
      <ButtonElement
        className={cn(buttonVariants({ variant, size, rounded, elevation, animation, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...motionProps}
        {...props}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        
        {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}
        {props.children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </ButtonElement>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

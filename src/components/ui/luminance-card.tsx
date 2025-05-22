
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground",
  {
    variants: {
      variant: {
        default: "shadow-sm",
        elevated: "shadow-md",
        flat: "border-2",
        ghost: "border-0 shadow-none bg-transparent",
        // Luminance custom variants
        primary: "bg-luminance-primary-50 border-luminance-primary-200 dark:bg-luminance-primary-900/30 dark:border-luminance-primary-800",
        teal: "bg-luminance-teal-50 border-luminance-teal-200 dark:bg-luminance-teal-900/30 dark:border-luminance-teal-800",
        purple: "bg-luminance-purple-50 border-luminance-purple-200 dark:bg-luminance-purple-900/30 dark:border-luminance-purple-800",
        amber: "bg-luminance-amber-50 border-luminance-amber-200 dark:bg-luminance-amber-900/30 dark:border-luminance-amber-800",
        coral: "bg-luminance-coral-50 border-luminance-coral-200 dark:bg-luminance-coral-900/30 dark:border-luminance-coral-800",
        mint: "bg-luminance-mint-50 border-luminance-mint-200 dark:bg-luminance-mint-900/30 dark:border-luminance-mint-800",
        glass: "backdrop-blur-md bg-white/10 border border-white/20 dark:bg-black/10",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        xl: "p-10",
        none: "p-0",
      },
      rounded: {
        default: "rounded-lg",
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
      },
      bordered: {
        true: "border",
        false: "border-0",
      },
      animation: {
        none: "",
        subtle: "transition-all duration-200",
        hover: "transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
        glow: "relative overflow-hidden transition-colors before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-luminance-primary-300 before:to-luminance-teal-300 before:opacity-0 before:blur-xl before:transition-opacity hover:before:opacity-50",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
      bordered: true,
      animation: "none",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
  useMotion?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, rounded, bordered, animation, asChild = false, useMotion = false, ...props }, ref) => {
    const CardElement = useMotion ? motion.div : "div";
    
    const motionProps = useMotion ? {
      whileHover: { y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" },
      transition: { type: "spring", stiffness: 300, damping: 15 }
    } : {};
    
    return (
      <CardElement
        ref={ref}
        className={cn(cardVariants({ variant, size, rounded, bordered, animation, className }))}
        {...motionProps}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

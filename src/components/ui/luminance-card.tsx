
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-lg border border-border shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        primary: "bg-luminance-primary-50 border-luminance-primary-200 dark:bg-luminance-primary-900/30 dark:border-luminance-primary-800",
        secondary: "bg-luminance-teal-50 border-luminance-teal-200 dark:bg-luminance-teal-900/30 dark:border-luminance-teal-800",
        accent: "bg-luminance-purple-50 border-luminance-purple-200 dark:bg-luminance-purple-900/30 dark:border-luminance-purple-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  useMotion?: boolean;
}

interface MotionCardProps extends Omit<HTMLMotionProps<"div">, "className" | "children">,
  VariantProps<typeof cardVariants> {
  className?: string;
  children?: React.ReactNode;
}

const cardAnimationVariants = {
  hover: {
    y: -5,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.2 }
  },
  tap: {
    y: 0,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: { duration: 0.2 }
  },
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, useMotion = false, ...props }, ref) => {
    if (useMotion) {
      return (
        <motion.div
          ref={ref as React.Ref<HTMLDivElement>}
          className={cn(cardVariants({ variant, className }))}
          whileHover="hover"
          variants={cardAnimationVariants}
          {...props as unknown as MotionCardProps}
        />
      );
    }

    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

// Card Header
const CardHeader = React.forwardRef<
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

// Card Title
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// Card Description
const CardDescription = React.forwardRef<
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

// Card Content
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

// Card Footer
const CardFooter = React.forwardRef<
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

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };

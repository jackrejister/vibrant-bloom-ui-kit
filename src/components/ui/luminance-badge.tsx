
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground",
        primary:
          "bg-luminance-primary-500 text-white",
        secondary:
          "bg-luminance-teal-500 text-white",
        accent:
          "bg-luminance-purple-500 text-white",
        outline:
          "border border-input text-foreground",
        subtlePrimary:
          "bg-luminance-primary-100 text-luminance-primary-800 dark:bg-luminance-primary-900 dark:text-luminance-primary-200",
        subtleSecondary:
          "bg-luminance-teal-100 text-luminance-teal-800 dark:bg-luminance-teal-900 dark:text-luminance-teal-200",
        subtleAccent:
          "bg-luminance-purple-100 text-luminance-purple-800 dark:bg-luminance-purple-900 dark:text-luminance-purple-200",
        destructive:
          "bg-destructive text-destructive-foreground",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  useMotion?: boolean;
}

// Define a more specific type for motion badges
interface MotionBadgeProps extends Omit<HTMLMotionProps<"div">, keyof VariantProps<typeof badgeVariants>> {
  className?: string;
  children?: React.ReactNode;
  variant?: VariantProps<typeof badgeVariants>["variant"];
  size?: VariantProps<typeof badgeVariants>["size"];
}

const badgeAnimationVariants = {
  hover: {
    scale: 1.05, 
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
}

function Badge({
  className,
  variant,
  size,
  useMotion = false,
  ...props
}: BadgeProps) {
  
  if (useMotion) {
    // Create a motion props object with only the properties that motion.div accepts
    const motionProps: MotionBadgeProps = {
      className: cn(badgeVariants({ variant, size, className })),
      whileHover: "hover",
      whileTap: "tap",
      variants: badgeAnimationVariants,
      ...props as any // Cast to any as a workaround for type incompatibility
    };
    
    return <motion.div {...motionProps} />;
  }
  
  return (
    <div className={cn(badgeVariants({ variant, size, className }))} {...props} />
  );
}

export { Badge, badgeVariants };


import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const formVariants = cva("space-y-6", {
  variants: {
    variant: {
      default: "",
      bordered: "border p-6 rounded-lg",
      card: "bg-card text-card-foreground border rounded-lg p-6 shadow-sm",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface FormProps
  extends React.FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> {
  useMotion?: boolean;
}

interface MotionFormProps extends Omit<HTMLMotionProps<"form">, "className" | "children">,
  VariantProps<typeof formVariants> {
  className?: string;
  children?: React.ReactNode;
}

const formAnimationVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      staggerChildren: 0.1
    }
  }
};

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, variant, useMotion = false, children, ...props }, ref) => {
    if (useMotion) {
      return (
        <motion.form
          className={cn(formVariants({ variant, className }))}
          ref={ref as React.Ref<HTMLFormElement>}
          initial="hidden"
          animate="visible"
          variants={formAnimationVariants}
          {...props as unknown as MotionFormProps}
        >
          {children}
        </motion.form>
      );
    }

    return (
      <form
        className={cn(formVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </form>
    );
  }
);
Form.displayName = "Form";

// Form Field
const FormField = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
));
FormField.displayName = "FormField";

// Form Label
const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}
    {...props}
  />
));
FormLabel.displayName = "FormLabel";

// Form Control
const FormControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-2", className)} {...props} />
));
FormControl.displayName = "FormControl";

// Form Description
const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
FormDescription.displayName = "FormDescription";

// Form Message
const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm font-medium text-destructive", className)}
    {...props}
  >
    {children}
  </p>
));
FormMessage.displayName = "FormMessage";

export {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  formVariants
};

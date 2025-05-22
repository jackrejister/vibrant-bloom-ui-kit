
import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

// Form wrapper component
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  useMotion?: boolean;
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, useMotion = false, ...props }, ref) => {
    if (useMotion) {
      return (
        <motion.form
          ref={ref as React.Ref<HTMLFormElement>}
          className={cn("space-y-6", className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          {...props}
        />
      );
    }
    
    return (
      <form
        ref={ref}
        className={cn("space-y-6", className)}
        {...props}
      />
    );
  }
);
Form.displayName = "Form";

// Form group component
interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: string;
}

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  ({ className, error, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("space-y-2", className)}
      {...props}
    >
      {children}
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  )
);
FormGroup.displayName = "FormGroup";

// Form label component
const FormLabel = Label;

// Form control wrapper
interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mt-1", className)}
      {...props}
    />
  )
);
FormControl.displayName = "FormControl";

// Form input component
const FormInput = Input;

// Form validation error message
interface FormErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const FormError = React.forwardRef<HTMLParagraphElement, FormErrorProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-destructive mt-1", className)}
      {...props}
    />
  )
);
FormError.displayName = "FormError";

// Form helper text
interface FormHelperProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const FormHelper = React.forwardRef<HTMLParagraphElement, FormHelperProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground mt-1", className)}
      {...props}
    />
  )
);
FormHelper.displayName = "FormHelper";

// Form actions row
interface FormActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormActions = React.forwardRef<HTMLDivElement, FormActionsProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center justify-end gap-4 pt-4", className)}
      {...props}
    />
  )
);
FormActions.displayName = "FormActions";

// Form section with title and description
interface FormSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

const FormSection = React.forwardRef<HTMLDivElement, FormSectionProps>(
  ({ className, title, description, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("space-y-4", className)}
      {...props}
    >
      {(title || description) && (
        <div className="space-y-1">
          {title && (
            <h3 className="text-lg font-medium">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  )
);
FormSection.displayName = "FormSection";

export {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormInput,
  FormError,
  FormHelper,
  FormActions,
  FormSection,
};

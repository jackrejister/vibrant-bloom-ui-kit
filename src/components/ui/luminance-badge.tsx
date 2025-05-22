
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
        // Luminance custom variants
        primary: "bg-luminance-primary-500 text-white border-transparent",
        teal: "bg-luminance-teal-500 text-white border-transparent",
        purple: "bg-luminance-purple-500 text-white border-transparent",
        amber: "bg-luminance-amber-500 text-white border-transparent",
        coral: "bg-luminance-coral-500 text-white border-transparent",
        mint: "bg-luminance-mint-500 text-white border-transparent",
        // Subtle variants
        subtlePrimary: "bg-luminance-primary-100 text-luminance-primary-800 border-transparent dark:bg-luminance-primary-900/30 dark:text-luminance-primary-300",
        subtleTeal: "bg-luminance-teal-100 text-luminance-teal-800 border-transparent dark:bg-luminance-teal-900/30 dark:text-luminance-teal-300",
        subtlePurple: "bg-luminance-purple-100 text-luminance-purple-800 border-transparent dark:bg-luminance-purple-900/30 dark:text-luminance-purple-300",
        subtleAmber: "bg-luminance-amber-100 text-luminance-amber-800 border-transparent dark:bg-luminance-amber-900/30 dark:text-luminance-amber-300",
        subtleCoral: "bg-luminance-coral-100 text-luminance-coral-800 border-transparent dark:bg-luminance-coral-900/30 dark:text-luminance-coral-300",
        subtleMint: "bg-luminance-mint-100 text-luminance-mint-800 border-transparent dark:bg-luminance-mint-900/30 dark:text-luminance-mint-300",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.25 text-xs",
        lg: "px-3 py-0.75 text-sm",
        xl: "px-4 py-1 text-base",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "hover:-translate-y-0.5 transition-transform",
        glow: "relative overflow-hidden transition-colors before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-luminance-primary-300 before:to-luminance-teal-300 before:opacity-0 before:blur-xl before:transition-opacity hover:before:opacity-50",
      },
      dotted: {
        true: "pl-1.5 flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:mr-1",
        false: "",
      }
    },
    compoundVariants: [
      {
        variant: "primary",
        dotted: true,
        className: "before:bg-white/70",
      },
      {
        variant: "teal",
        dotted: true,
        className: "before:bg-white/70",
      },
      {
        variant: "purple",
        dotted: true,
        className: "before:bg-white/70",
      },
      {
        variant: "amber",
        dotted: true,
        className: "before:bg-white/70",
      },
      {
        variant: "coral",
        dotted: true,
        className: "before:bg-white/70",
      },
      {
        variant: "mint",
        dotted: true,
        className: "before:bg-white/70",
      },
      {
        variant: "subtlePrimary",
        dotted: true,
        className: "before:bg-luminance-primary-500",
      },
      {
        variant: "subtleTeal",
        dotted: true,
        className: "before:bg-luminance-teal-500",
      },
      {
        variant: "subtlePurple",
        dotted: true,
        className: "before:bg-luminance-purple-500",
      },
      {
        variant: "subtleAmber",
        dotted: true,
        className: "before:bg-luminance-amber-500",
      },
      {
        variant: "subtleCoral",
        dotted: true,
        className: "before:bg-luminance-coral-500",
      },
      {
        variant: "subtleMint",
        dotted: true,
        className: "before:bg-luminance-mint-500",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
      dotted: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  useMotion?: boolean;
}

function Badge({ 
  className, 
  variant, 
  size, 
  animation, 
  dotted,
  useMotion = false,
  ...props 
}: BadgeProps) {
  const BadgeElement = useMotion ? motion.div : "div";
  
  const motionProps = useMotion ? {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "spring", stiffness: 400, damping: 10 }
  } : {};
  
  return (
    <BadgeElement
      className={cn(badgeVariants({ variant, size, animation, dotted, className }))}
      {...motionProps}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

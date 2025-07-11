import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-spring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant hover:shadow-premium",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-elegant",
        outline:
          "border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-spring",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-elegant",
        ghost: "hover:bg-accent/50 hover:text-accent-foreground transition-spring",
        link: "text-primary underline-offset-4 hover:underline font-medium",
        hero: "bg-gradient-premium text-white hover:scale-105 transition-bounce shadow-premium border-0 font-bold tracking-wide",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-elegant hover:shadow-premium",
        premium: "bg-gradient-primary text-white hover:scale-105 hover:shadow-glow transition-spring border border-primary/20 font-semibold"
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-10 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-11 w-11 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

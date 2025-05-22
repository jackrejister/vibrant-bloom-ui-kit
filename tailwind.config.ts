
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Luminance UI color system
        luminance: {
          // Primary colors
          primary: {
            50: "#E6F1FE",
            100: "#CCE3FD",
            200: "#99C7FB",
            300: "#66ABF9",
            400: "#338FF7",
            500: "#0073F5", // Main primary
            600: "#005CC4",
            700: "#004593",
            800: "#002E62",
            900: "#001731",
          },
          // Secondary teal colors
          teal: {
            50: "#E6FBF9",
            100: "#CCF7F2",
            200: "#99EFE6",
            300: "#66E7D9",
            400: "#33DFCD",
            500: "#00D7C0", // Main teal
            600: "#00AC9A",
            700: "#008173",
            800: "#00564D",
            900: "#002B26",
          },
          // Purple accent
          purple: {
            50: "#F2E6FE",
            100: "#E5CCFD",
            200: "#CB99FB",
            300: "#B166F9",
            400: "#9733F7",
            500: "#7D00F5", // Main purple
            600: "#6400C4",
            700: "#4B0093",
            800: "#320062",
            900: "#190031",
          },
          // Amber accent
          amber: {
            50: "#FFF8E6",
            100: "#FFF1CC",
            200: "#FFE399",
            300: "#FFD566",
            400: "#FFC733",
            500: "#FFB900", // Main amber
            600: "#CC9400",
            700: "#996F00",
            800: "#664A00",
            900: "#332500",
          },
          // Coral accent
          coral: {
            50: "#FFEDE6",
            100: "#FFDACC",
            200: "#FFB599",
            300: "#FF9066",
            400: "#FF6B33",
            500: "#FF4600", // Main coral
            600: "#CC3800",
            700: "#992A00",
            800: "#661C00",
            900: "#330E00",
          },
          // Mint accent
          mint: {
            50: "#E6FFEE",
            100: "#CCFFDC",
            200: "#99FFB9",
            300: "#66FF96",
            400: "#33FF73",
            500: "#00FF50", // Main mint
            600: "#00CC40",
            700: "#009930",
            800: "#006620",
            900: "#003310",
          },
          // Neutral colors with blue undertones
          neutral: {
            50: "#F5F7FA",
            100: "#EBEEF5",
            200: "#D8DEEA",
            300: "#C4CEDF",
            400: "#B1BDD5",
            500: "#9DAECA", // Main neutral
            600: "#7D8BA0",
            700: "#5D6876",
            800: "#3E454D",
            900: "#1E2226",
            950: "#0F1114",
          }
        },
        // Standard semantic colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "scale-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" }
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }
        },
        "pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "scale-out": "scale-out 0.2s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "slide-out": "slide-out 0.3s ease-out",
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

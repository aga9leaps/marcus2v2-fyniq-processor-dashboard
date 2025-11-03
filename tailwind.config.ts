import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Processor Dashboard Custom Colors
        'bg-primary': '#F5F5F3',
        'bg-secondary': '#EBEBEA',
        'surface': '#FFFFFF',
        'surface-hover': '#FAFAF9',
        'text-primary': '#191919',
        'text-secondary': '#5A5A57',
        'text-tertiary': '#8B8B88',
        'text-disabled': '#C4C4C0',
        'accent-primary': '#CC7A3E',
        'accent-hover': '#B56A33',
        'accent-light': '#F7E8DC',
        'accent-border': '#E5C4AD',
        'status-critical': '#DC2626',
        'status-critical-light': '#FEE2E2',
        'status-warning': '#F59E0B',
        'status-warning-light': '#FEF3C7',
        'status-success': '#10B981',
        'status-success-light': '#D1FAE5',
        'status-info': '#3B82F6',
        'status-info-light': '#DBEAFE',
        'status-neutral': '#6B7280',
        'status-neutral-light': '#F3F4F6',
        'border-subtle': '#E8E8E5',
        'border-medium': '#D4D4D0',
        'border-strong': '#A8A8A3',
      },
      spacing: {
        // 6px grid system (tighter than customer portal)
        '0': '0px',
        '1': '4px',
        '2': '6px',
        '3': '12px',
        '4': '18px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
      },
      fontSize: {
        // Smaller base font for data density
        'xxs': ['11px', { lineHeight: '14px' }],
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['13px', { lineHeight: '18px' }],
        'base': ['14px', { lineHeight: '20px' }],
        'lg': ['16px', { lineHeight: '22px' }],
        'xl': ['18px', { lineHeight: '24px' }],
        '2xl': ['20px', { lineHeight: '28px' }],
        '3xl': ['24px', { lineHeight: '32px' }],
        '4xl': ['32px', { lineHeight: '40px' }],
        '5xl': ['40px', { lineHeight: '48px' }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

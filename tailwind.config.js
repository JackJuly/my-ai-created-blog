/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
      screens: {
        'sm': '780px',
        'smd': '1105px',
        'md': '928px',    // 自定义中等屏幕的断点
        'lg': '1150px',   // 自定义大屏幕的断点
        // 'xl': '1440px',   // 自定义超大屏幕的断点
      },
      width: {
        '90': '22.35rem',
        '91': '22.75rem',
        '92': '23rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',  // 自定义 128 的宽度为 32rem (512px)
        '160': '40rem',  // 自定义 160 的宽度为 40rem (640px)
      },
      height: {
        '36': '9rem',
        '42': '10.5rem',
        '44': '11rem', // 设置高度为 11rem（即 176px）
      },
      fontSize: {
        'xxs': '0.65rem', // 自定义更小的字体
        'xxl': '2.75rem', // 自定义更大的字体
      },
      spacing: {
        '26': '6.5rem',
        '30': '7.5rem',
      },
      colors: {
        blue1: "#82d7f7",
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
}
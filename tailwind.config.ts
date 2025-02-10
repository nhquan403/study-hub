import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                primary: "#A294F9",
            },
            fontFamily: {
                primary: ["var(--font-manrope)"],
                secondary: ["var(--font-roboto)"],
            },
        },
    },
    plugins: [],
} satisfies Config;

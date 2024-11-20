// tailwind.config.js (ES Module Syntax)
/** @type {import('tailwindcss').Config} */
import { text } from '@sveltejs/kit';
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        // Customizing DaisyUI's default 'light' theme
        light: {
          primary: "#181b34", // Purple for primary
          secondary: "#646cff", // Yellow for secondary
          accent: "#c7d2fe", // Teal for accent
          neutral: "#f3f4f6", // Light gray neutral background
          "base-100": "#ffffff", // White for the base color
          "base-200": "#000000", // text clr
          "base-300": "#d1d5db",
           // Light gray for borders
        },
      },
      {
        // Customizing DaisyUI's default 'dark' theme
        dim: {
          primary: "#263c54", // Purple for primary
          secondary: "#336aff", // Yellow for secondary
          accent: "#ffffff", // Teal for accent
          neutral: "#728196", // Dark gray for neutral background
          "base-100": "#d1d5db", // Very dark background for base color
          "base-200": "#000000", // Darker gray for secondary background
          "base-300": "#4a5568",
          
        },
      },
      {
        // Custom theme1
        dark: {
          primary: "#1b2026", // Purple for primary
          secondary: "#f6d860", // Yellow for secondary
          accent: "#a991f7", // Teal for accent
          neutral: "#000000", // Darker gray for neutral
          "base-100": "#ffffff",
          "base-200": "#ffffff", // Darker gray for secondary background
          "base-300": "#4a5568",
        },
      },
      {
        // Custom theme2
        gradient: {
          primary: "#000000", // Green for primary
          secondary: "#8dff80", // Amber yellow for secondary
          accent: "#ffffff", // Blue for accent
          neutral: "#cffafe", // Darker background for neutral
          "base-100": "#fefefe",
          "base-200": "#2d3748", // Darker gray for secondary background
          "base-300": "#4a5568",
        },
      },
    ],
  }
  
  
  
};

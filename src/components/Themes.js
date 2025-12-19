// Bold Human-Crafted Theme Configuration
// Warm charcoal backgrounds with vibrant accent colors

export const darkTheme = {
    // Core Backgrounds - Warm Charcoal/Gray 
    body: "#121212",
    bodyRgba: "18, 18, 18",
    bgSecondary: "#1e1e1e",
    bgTertiary: "#2a2a2a",
    bgCard: "#2a2a2a",
    bgCardHover: "#333333",

    // Text Colors
    text: "#faf8f5",
    textRgba: "250, 248, 245",
    textSecondary: "#a0a0a0",
    textMuted: "#6a6a6a",

    // Bold Accent Colors
    accentCoral: "#ff6b6b",
    accentTeal: "#00d4aa",
    accentMagenta: "#e040fb",
    accentLime: "#c6ff00",
    accentYellow: "#ffd93d",

    // Legacy aliases for compatibility
    accentCyan: "#00d4aa",
    accentPurple: "#e040fb",
    accentPink: "#ff6b6b",
    accentBlue: "#00d4aa",

    // Glass effect colors
    glassBg: "rgba(42, 42, 42, 0.8)",
    glassBorder: "rgba(255, 255, 255, 0.12)",

    // Bold Gradients - Unexpected color pairings
    gradientPrimary: "linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%)",
    gradientAccent: "linear-gradient(135deg, #00d4aa 0%, #c6ff00 100%)",
    gradientMagenta: "linear-gradient(135deg, #e040fb 0%, #ff6b6b 100%)",
    gradientTeal: "linear-gradient(135deg, #00d4aa 0%, #e040fb 100%)",
    gradientSunset: "linear-gradient(135deg, #ff6b6b 0%, #ffd93d 50%, #c6ff00 100%)",
    gradientRainbow: "linear-gradient(90deg, #ff6b6b, #ffd93d, #c6ff00, #00d4aa, #e040fb)",

    // Bold Shadows with color offset
    shadowGlow: "0 0 40px rgba(255, 107, 107, 0.3)",
    shadowTeal: "0 0 40px rgba(0, 212, 170, 0.3)",
    shadowMagenta: "0 0 40px rgba(224, 64, 251, 0.3)",
    shadowCard: "8px 8px 0px rgba(0, 0, 0, 0.4)",
    shadowCardHover: "12px 12px 0px rgba(255, 107, 107, 0.2)",
    shadowTactile: "4px 4px 0px #ff6b6b",

    fontFamily: "'Space Grotesk', 'Inter', sans-serif"
};

// Light theme with bold accents (if needed)
export const lightTheme = {
    body: "#f5f3f0",
    bodyRgba: "245, 243, 240",
    bgSecondary: "#e8e6e3",
    bgTertiary: "#dbd9d6",
    bgCard: "#ffffff",
    bgCardHover: "#f8f8f8",

    text: "#121212",
    textRgba: "18, 18, 18",
    textSecondary: "#4a4a4a",
    textMuted: "#7a7a7a",

    accentCoral: "#e85555",
    accentTeal: "#00b894",
    accentMagenta: "#c030e0",
    accentLime: "#a8e600",
    accentYellow: "#e6c030",

    accentCyan: "#00b894",
    accentPurple: "#c030e0",
    accentPink: "#e85555",
    accentBlue: "#00b894",

    glassBg: "rgba(255, 255, 255, 0.9)",
    glassBorder: "rgba(0, 0, 0, 0.1)",

    gradientPrimary: "linear-gradient(135deg, #e85555 0%, #e6c030 100%)",
    gradientAccent: "linear-gradient(135deg, #00b894 0%, #a8e600 100%)",
    gradientMagenta: "linear-gradient(135deg, #c030e0 0%, #e85555 100%)",
    gradientTeal: "linear-gradient(135deg, #00b894 0%, #c030e0 100%)",

    shadowGlow: "0 0 30px rgba(232, 85, 85, 0.2)",
    shadowCard: "6px 6px 0px rgba(0, 0, 0, 0.1)",
    shadowTactile: "4px 4px 0px #e85555",

    fontFamily: "'Space Grotesk', 'Inter', sans-serif"
};

// Default export for backwards compatibility
export const DarkTheme = darkTheme;

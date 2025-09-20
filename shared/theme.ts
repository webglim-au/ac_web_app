export const theme = {
  colors: {
    // Brand palette
    primary: "#6F2D7A",   // Deep purple
    secondary: "#0871BA", // Blue
    accent: "#8FC642",    // Green
    neutral: "#CBC8C8",   // Gray

    // Base
    background: "#FFFFFF",
    text: "#333333",

    // Semantic roles
    semantic: {
      success: "#8FC642",   // Accent green
      error: "#D64545",     // Red for errors
      warning: "#FFA500",   // Amber for warnings
      info: "#0871BA",      // Secondary blue
    }
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },

  typography: {
    fontFamily: "'Rubik', 'Segoe UI', Roboto, sans-serif",
    sizes: {
      h1: "36px",
      h2: "28px",
      h3: "22px",
      body: "16px",
      secondary: "14px",
      small: "12px",
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      normal: 1.5,
      heading: 1.2,
    }
  },

  shadows: {
    card: "0 1px 3px rgba(0,0,0,0.1)",
    dropdown: "0 2px 6px rgba(0,0,0,0.15)",
    modal: "0 4px 12px rgba(0,0,0,0.2)",
  },

  borderRadius: {
    sm: "2px",
    md: "4px",
    lg: "8px",
  }
};

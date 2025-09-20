import React from "react";
import { theme } from "./theme"; // central design tokens
import "./Layout.css"; // optional CSS for layout refinements

// --- Header ---
const Header: React.FC = () => (
  <header
    style={{
      height: "64px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: `0 ${theme.spacing.md}px`,
      background: theme.colors.primary,
      color: "#FFFFFF",
      fontFamily: theme.typography.fontFamily,
    }}
  >
    {/* Left: Logo */}
    <div style={{ fontWeight: theme.typography.weights.bold, fontSize: theme.typography.sizes.h2 }}>
      LOGO
    </div>

    {/* Center: Page Title / Search */}
    <div style={{ flex: 1, textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: "6px 12px",
          borderRadius: theme.borderRadius.md,
          border: `1px solid ${theme.colors.neutral}`,
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.sizes.secondary,
          width: "60%",
          maxWidth: "400px",
        }}
      />
    </div>

    {/* Right: Notifications + User Menu */}
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      {/* Notifications Icon */}
      <div style={{ position: "relative", cursor: "pointer" }}>
        🔔
        <span
          style={{
            position: "absolute",
            top: -4,
            right: -6,
            background: theme.colors.accent,
            color: "#fff",
            borderRadius: "50%",
            fontSize: "10px",
            padding: "2px 5px",
          }}
        >
          3
        </span>
      </div>

      {/* User Menu */}
      <div style={{ cursor: "pointer" }}>
        <img
          src="https://via.placeholder.com/32"
          alt="User Avatar"
          style={{ borderRadius: "50%" }}
        />
        <span style={{ marginLeft: "8px", fontSize: theme.typography.sizes.secondary }}>
          Zahid
        </span>
      </div>
    </div>
  </header>
);

// --- Side Menu ---
const SideMenu: React.FC = () => (
  <aside
    style={{
      width: "240px",
      background: theme.colors.neutral,
      padding: `${theme.spacing.md}px`,
      overflowY: "auto",
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.sizes.body,
    }}
  >
    <nav>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Dashboard</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </nav>
  </aside>
);

// --- Footer ---
const Footer: React.FC = () => (
  <footer
    style={{
      height: "48px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: `0 ${theme.spacing.md}px`,
      background: theme.colors.neutral,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.sizes.secondary,
    }}
  >
    <span>© {new Date().getFullYear()} Your Company</span>
    <nav>
      <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a> |{" "}
      <a href="/accessibility">Accessibility</a>
    </nav>
  </footer>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Header />
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <SideMenu />
        <main
          style={{
            flex: 1,
            padding: `${theme.spacing.lg}px`,
            overflowY: "auto",
            background: theme.colors.background,
            fontSize: theme.typography.sizes.body,
            lineHeight: theme.typography.lineHeight.normal,
          }}
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;


import { SxProps, Theme } from "@mui/material";

export const headerStyles: Record<string, SxProps<Theme>> = {
  root: (theme: Theme) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    height: "89px",
    padding: theme.spacing(0, 2),
    borderBottom: "1px solid #E5E5E5",
    position: "fixed",  // <-- fixed at top
    top: 0,             // <-- top of viewport
    left: 0,            // <-- align to left
    right: 0,           // <-- align to right
    zIndex: 1300,       // <-- ensure it’s above other content
  })
,  

  logoContainer: {
    display: "flex",
    alignItems: "center",
  },

  searchContainer: {
    flexGrow: 1,
    display: { xs: "none", sm: "flex" },
    justifyContent: "center",
    minWidth: 0,
    mx: 2,
  },

  searchField: {
    bgcolor: "white",
    width: "100%",
    maxWidth: {
      xs: "100%",   // mobile (won't be visible anyway)
      sm: 400,      // tablet
      md: 600,      // small desktop
      lg: 700,      // large desktop
      xl: 800,      // very large screens
    },
    height: "44px",
    "& .MuiOutlinedInput-root": {
      paddingRight: 0,
    },
  },
  
  searchButton: {
    bgcolor: "#6F2D7A",
    borderRadius: "0 4px 4px 0",
    p: 1.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    height: "100%",
  },

  searchIcon: {
    color: "white",
    fontSize: 20,
  },

  mobileSearchOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    p: 2,
    bgcolor: "white",
    zIndex: 1400,
    boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
    display: "flex",
    alignItems: "center",
  },

  userSection: {
    display: "flex",
    alignItems: "center",
  },

  userContainer: {
    display: "flex",
    alignItems: "center",
 
  },

  notificationIcon: {
    backgroundColor: "#ece2ee",
    width: "32px",
    height: "32px",
    borderRadius: "4px",
    padding: "6px",
    cursor: "pointer",
    ml: { xs: 0.5, sm: 1 }, // keep icons close on xs, a bit more on sm+
  },

  userInfo: {
    textAlign: "right",

    ml: 1, // little spacing before text
    padding:1,
       borderColor: "1px solid grey"
  },

  userName: {
    fontWeight: 600,
    color: "text.secondary",
    fontSize: "14px",
  },

  userRole: {
    fontWeight: 400,
    fontSize: "14px",
  },

  dropdownArrow: {
    width: "9px",
    height: "5px",
    ml: 0.5, // very tight spacing after text or notification
    cursor: "pointer",
  },
};

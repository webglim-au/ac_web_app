import { SxProps, Theme } from '@mui/material';

export const sidebarStyles = {

  
  menuItem: (isSelected: boolean, isSmallScreen?: boolean) => ({
    backgroundColor: isSelected ? "primary.main" : "transparent",
    color: isSelected ? "white" : "primary.main",
    "&:hover": {
      backgroundColor: isSelected? "primary.main":" transparent",
      cursor: "pointer"
    },
    m: 2,
    marginLeft: 2,
    borderRadius: "4px",
    width: isSmallScreen ? "48px" : "280px", // Adjust width based on screen size
    minHeight: "48px",
    display: "flex",
    justifyContent: isSmallScreen ? "center" : "flex-start",
  }) as SxProps<Theme>,

  menuIcon: (isSelected: boolean, isSmallScreen?: boolean) => ({
    minWidth: 32,
    display: "flex",
    justifyContent: "center",
   // backgroundColor: isSelected ? "#ece2ee" : "#6F2D7A",
    height: 32,
    marginRight: isSmallScreen ? 0 : 1,
    marginLeft: isSmallScreen ? 1 : 0,
    borderRadius: "6px",
    alignItems: "center",
    margin: "auto",
  }) as SxProps<Theme>,

  menuText: (isSelected: boolean, isSmallScreen?: boolean) => ({
    fontSize: "14px",
    fontWeight: 400,
    marginLeft: isSmallScreen ? 0 : 1,
    color: isSelected ? "white": "#4B5563" ,
    letterSpacing: "0.3px",
  }) as SxProps<Theme>,
};

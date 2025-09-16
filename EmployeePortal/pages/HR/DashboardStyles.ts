import { SxProps, Theme } from '@mui/material';

export const dashboardStyles = {
  root: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#EDEFF8",
    flexDirection: "column",
    overflow: "auto",
    // scrollbarWidth: "none", // Firefox
    // "&::-webkit-scrollbar": {
    //   display: "none", // Chrome, Safari, Edge
    // },
  } as SxProps<Theme>,

  bodyContainer: (theme: Theme) => ({
    display: "flex",
    maxHeight: "calc(100vh - 335px)",
    width: "100%",
    flexDirection: "row",
    gap: 0,
    [theme.breakpoints.down(850)]: {
      flexDirection: "column",
      ml:2
    },
  }) as SxProps<Theme>,
  

    mainContent: (theme: Theme) => ({
      flexGrow: 1,
      p: 2,
      marginTop: "0px",
     marginLeft: "150px", // or whatever width your sidebar has
      [theme.breakpoints.down(1210)]: {
       
        width: "100%",
        margin: "auto",
      marginLeft: "20px"
       // marginTop: "90px",
      
      },
      [theme.breakpoints.down(850)]: {
       
        width: "100%",
        
        margin: "auto",
     pl: 3,
       // marginTop: "90px",
      
      },
    }) as SxProps<Theme>,
  contentSection: {
    display: "flex",
    gap: 2
  } as SxProps<Theme>,

  calendarContainer: {
    width: "340px",
    marginTop: 2,
    marginRight: 2,
    
    "@media (max-width: 850px)": {
        width: "100%",
        margin:"auto"
    }
} as SxProps<Theme>,
};
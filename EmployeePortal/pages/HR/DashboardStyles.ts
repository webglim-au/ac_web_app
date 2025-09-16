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
    maxHeight: "calc(100vh - 350px)",
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
      p: "5px",
      pl:"15px",
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
    gap: 0
  } as SxProps<Theme>,

  calendarContainer: {
    width: "340px",
    marginTop: "5px",
    marginRight: "5px",
    
    "@media (max-width: 850px)": {
        width: "100%",
        margin:"auto"
    }
} as SxProps<Theme>,
};
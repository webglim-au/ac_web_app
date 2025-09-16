import { SxProps, Theme } from '@mui/material';

export const screenTemplateStyles = {
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


  screenBodyContainer: {
    display: "flex",
    maxHeight: "calc(100vh - 335px)",
    width: "100%",
    flexDirection: "row",
    gap:1 } as SxProps<Theme>,
    screenMainContent: (theme: Theme) => ({
      flexGrow: 1,
      p: 2,
      marginTop: "70px",
     marginLeft: "300px",
      [theme.breakpoints.down(1210)]: {
       
        width: "365px",
        margin: "auto",
        marginTop: "90px",
        marginLeft: "60px", 
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
 
};
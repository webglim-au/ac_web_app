import { SxProps, Theme } from '@mui/material';

export const upcomingTrainingsStyles = {
  container: {
    flex: 1,
    backgroundColor: "white",
    boxShadow: "0px 4px 8px 0px #0000002E",
    borderRadius: "6px",
    maxHeight: "710px",
  //  height: "calc(100vh - 350px)",
    // "@media (max-height:768px)": {
    //   height: "calc(100vh+ 100vh)",
    // },
    // "@media (max-width:1690px)": {
    //   height: "calc(100vh - 495px)", // 👈 adjust here for smaller screens
    // },
    // "@media (max-width:950px)": {
    //   height: "calc(100vh - 785px)", // 👈 adjust here for smaller screens
    // },
  
    overflow: "auto",
  } as SxProps<Theme>,

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    mb: 1,
    paddingLeft: 0,
    paddingRight: 0,
    borderBottom: "1px solid rgba(43, 33, 33, 0.1)",
  } as SxProps<Theme>,

  headerTitle: {
    fontWeight: "400",
    fontSize: "20px",
    textAlign: "left",
    paddingLeft: 2,
  } as SxProps<Theme>,

  viewAllText: {
    fontWeight: "400",
    fontSize: "16px",
    color: "text.secondary",
    pr: 2,
    textAlign: "left",
  } as SxProps<Theme>,

  trainingCard: {
    mb: 2,
    backgroundColor: "#F9FAFB",
    m: 2,
    boxShadow: "none",
  } as SxProps<Theme>,

  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#F9FAFB",
    boxShadow: "none",
    alignItems: "flex-start",
  } as SxProps<Theme>,

  trainingMainContent: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
  } as SxProps<Theme>,

  dateBadge: {
    height: "50px",
    width: "50px",
    borderRadius: "4px",
    backgroundColor: "#FAE2FF",
    color: "primary.main",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 400,
    fontSize: "16px",
    boxShadow: "none",
    padding: 1,
  } as SxProps<Theme>,

  trainingDetails: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    gap: 1,
    boxShadow: "none",
  } as SxProps<Theme>,

  trainingTitle: {
    fontWeight: "500",
    fontSize: "16px",
  } as SxProps<Theme>,

  detailRow: {
    display: "flex",
    gap: 1,
    alignItems: "center",
  } as SxProps<Theme>,

  detailText: {
    fontWeight: "400",
    fontSize: "16px",
  } as SxProps<Theme>,

  detailsButton: {
    width: "96px",
    borderRadius: "4px",
    alignItems: "top",
    boxShadow: "none",
    fontSize: "15px",
    fontWeight: "400",
  } as SxProps<Theme>,
};
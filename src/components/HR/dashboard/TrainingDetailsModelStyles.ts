import { SxProps, Theme } from '@mui/material';

export const trainingModalStyles = {
  header: {
    backgroundColor: "#ECE2EE",
    color: "primary.main",
    p: 3,
    textAlign: "left",
    m: 2,
    borderRadius: "6px",
  } as SxProps<Theme>,

  headerTitle: {
    fontWeight: 700,
    fontSize: "24px",
  } as SxProps<Theme>,

  dialogContent: {
    p: 0,
    overflow: "auto",
    // scrollbarWidth: "none", // Firefox
    // "&::-webkit-scrollbar": {
    //   display: "none", // Chrome, Safari, Edge
    // },
    width: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  } as SxProps<Theme>,

  trainingInfoSection: {
    p: 3,
    display: "flex",
    backgroundColor: "#ECE2EE",
    flexDirection: "column",
    m: 2,
    borderRadius: "6px",
  } as SxProps<Theme>,

  sectionTitle: {
    mb: 3,
    color: "black",
    fontWeight: 600,
    fontSize: "17px",
  } as SxProps<Theme>,

  fieldContainer: {
    width: "375px"
  } as SxProps<Theme>,

  fieldLabel: {
    mb: 0.5,
    fontWeight: 500
  } as SxProps<Theme>,

  textField: {
    width: "375px",
    backgroundColor: "white"
  } as SxProps<Theme>,

  selectField: {
    width: "375px",
    backgroundColor: "white"
  } as SxProps<Theme>,

  descriptionField: {
    width: "620px",
    backgroundColor: "white"
  } as SxProps<Theme>,

  actionsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 2,
    p: 3,
    borderTop: "1px solid #E5E7EB",
  } as SxProps<Theme>,

  actionButton: {
    minWidth: "80px",
    borderRadius: "4px",
    fontWeight: 400
  } as SxProps<Theme>,
};
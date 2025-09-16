// External styles object
const styles = {
    detailsCard: {
      backgroundColor: '#EDEFF8',
      padding: 2,
    },
    mainContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 2,
    },
    firstSection: {
      width: "40%",
    },
    sectionTitle: {
      fontWeight: 700,
      fontSize: "14px",
      mb: 1,
    },
    chipContainer: {
      gap: 1,
      display: "flex",
      flexWrap: "wrap",
      mb: 2,
    },
    divider: {
      mb: 1,
    },
    secondSection: {
      width: "40%",
    },
    thirdSection: {
      width: "20%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 1,
    },
    sectionDivider: {
      my: 2,
    },
    interviewSection: {
      width: "40%",
    },
    dateTimeRow: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      mb: 2,
    },
    dateField: {
      width: "50%",
    },
    confirmationText: {
      fontSize: "12px",
      fontWeight: 500,
    },
    timeContainer: {
      display: "flex",
      alignItems: "center",
      gap: 0.5,
    },
    timeText: {
      fontSize: "12px",
    },
    timeIcon: {
      color: "#747474",
      fontSize: "22px",
    },
    locationRow: {
      display: "flex",
      alignItems: "center",
      gap: 1,
    },
    locationLabel: {
      fontSize: "12px",
      fontWeight: 500,
    },
    locationValue: {
      color: "red",
      fontSize: "12px",
    },
    notesSection: {
      width: "40%",
    },
    actionSection: {
      width: "20%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      gap: 0,
    },
    interviewButton: {
      width: "100%",
      height: "32px",
      textAlign: "left",
    },
    rescheduleButton: {
      width: "100%",
      height: "32px",
      textAlign: "left",
    },
    mainWrapper: {
      marginTop: "20px",
    },
  } as const;



  export default styles;
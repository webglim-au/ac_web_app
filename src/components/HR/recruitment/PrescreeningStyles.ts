const STYLES = {
    container: {
        marginTop: "20px"
    },
    detailsCard: {
        backgroundColor: '#EDEFF8',
        paddingTop: 2
    },
    detailsContainer: {
        display: "flex",
        flexDirection: "row" as const,
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 2
    },
    prescreeningSection: {
        mt: 0,
        width: "30%"
    },
    prescreeningSectionTitle: {
        fontWeight: 700,
        fontSize: "14px",
        mb: 1
    },
    statusChipsContainer: {
        gap: 1,
        display: "flex",
        flexWrap: "wrap" as const,
        width: "100%"
    },
    interviewSection: {
        width: "25%"
    },
    interviewSectionTitle: {
        fontWeight: 700,
        mb: 2,
        fontSize: "14px"
    },
    interviewInputContainer: {
        display: "flex",
        flexDirection: "column" as const,
        gap: 2
    },
    interviewDateTimeContainer: {
        display: "flex",
        flexDirection: "column" as const,
        gap: 2
    },
    dateTimeInput: {
        width: "100%"
    },
    buttonContainer: {
        display: "flex",
        gap: 1,
        width: "100%"
    },
    cancelButton: {
        height: "32px",
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    rescheduleButton: {
        height: "32px",
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    stickyNoteSection: {
        width: "40%"
    },
    stickyNoteContainer: {
        width: "100%"
    },
    timeIcon: {
        color: "#747474",
        marginLeft: 2
    }
} as const;


export default STYLES;
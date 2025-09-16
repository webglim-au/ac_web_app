// External styles object
const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#edeff8",
    },
    header: {
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(to right, #f5f5f5, #ffffff)",
        px: 3,
        py: 2,
        borderBottom: "1px solid #00000014",
        boxShadow: "0px 4px 15.3px 0px #00000024",
        margin: "auto",
        width: "100vw",
    },
    logo: {
        height: 40,
        cursor: "pointer",
    },
    main: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#edeff8",
        py: 6,
        margin: "auto",
        width: "100vw",
    },
    contentWrapper: {
        textAlign: "center",
        width: "80%",
    },
    title: {
        fontSize: "40px",
        fontWeight: 700,
        mb: 4,
    },
    cardContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    cardBox: {
        width: "50%", // always 2 per row
        p: 1,
        boxSizing: "border-box",
    },
    card: {
        borderRadius: "3px",
        boxShadow: "0px 2px 14.1px 0px #0000001A",
        height: "100%",
    },
    cardText: {
        color: "#101828",
        fontWeight: 500,
        textAlign: "left",
        fontSize: {
            xs: "20px", // small screens
            sm: "24px",
            md: "32px", // medium and up
        },
    },
    footer: {
        backgroundColor: "#ffffff",
        borderTop: "1px solid #00000014",
        py: 3,
        textAlign: "center",
        boxShadow: "0px 4px 15.3px 0px #00000024",
        margin: "auto",
        width: "100vw",
    },
};


export default styles;
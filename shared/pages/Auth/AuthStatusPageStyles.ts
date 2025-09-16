
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        margin: "auto",
        backgroundColor: "paper.main",
        padding: 0,
        overflow: "hidden",
    },
    image: {
        width: 69,
        height: 69,
        marginBottom: "41px",
    },
    heading: {
        fontSize: "30px",
        textAlign: "center" as const,
        marginBottom: "32px",
        width: "45%",
        fontWeight: 600,
    },
    button: {
        fontSize: "16px",
        height: "48px",
        borderRadius: "0px",
        width: "fit-content",
    },
};

export default styles;
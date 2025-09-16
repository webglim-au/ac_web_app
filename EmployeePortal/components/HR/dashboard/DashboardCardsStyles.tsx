const styles = {
    container: {
        display: "flex",
        gap: 2,
        mb: 4,
        flexWrap: "wrap",

        // Default: all cards in one row, flexible sizing
        "& > *": {
            flex: "1 1 auto",
        },

        // When screen gets narrow, force 2 cards per row
        "@media (max-width: 1200px)": {
            "& > *": {
                flex: "1 1 calc(50% - 16px)",
                maxWidth: "calc(50% - 16px)",
            },
        },

        // On mobile: 2 cards per row
        "@media (max-width: 600px)": {
            "& > *": {
                flex: "1 1 calc(50% - 16px)",
                maxWidth: "calc(50% - 16px)",
            },
        },

        // On very small screens: 1 card per row (4 rows)
        "@media (max-width: 400px)": {
            "& > *": {
                flex: "1 1 100%",
                maxWidth: "100%",
            },
        },
    },

    card: {
        flex: 1,
        boxShadow: "0px 4px 8px 0px #0000002E",
        borderRadius: "6px",
        textAlign: "left",
        // Removed minWidth from here since it's now in container styles
    },
    cardHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cardTitle: {
        fontWeight: "400",
        fontSize: "16px"
    },
    iconContainer: (color, borderColor) => ({
        backgroundColor: color,
        borderRadius: 50,
        width: 40,
        height: 40,
        border: `2px solid ${borderColor}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }),
    icon: {
        height: "24px"
    },
    cardValue: {
        fontWeight: "400",
        fontSize: "32px",
        textAlign: "left"
    }
};

export { styles };


const styles = {
    // Quick Actions Container
    quickActionsContainer: {
        margin: "5px",
        marginRight: 0,
        marginLeft: 0,
        padding: 2,
        paddingBottom: "5px",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0px 1px 2px 0px #0000000D",
        border: "1px solid #E5E7EB"

    },

    // Quick Actions Heading
    quickActionsHeading: {
        textAlign: 'center',
        marginBottom: 2.5,
        marginTop: 2,
        fontWeight: 400,
        color: '#000000',
        fontSize: 18
    },

    quickActionsButtonsWrapper: {
        display: "flex",
        gap: 2,
        marginBottom: 1,
        justifyContent: "stretch", // take whole width
        flexWrap: "wrap",
        "@media (max-width: 768px)": {
            flexDirection: "column",
            alignItems: "stretch" // full width in mobile
        }
    },

    // Individual Button
    quickActionButton: {
        padding: 2,
        borderRadius: 2,
        flex: 1,             // <-- expand to take space
        minHeight: 80,
        border: "1px solid #E5E7EB",
        backgroundColor: "#fff",
        textTransform: "none",
        width: "100%",       // ensures full width in mobile
        "&:hover": {
            // backgroundColor: "#f5f5f5",
            borderColor: "primary.main",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        },
        transition: "all 0.3s ease"
    },
    // Button Content Layout
    quickActionButtonContent: {
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        width: '100%'
    },

    // Icon Container
    quickActionIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        padding: 1,
        borderRadius: "6px",
        color: '#1976d2',
        '& svg': {
            fontSize: '1.8rem'
        }
    },

    // Text Container
    quickActionTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 0.25
    },

    // Heading Text
    quickActionHeading: {
        fontSize: 16,
        fontWeight: 400,
        color: '#111827',
        lineHeight: 1.2
    },

    // Subheading Text
    quickActionSubheading: {
        fontSize: 14,
        fontWeight: 400,
        color: '#6B7280',
        lineHeight: 1.2
    }
};

export default styles;
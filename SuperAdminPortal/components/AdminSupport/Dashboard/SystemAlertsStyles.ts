const styles = {
    container: {
        width: '100%',
        height: '400px',
    },

    card: (bgColor: string) => ({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderRadius: 2,
        backgroundColor: bgColor,
    }),

    cardContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        '&:last-child': {
            paddingBottom: 2
        }
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
    },

    title: {
        fontSize: '18px',
        fontWeight: 400,
        color: '#1F2937',
        textAlign: 'left',
    },

    viewAllButton: {
        fontSize: 14,
        color: 'primary.main',
        fontWeight: "400",
        cursor: 'pointer',
        '&:hover': {
            fontWeight: "500",
        }
    },

    alertsList: {
        flex: 1,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
    },

    alertItem: (bgColor: string, borderColor: string) => ({
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1.5,
        padding: 1.5,
        border: `1px solid ${borderColor}`,
        borderRadius: 1,
        backgroundColor: bgColor,
        '&:hover': {
            cursor: "pointer"
            // backgroundColor: '#f5f5f5',
        }
    }),

    alertIconContainer: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0.25,
    },

    alertContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
    },

    alertTitle: (textHeadingColor: string) => ({
        fontSize: 16,
        fontWeight: 400,
        color: textHeadingColor,
        textAlign: "left",
        lineHeight: 1.2,
    }),

    alertMessage: (textMessageColor: string) => ({
        fontSize: 14,
        color: textMessageColor,
        textAlign: "left",
        lineHeight: 1.3,
    }),

    alertTimestamp: (textTimestampColor: string) => ({
        fontSize: 12,
        color: textTimestampColor,
        textAlign: "left",
        marginTop: 0.25,
    }),

    emptyState: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#999',
        fontSize: '0.9rem',
    }
};

export default styles;
const styles = {
    container: {
        width: '100%',
        marginTop: "5px",
    },

    card: {
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderRadius: 2,
    },

    cardContent: {
        padding: 2,
        '&:last-child': {
            paddingBottom: 2
        }
    },

    header: {
        marginBottom: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontSize: '18px',
        fontWeight: 400,
        color: '#111827',
    },

    viewAllButton: {
        fontSize: '14px',
        fontWeight: 400,
        color: 'primary.main',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        }
    },

    activitiesList: {
        maxHeight: 500,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
    },

    activityItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        padding: 2,
        backgroundColor: '#F9FAFB',
        border: '1px solid #E5E7EB',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: '#F3F4F6',
        }
    },

    userImage: {
        width: 40,
        height: 40,
        borderRadius: '50%',
    },

    activityContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 0.25,

    },

    userName: {
        fontSize: '14px',
        fontWeight: 400,
        color: '#111827',
        lineHeight: 1.2,
        textAlign: "left"
    },

    userDetails: {
        fontSize: '12px',
        fontWeight: 400,
        color: '#6B7280',
        lineHeight: 1.2,
        textAlign: "left"
    },

    statusChip: {
        height: 'auto',
        '& .MuiChip-label': {
            padding: '4px 8px',
            fontSize: '12px',
            fontWeight: 400,
        },
        border: 'none',
    },

    emptyState: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#999',
        fontSize: '0.9rem',
        padding: 3,
    }
};
export default styles;
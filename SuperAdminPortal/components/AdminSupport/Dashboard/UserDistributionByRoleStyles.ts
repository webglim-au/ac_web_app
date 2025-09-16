const styles = {
    container: {
        width: '100%',
        height: '400px',
    },

    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderRadius: 2,
    },

    cardContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        '&:last-child': {
            paddingBottom: 2
        }
    },

    title: {
        fontSize: 18,
        fontWeight: 400,
        textAlign: 'center',
        marginBottom: 3,
        color: '#111827',
    },

    rolesList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },

    roleItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    roleInfo: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 400,
        gap: 1,
    },

    dot: (color: string) => ({
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: color,
        flexShrink: 0,
    }),

    roleName: {
        fontSize: 14,
        color: '#111827',
    },

    userCount: {
        fontSize: 14,
        color: '#6B7280',
        fontWeight: 400,
    }
};

export default styles;
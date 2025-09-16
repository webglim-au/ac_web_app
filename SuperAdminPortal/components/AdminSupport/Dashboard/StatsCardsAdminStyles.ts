const styles = {
    cardContainer: {
        flex: {
            xs: '1 1 calc(50% - 12px)',
            sm: '1 1 calc(50% - 12px)',
            md: '1 1 calc(25% - 18px)'
        },
        minWidth: 0
    },
    card: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            transform: 'translateY(-2px)'
        }
    },
    cardContent: {
        p: { xs: 2, sm: 2.5 },
        width: '100%'
    },
    mainContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5
    },
    title: {
        color: '#6B7280',
        mb: 0.3,
        fontSize: { xs: 12, sm: 14 }   // smaller on mobile
    },
    iconContainer: (bgColor: string) => ({
        width: { xs: 36, sm: 42 },
        height: { xs: 36, sm: 42 },
        borderRadius: '6px',
        backgroundColor: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
    }),
    icon: {
        height: { xs: 18, sm: 20 }
    },
    value: {
        color: 'text.primary',
        lineHeight: 1.2,
        fontSize: { xs: 22, sm: 30 }   // big number shrinks on mobile
    },
    label: (color: string) => ({
        color: color,
        fontSize: { xs: 12, sm: 14 }   // smaller label on mobile
    })
};

export default styles;

const roleTabsStyles = {
    tabsContainer: {
        borderBottom: 1,
        borderColor: 'divider',
        mb: 3
    },
    tabs: {
        '& .MuiTab-root': {
            textTransform: 'none',
            fontWeight: 400,
            fontSize: '14px',
            color: 'grey.600',
            '&.Mui-selected': {
                color: 'primary.main',
            }
        }
    },
    tabLabel: {
        display: 'flex',
        alignItems: 'center',
        gap: 1
    },
    tabBadgeActive: {
        backgroundColor: 'primary.main',
        color: 'white',
        borderRadius: '50%',
        width: 22,
        height: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 400
    },
    tabBadgeInactive: {
        backgroundColor: '#D1D5DB',
        color: 'white',
        borderRadius: '50%',
        width: 22,
        height: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 400
    }
};



export default roleTabsStyles;
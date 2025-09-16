const userTableStyles = {
    container: {
        p: 3,
        backgroundColor: "white",
        borderRadius: 2,
        m: 2,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3
    },
    headerTitle: {
        fontWeight: 400,
        color: "#1F2937",
        fontSize: 16
    },
    headerRightSection: {
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center"
    },
    showingText: {
        fontWeight: 400,
        color: "#6B7280",
        fontSize: 14
    },
    paginationContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 0
    },
    paginationButton: {
        padding: '2px',
        '&:disabled': {
            color: '#D1D5DB'
        }
    },
    paginationButtonText: {
        fontSize: 14
    },
    paginationPageInfo: {
        color: "#6B7280",
        minWidth: '60px',
        textAlign: 'center',
        fontSize: 14
    },
    tableContainer: {
        borderRadius: 1,
        //border: '1px solid #e0e0e0'
    },
    table: {
        width: '100%',
        tableLayout: 'fixed'
    },
    tableHeader: {
        backgroundColor: '#f9fafb',
        // borderBottom: "1px solid #E5E7EB",
        borderTop: "1px solid #E5E7EB",
        '& .MuiTableCell-head': {
            fontWeight: 400,
            fontSize: 12,
            color: '#6B7280',
            padding: '2px 16px',
            height: '48px'
        }
    },
    checkboxCell: {
        width: '60px'
    },
    userColumnCell: {
        width: '300px'
    },
    roleColumnCell: {
        width: '180px'
    },
    lastLoginColumnCell: {
        width: '150px'
    },
    statusColumnCell: {
        width: '120px'
    },
    actionsColumnCell: {
        width: '140px'
    },
    headerCheckbox: {
        color: '#D1D5DB',
        '&.Mui-checked': {
            color: 'primary.main',
        },
        '& .MuiSvgIcon-root': {
            border: 'none',
        }
    },
    tableRow: {
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
        '& .MuiTableCell-root': {
            padding: '16px',
            borderTop: "1px solid #E5E7EB",
        }
    },
    rowCheckbox: {
        color: '#000000',
        borderWidth: 0.5,
        '&.Mui-checked': {
            color: 'primary.main',
        },
        '& .MuiSvgIcon-root': {
            border: 'none',
        }
    },
    userCell: {
        display: 'flex',
        alignItems: 'center',
        gap: 2
    },
    userAvatar: {
        width: 40,
        height: 40,
        backgroundColor: '#e3f2fd'
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column'
    },
    userName: {
        fontWeight: 400,
        fontSize: 14,
        color: '#111827'
    },
    userEmail: {
        fontSize: 14,
        color: '#6B7280',
        fontWeight: 400,
        //mt: 0.5
    },
    roleChip: {
        fontWeight: 400,
        fontSize: 12
    },
    lastLoginText: {
        color: "#6B7280",
        fontSize: 14,
        fontWeight: 400
    },
    statusChip: {
        fontWeight: 400,
        fontSize: 12
    },
    actionsContainer: {
        display: 'flex',
        gap: 0,
        justifyContent: 'flex-end'
    },
    actionIcon: {
        width: 20,
        height: 20
    },
    emptyStateCell: {
        py: 4
    },
    emptyStateText: {
        variant: "body2",
        color: "text.secondary"
    },
    pagination: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 2,
        pt: 2,
        borderTop: '1px solid #e0e0e0'
    }
};

export default userTableStyles;
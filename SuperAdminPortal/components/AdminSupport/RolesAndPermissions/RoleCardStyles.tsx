// RoleCard Component Styles
const roleCardStyles = {
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardContent: {
        flexGrow: 1
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
        mb: 0
    },
    cardHeaderLeft: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
        mb: 0
    },
    roleIcon: {
        height: "48px",
        padding: "10px",
        width: "48px",
        borderRadius: "6px",
        alignItems: "center",
        alignContent: "center"
    },
    roleInfo: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 0,
        flexDirection: "column",
        ml: 1
    },
    roleTitleContainer: {
        textAlign: "left",
        display: 'flex',
        alignItems: "center",
        gap: 1,
        flexDirection: "row",
        alignContent: "center"
    },
    roleTitle: {
        fontSize: 18,
        fontWeight: 400,
        color: "#111827"
    },
    lockIcon: {
        height: "14px"
    },
    roleSubtitle: {
        color: "#6B7280",
        fontWeight: 400,
        fontSize: 14,
        mb: 0
    },
    statusChips: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 1,
        mb: 2
    },
    activeChip: {
        color: "#166534",
        backgroundColor: "#DCFCE7"
    },
    usersChip: {
        color: "#1E40AF",
        backgroundColor: "#DBEAFE"
    },
    permissionChips: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 0.5,
        mt: 1.5
    },
    actionButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 1
    },
    viewDetailsButton: {
        fontWeight: "400",
        color: "#6F2D7A"
    },
    historyContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 0.5
    },
    historyText: {
        color: "#6B7280",
        fontSize: 14
    }
};

export default roleCardStyles;
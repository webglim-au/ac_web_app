// Styles moved outside component
const STYLES = {
    container: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 3,
    },
    title: {
        fontWeight: 600,
        color: 'black',
        fontSize: "22px"
    },
    searchField: {
        width: 240,
        "& .MuiInputBase-root": {
            backgroundColor: "#EDEFF8",
            borderRadius: "8px",
            height: "34px",
            fontSize: "12px",
        },
        "& input": {
            fontSize: "12px",
            padding: "6px 8px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
        "& input::placeholder": {
            color: "#B5B7C0",
            opacity: 1,
            fontSize: "12px",
        },
    },
    tableHeader: {
        fontWeight: 500,
        fontSize: "14px",
        textAlign: "left" as const,
        borderBottom: "1px solid #6f2d7a",
    },
    tableRow: (isSelected: boolean) => ({
        cursor: "pointer",
        backgroundColor: isSelected ? "#EDEFF8" : "transparent",
        '&:hover': {
            backgroundColor: isSelected ? "#EDEFF8" : "#f5f5f5",
        }
    }),
    tableCell: (isExpanded: boolean) => ({
        borderBottom: isExpanded ? "none" : "1px solid #6F2D7AC4 !important",
        fontSize: "14px",
        padding: 2,
    }),
    pagination: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 2,
        mt: 6,
    },
    paginationItem: {
        "&.MuiPaginationItem-root": {
            backgroundColor: "#ece2ee",
        },
        "&.Mui-selected": {
            backgroundColor: "primary.main",
            color: "white",
        },
        "&.MuiPaginationItem-previousNext": {
            backgroundColor: "#ece2ee",
            fontSize: "12px"
        },
        fontSize: "12px"
    }
} as const;



export default STYLES;
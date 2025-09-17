
// SearchFilter Component Styles
const searchFilterStyles = {
    searchSection: {
        mb: 3
    },
    searchContainer: {
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    searchField: {
        minWidth: 250,
        bgcolor: "white"
    },
    formControl: {
        minWidth: 150,
        bgcolor: "white"
    },
    inputLabel: {
        backgroundColor: "white",
        zIndex: 100
    },
    select: {
        '& .MuiSelect-select': {
            display: 'flex',
            width: "100%",
            alignItems: 'center',
            minHeight: 'unset',
        }
    },
    createButton: {
        ml: 'auto',
        borderRadius: "4px"
    },
    compareButton: {
        borderRadius: "4px"
    }
};

export default searchFilterStyles;
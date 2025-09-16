// Updated Responsive Styles - All Filters in Same Row
const searchFilterStyles = {
    container: {
        p: { xs: "20px", sm: "20x" },
        backgroundColor: "white",
        borderRadius: 2,
        m: { xs: "10px", sm: "10px" },
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    responsiveContainer: {
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: { xs: 'stretch', lg: 'center' },
        gap: { xs: "5px", sm: "5px" },
        justifyContent: 'space-between'
    },
    leftSection: {
        display: 'flex',
        flexDirection: 'row', // Always keep in row
        gap: { xs: 1.5, sm: "5px", md: "5px" },
        flex: 1,
        alignItems: 'center',
        flexWrap: { xs: 'wrap', sm: 'nowrap' } // Allow wrapping only on very small screens
    },
    rightSection: {
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 1, sm: "5px" },
        alignItems: { xs: 'stretch', sm: 'center' },
        minWidth: { sm: 'auto' }
    },
    searchField: {
        width: { xs: '100%', sm: '200px', md: '250px', lg: '300px' },
        minWidth: '150px',
        borderRadius: "8px",
    },
    formControl: {
        width: { xs: 'calc(50% - 6px)', sm: '160px', md: '180px' }, // Fixed widths for consistency
        minWidth: '140px',
        '& .MuiInputLabel-root': {
            fontSize: '14px',
            color: '#6B7280', // Gray color for label when not focused
            '&.Mui-focused': {
                color: '#6F2D7A', // Your brand color when focused
            },
            '&.MuiInputLabel-shrink': {
                color: '#6B7280', // Gray color when shrunk (has value)
            }
        },
        '& .MuiSelect-select': {
            fontSize: '14px'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#D1D5DB', // Default border color
            },
            '&:hover fieldset': {
                borderColor: '#9CA3AF', // Hover border color
            },
            '&.Mui-focused fieldset': {
                borderColor: '#6F2D7A', // Focused border color (your brand color)
            }
        }
    },
    addButton: {
        paddingLeft: { xs: "20px", sm: "15px" },
        paddingRight: { xs: "20px", sm: "15px" },
        minWidth: { xs: 'auto', sm: '120px' },
        height: { xs: '44px', sm: 'auto' }
    },
    exportButton: {
        paddingLeft: { xs: "20px", sm: "15px" },
        paddingRight: { xs: "20px", sm: "15px" },
        minWidth: { xs: 'auto', sm: '100px' },
        height: { xs: '44px', sm: 'auto' }
    }
};

export default searchFilterStyles;
// Updated Responsive Styles
const searchFilterStyles = {
    container: {
        p: { xs: 2, sm: 3 },
        backgroundColor: "white",
        borderRadius: 2,
        m: { xs: 1, sm: 2 },
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    responsiveContainer: {
        display: 'flex',
        flexDirection: { xs: 'column', xl: 'row' },
        alignItems: { xs: 'stretch', xl: 'center' },
        gap: { xs: 2, sm: 3 },
        justifyContent: 'space-between'
    },
    leftSection: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        alignItems: { xs: 'stretch', md: 'center' }
    },
    rightSection: {
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 1.5 },
        alignItems: { xs: 'stretch', sm: 'center' },
        minWidth: { sm: 'auto' }
    },
    searchField: {
        width: { xs: '100%', md: 'auto' },
        minWidth: { sm: '200px', lg: '250px' },
        flex: { sm: '1 1 auto', md: '0 0 auto' },
        maxWidth: { md: '300px' },
        borderRadius: "8px",
    },
    formControl: {
        width: { xs: '100%', sm: 'auto' },
        minWidth: { sm: '120px', md: '140px' },
        flex: { xs: '1', sm: '0 0 auto' }
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
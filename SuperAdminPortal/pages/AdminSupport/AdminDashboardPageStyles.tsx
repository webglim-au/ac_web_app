// Add these styles to your existing AdminDashboardPageStyles file

const additionalLayoutStyles = {
    // Two Column Row Layout
    twoColumnRow: {
        display: 'flex',
        gap: "5px",
        // marginTop: "5px",
        '@media (max-width: 1024px)': {
            flexDirection: 'column',
            gap: "5px",
        }
    },

    // Half Column for Side-by-Side Components
    columnHalf: {
        flex: 1,
        minWidth: 0, // Prevents flex items from overflowing
        '@media (max-width: 1024px)': {
            flex: 'none',
            width: '100%',
        }
    },

    // Full Width Column
    columnFull: {
        width: '100%',
        marginTop: "5px",
    }
};

// Merge with your existing styles object
const completeStyles = {
    // ... your existing styles
    pageContainer: {
        padding: "5px",
        maxWidth: '1400px',
        margin: 'auto 15px',
        display: 'flex',
        flexDirection: 'column',
        gap: "5px",
        marginTop: "10px",
        "@media (max-width: 1210px)": {

            gap: "5px",
        }
    },

    cardsContainer: {
        width: '100%',
    },

    cardsWrapper: {
        display: 'flex',
        gap: "5px",
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
        }
    },

    // Add the new layout styles
    ...additionalLayoutStyles,
};

export default completeStyles;
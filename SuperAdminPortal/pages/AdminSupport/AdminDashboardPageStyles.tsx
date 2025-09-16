// Add these styles to your existing AdminDashboardPageStyles file

const additionalLayoutStyles = {
    // Two Column Row Layout
    twoColumnRow: {
        display: 'flex',
        gap: 3,
        marginTop: 3,
        '@media (max-width: 1024px)': {
            flexDirection: 'column',
            gap: 2,
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
        marginTop: 3,
    }
};

// Merge with your existing styles object
const completeStyles = {
    // ... your existing styles
    pageContainer: {
        padding: 3,
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,

        "@media (max-width: 1210px)": {

            gap: 1,
        }
    },

    cardsContainer: {
        width: '100%',
    },

    cardsWrapper: {
        display: 'flex',
        gap: 2,
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
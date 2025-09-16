const styles = {
  // Main container styles
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    bgcolor: 'white',
    borderRadius: '6px',
    padding: "5px",
    justifyContent: 'space-between'
  },

  contentContainer: {
    width: '80%',
    backgroundColor: 'white'
  },

  // Header styles
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: "5px",
    paddingRight: 0
  },

  headerTitle: {
    fontSize: '22px',
    fontWeight: 600,
    textAlign: 'left'
  },

  searchField: {
    width: 440,
    marginBottom: "5px",
    '& .MuiInputBase-root': {
      backgroundColor: '#EDEFF8',
      borderRadius: '8px',
      height: '34px',
      fontSize: '12px',
    },
    '& input': {
      fontSize: '12px',
      padding: '6px 8px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& input::placeholder': {
      color: '#B5B7C0',
      opacity: 1,
      fontSize: '12px',
    },
  },

  searchIcon: {
    color: '#7E7E7E',
    fontSize: 18
  },

  // Main content styles
  mainContentContainer: {
    borderRadius: '6px',
    border: '1px solid #CED4DA',
    boxShadow: '0px 10px 60px 0px #E2ECF980'
  },

  referenceForText: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'primary',
    textAlign: 'left',
    padding: 2,
    paddingLeft: 4,
    paddingBottom: 1
  },

  // Applicant info styles
  applicantInfoContainer: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  applicantInfoColumn: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  applicantContactColumn: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  applicantText: {
    fontSize: '14px',
    fontWeight: 400,
    color: 'black',
    textAlign: 'left',
    paddingLeft: 4
  },

  // Referee item styles
  refereeItemGrid: {
    display: 'grid',
    gridTemplateColumns: '120px 200px 220px 180px 180px',
    alignItems: 'center',
    width: '100%',
    px: 4,
    py: 2
  },

  refereeIndexText: {
    fontSize: '14px',
    fontWeight: 400,
    textAlign: 'left',
    color: 'primary'
  },

  refereeInfoColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: 150
  },

  refereeNameText: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'black',
    textAlign: 'left'
  },

  refereeSubText: {
    fontSize: '14px',
    fontWeight: 400,
    textAlign: 'left',
    color: 'black'
  },

  viewDetailsContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },

  viewDetailsText: {
    fontSize: '14px',
    textAlign: 'left',
    fontWeight: 600,
    cursor: 'pointer'
  },

  // Divider style
  divider: {
    m: 4
  },

  // Detailed notes styles
  detailedNotesTitle: {
    fontSize: '15px',
    fontWeight: 600,
    color: 'text.tertiary',
    m: 1,
    pl: 1,
    textAlign: 'left'
  },

  detailedNotesContainer: {
    m: 1
  },

  // No referees styles
  noRefereesContainer: {
    p: 4
  },

  noRefereesText: {
    fontSize: '14px',
    color: 'text.secondary',
    textAlign: 'center'
  },

  // Sidebar styles
  sidebarContainer: {
    mt: 10,
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    p: 2
  },

  defaultActionButton: {
    width: 'fit-content'
  },

  editNotesButton: {
    mb: 1,
    paddingLeft: 4,
    width: 150,
    mt: 2,
    ml: 1
  },

  sendEmailButton: {
    mb: 1,
    paddingLeft: 4,
    width: 150,
    ml: 1
  }
} as const;

export default styles;
import { SxProps, Theme } from '@mui/material';

export const calendarWithTasksStyles = {
  container: {
    flex: 1,
    justifyContent: "flex-end",

  } as SxProps<Theme>,

  calendar: {
    backgroundColor: 'white',
    borderRadius: "6px",
    width: "335px",
    boxShadow: '0px 4px 4px 0px #00000040',
    mb: 3,

    '& .MuiPickersCalendarHeader-root': {
      display: 'grid',
      alignItems: 'center',
      margin: 2,
      marginLeft: 0,
      marginRight:0,
      gridTemplateColumns: '35px 1fr 35px', // Equal width for arrows, flexible center
      borderBottom: '1px solid #e0e0e0',
      paddingBottom: 2,
      width: '100%',
    },

    '& .MuiPickersCalendarHeader-labelContainer': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gridColumn: 2, // Center column
      textAlign: 'center',
      width: '100%',
    },

    '& .MuiPickersCalendarHeader-label': {
      fontSize: '21px',
      fontWeight: 600,
      color: '#1a1a1a',
      cursor: 'default',
      justifyContent: "center",
      mt: 3,
      textAlign: 'center',
      '&:hover': { backgroundColor: 'transparent' }
    },

    '& .MuiPickersArrowSwitcher-root': {
      display: 'contents', // This makes the children behave as direct grid items
    },

    '& .MuiPickersArrowSwitcher-button': {
      backgroundColor: '#6F2D7A',
      color: 'white',
      width: 25,
      height: 25,
      borderRadius: '4px',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': { backgroundColor: '#5a2461' }
    },

    '& .MuiPickersArrowSwitcher-button:first-of-type': {
      gridColumn: 1, // Left column
      justifySelf: 'center',
    },

    '& .MuiPickersArrowSwitcher-button:last-of-type': {
      gridColumn: 3, // Right column
      justifySelf: 'center',
    },

    '& .MuiDayCalendar-weekDayLabel': {
      fontWeight: 500,
      color: '#9e9e9e',
      fontSize: '13px'
    },

    '& .MuiPickersDay-root': {
      fontSize: '13.88px',
      fontWeight: 500
    }
  } as SxProps<Theme>,

  customDay: (selected: boolean) => ({
    position: 'relative',
    borderRadius: '4px !important',
    backgroundColor: selected ? '#6F2D7A !important' : 'inherit',
    color: selected ? 'white !important' : 'inherit',
    '&:hover': {
      backgroundColor: selected ? '#6F2D7A !important' : 'rgba(111, 45, 122, 0.1)',
    },
    '&.Mui-selected': {
      backgroundColor: '#6F2D7A !important',
      color: 'white !important',
    },
    '&.Mui-selected:hover': {
      backgroundColor: '#5a2461 !important',
    }
  } as SxProps<Theme>),

  taskDots: {
    position: 'absolute',
    bottom: 4,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: 0.25
  } as SxProps<Theme>,

  taskDot: (selected: boolean) => ({
    width: 4,
    height: 4,
    borderRadius: '50%',
    backgroundColor: selected ? 'white' : '#6F2D7A'
  } as SxProps<Theme>),

  tasksContainer: {
    backgroundColor: 'white',
    borderRadius: "6px",
    width: "335px",
    boxShadow: '0px 4px 8px 0px #0000002E',
    p: 3,
    mx: 'auto',
    overflow: "auto",
    height: "100%",
    mb:2,
    "@media (max-width: 850px)": {
      width: "90%",
      margin:"auto",
      mb:2
  }
    
  } as SxProps<Theme>,

  tasksHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 2
  } as SxProps<Theme>,

  tasksTitle: {
    fontWeight: 400,
    fontSize: "20px",
    textAlign: "left"
  } as SxProps<Theme>,

  viewAllLink: {
    display: 'flex',
    textAlign: "right",
    alignItems: 'center',
    gap: 0.75,
    color: 'primary.main',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 700,
    '&:hover': {
      textDecoration: 'underline'
    }
  } as SxProps<Theme>,

  divider: {
    mb: 2
  } as SxProps<Theme>,

  noTasksContainer: {
    textAlign: 'center',
    py: 4
  } as SxProps<Theme>,

  noTasksText: {
    color: 'text.secondary',
    fontSize: '16px'
  } as SxProps<Theme>,

  tasksList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  } as SxProps<Theme>,

  taskHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mb: 0.5
  } as SxProps<Theme>,

  taskTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  } as SxProps<Theme>,

  taskCheckbox: {
    p: 0,
    '& .MuiSvgIcon-root': {
      fontSize: 18
    }
  } as SxProps<Theme>,

  taskTitle: (completed: boolean) => ({
    fontWeight: 400,
    fontSize: '16px',
    textDecoration: completed ? 'line-through' : 'none',
  } as SxProps<Theme>),

  taskTime: {
    fontWeight: 400,
    fontSize: '15px',
  } as SxProps<Theme>,

  taskDescription: {
    fontSize: '14px',
    lineHeight: 1.4,
  } as SxProps<Theme>,

  taskDivider: {
    mt: 2
  } as SxProps<Theme>,
};
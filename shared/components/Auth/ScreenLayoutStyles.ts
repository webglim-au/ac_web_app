// TypeScript type for styles object
interface Styles {
  root: object;
  left: object;
  leftInner: object;
  right: object;
  sectionImg: object;
}

export const styles: Styles = {
  root: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  left: {
    flex: 1,
    bgcolor: 'background.paper',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
    position: 'relative',
    px: { xs: 3, sm: 6, md: 8 },
    py: { xs: 4, md: 0 },
  },
  leftInner: {
    width: { xs: '100%', sm: '80%', md: '60%', lg: '50%' },
    mx: 'auto',
  },
  right: {
    flex: 1,
    display: { xs: 'none', md: 'block' },
    height: '100%',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  sectionImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
};
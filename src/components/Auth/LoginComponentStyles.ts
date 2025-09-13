// TypeScript type for styles object
interface Styles {
  title: object;
  subtitle: object;
  form: object;
  optionsBox: object;
  formControlLabel: object;
  forgotLink: object;
  button: object;
  infoBox: object;
  infoText: object;
  contactText: object;
}

export const styles: Styles = {
  title: {
    fontSize: { xs: '28px', md: '36px' },
    fontWeight: 600,
    mb: '12px',
    textAlign: 'left',
  },
  subtitle: {
    fontWeight: 400,
    mb: '32px',
    textAlign: 'left',
    fontSize: { xs: '14px', md: '16px' },
  },
  form: {
    width: '100%',
  },
  optionsBox: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: { xs: 'flex-start', sm: 'center' },
    justifyContent: 'space-between',
    gap: 1,
    mt: 2,
    mb: 2,
  },
  formControlLabel: {
    m: -1,
  },
  forgotLink: {
    color: 'primary.main',
    fontWeight: 600,
    textAlign: 'right',
    fontSize: 14,
  },
  button: {
    mt: 1,
    mb: 2,
    borderRadius: '3px',
    fontWeight: 600,
  },
  infoBox: {
    width: '100%',
    mt: '32px',
  },
  infoText: {
    fontWeight: 500,
    fontSize: '14px',
    marginBottom: '4px',
  },
  contactText: {
    fontWeight: 600,
    fontSize: '14px',
  },
};
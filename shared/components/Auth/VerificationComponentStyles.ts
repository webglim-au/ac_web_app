// TypeScript type for styles object
interface Styles {
  title: object;
  subtitle: object;
  form: object;
  button: object;
  infoBox: object;
  infoText: object;
  resendText: object;
  backText: object;
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
    width: '50%',
    fontSize: { xs: '14px', md: '16px' },
  },
  form: {
    width: '100%',
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
  resendText: {
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '14px',
  },
  backText: {
    fontWeight: 600,
    fontSize: '14px',
    cursor: 'pointer',
  },
};
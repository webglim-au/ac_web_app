// TypeScript type for styles object
interface Styles {
  title: object;
  subtitle: object;
  form: object;
  button: object;
  backBox: object;
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
    fontSize: { xs: '14px', md: '16px' },
  },
  form: {
    width: '100%',
  },
  button: {
    mt: '24px',
    mb: 2,
    borderRadius: '3px',
    fontWeight: 600,
  },
  backBox: {
    width: '100%',
    mt: '32px',
  },
  backText: {
    fontWeight: 600,
    fontSize: '14px',
    cursor: 'pointer',
  },
};
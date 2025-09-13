// TypeScript type for styles object
interface Styles {
  label: (marginTop: string, error?: string) => object;
  helperText: object;
  errorIcon: object;
}

export const styles: Styles = {
  label: (marginTop: string, error?: string) => ({
    fontWeight: 500,
    mt: marginTop,
    mb: '6px',
    fontSize: '14px',
    color: error ? 'error.main' : 'text.tertiary',
  }),
  helperText: {
    margin: 0,
    fontWeight: 500,
    fontSize: '14px',
  },
  errorIcon: {
    fontSize: 20,
    marginRight: '4px',
  },
};
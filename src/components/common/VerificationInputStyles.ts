// TypeScript type for styles object
interface Styles {
  container: object;
  inputProps: object;
  textField: object;
}

export const styles: Styles = {
  container: {
    display: 'flex',
    gap: 1,
    justifyContent: 'left',
    mt: '32px',
    mb: '32px',
  },
  inputProps: {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: '400',
  },
  textField: {
    width: 47,
    height: 47,
    color: 'primary.main',
    '& .MuiOutlinedInput-root': {
      height: '47px',
      borderRadius: '5px',
      color: 'primary.main',
      borderColor: 'primary.main',
      '& fieldset': {
        borderWidth: 2,
        color: 'primary.main',
      },
      '&:hover fieldset': {
        borderColor: 'primary.main',
        color: 'primary.main',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'primary.main',
        borderWidth: 2,
        color: 'primary.main',
      },
    },
  },
};
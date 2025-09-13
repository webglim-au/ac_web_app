// TypeScript type for styles object
interface Styles {
  container: object;
}

export const styles: Styles = {
  container: {
    position: 'absolute',
    bottom: 24,
    left: { xs: 24, md: 48 },
  },
};
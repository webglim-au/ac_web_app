// TypeScript type for styles object
interface Styles {
  container: object;
  logo: (height: number) => object;
}

export const styles: Styles = {
  container: {
    mb: 4,
    textAlign: 'left',
  },
  logo: (height: number) => ({
    height,
  }),
};
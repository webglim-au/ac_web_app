import { Box, Typography } from '@mui/material';
import { styles } from './CopyrightStyles';

export const Copyright = () => (
    <Box
        sx={styles.container}
    >
        <Typography variant="caption" color="text.tertiary">
            © Assistify {new Date().getFullYear()}
        </Typography>
    </Box>
);
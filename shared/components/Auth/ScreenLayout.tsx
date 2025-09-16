
import { Box } from '@mui/material';
import { Logo } from './Logo';
import { Copyright } from './Copyright';
import sectionImg from '@assets/images/Section.png';
import { styles } from './ScreenLayoutStyles';
import { ScreenLayoutProps } from "../../types/Auth";

export const ScreenLayout = ({ children }: ScreenLayoutProps) => (
    <Box
        sx={styles.root}
    >
        {/* Left Side: Form */}
        <Box
            sx={styles.left}
        >
            <Box sx={styles.leftInner}>
                <Logo marginBottom='4' />
                {children}
            </Box>
            <Copyright />
        </Box>
        {/* Right Side: Image */}
        <Box
            sx={styles.right}
        >
            <img
                src={sectionImg}
                alt="Section"
                style={styles.sectionImg}
            />
        </Box>
    </Box>
);
import React from 'react';
import { Box } from '@mui/material';
import logo from '@assets/images/Logo.png';
import { styles } from './LogoStyles';
import { LogoProps } from "../../../shared/types/common"
export const Logo = ({ height = 48 }: LogoProps) => (
    <Box sx={styles.container}>
        <img src={logo} alt="Assistify Logo" style={styles.logo(height)} />
    </Box>
);
import React from 'react';
import { Box } from '@mui/material';
import logo from '@assets/images/Logo.png';
import { styles } from './LogoStyles';
import { LogoProps } from "../../types/common";

export const Logo = ({ height = 48, marginBottom = "0" }: LogoProps) => (
    <Box sx={[styles.container, { mb: marginBottom }]}>
        <img src={logo} alt="Assistify Logo" style={styles.logo(height)} />
    </Box>
);

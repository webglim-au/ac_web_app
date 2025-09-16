// components/screens/VerificationScreen.tsx
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ScreenLayout } from '@sharedComponents/Auth/ScreenLayout';
import { VerificationInput } from '@sharedComponents/common/VerificationInput';
import { styles } from './VerificationComponentStyles';
import { VerificationComponentProps } from "../../../shared/types/Auth"

export const VerificationComponent = ({
    email,
    onBack,
    onVerify,
    onResend,

}: VerificationComponentProps) => {
    const [digits, setDigits] = useState(['', '', '', '', '', '']);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const code = digits.join('');
        onVerify(code);
    };

    return (
        <ScreenLayout>
            <Typography
                color="text.primary"
                sx={styles.title}
            >
                Check your email
            </Typography>
            <Typography
                color="text.tertiary"
                sx={styles.subtitle}
            >
                We sent a verification link to <span>{email}</span>
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
                <VerificationInput digits={digits} setDigits={setDigits} />

                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={styles.button}
                >
                    Verify Email
                </Button>
            </Box>

            <Box sx={styles.infoBox}>
                <Typography
                    color="text.lighterGrey"
                    align="left"
                    style={styles.infoText}
                >
                    Didn't receive an email?
                    <Typography
                        component="span"
                        color="primary.main"
                        style={styles.resendText}
                        onClick={onResend}
                    >
                        {' '}Click to resend
                    </Typography>
                </Typography>
                <Typography
                    color="text.tertiary"
                    align="left"
                    style={styles.backText}
                    onClick={onBack}
                >
                    ← Back to log in
                </Typography>
            </Box>
        </ScreenLayout>
    );
};
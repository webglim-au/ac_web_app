// components/screens/ForgotPasswordComponent.tsx
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ScreenLayout } from '@components/Auth/ScreenLayout';
import { FormField } from '@components/common/FormField';
import { styles } from './ForgotPasswordComponentStyles';
import { ForgotPasswordComponentProps } from "../../types/Auth"

export const ForgotPasswordComponent = ({ onBack, onContinue }: ForgotPasswordComponentProps) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onContinue(email);
    };

    return (
        <ScreenLayout>
            <Typography
                color="text.primary"
                sx={styles.title}
            >
                Forgot Password
            </Typography>
            <Typography
                color="text.tertiary"
                sx={styles.subtitle}
            >
                Enter the email address you used when you joined and we'll send you link to reset password.
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
                <FormField
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={setEmail}
                />

                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={styles.button}
                >
                    Continue
                </Button>
            </Box>

            <Box sx={styles.backBox}>
                <Typography
                    textAlign={"left"}
                    color="text.tertiary"
                    style={styles.backText}
                    onClick={onBack}
                >
                    ← Back to log in
                </Typography>
            </Box>
        </ScreenLayout>
    );
};

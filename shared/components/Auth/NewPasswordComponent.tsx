import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ScreenLayout } from '@sharedComponents/Auth/ScreenLayout'
import { FormField } from '@sharedComponents/common/FormField';
import { styles } from './NewPasswordComponentStyles';
import { NewPasswordComponentProps } from "../../types/Auth"

export const NewPasswordComponent = ({ onBack, onConfirm }: NewPasswordComponentProps) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!password) {
            setError('Password is required');
        } else if (password.length < 6) {
            setError('Password must be at least 6 characters');
        } else if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError('');
            onConfirm(password, confirmPassword);
        }
    };

    return (
        <ScreenLayout>
            <Typography
                color="text.primary"
                sx={styles.title}
            >
                New Password
            </Typography>
            <Typography
                color="text.tertiary"
                sx={styles.subtitle}
            >
                Create new password
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
                <FormField
                    label="New Password"
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={setPassword}
                />

                <FormField
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm your password."
                    value={confirmPassword}
                    error={error}
                    onChange={setConfirmPassword}
                    marginTop="20px"
                />

                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={styles.button}
                >
                    Confirm
                </Button>
            </Box>

            <Box sx={styles.backBox}>
                <Typography
                    textAlign={"left"}
                    color="text.tertiary"
                    style={styles.backText}
                    onClick={onBack}
                >
                    ← Back to login
                </Typography>
            </Box>
        </ScreenLayout>
    );
};
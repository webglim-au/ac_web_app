// components/screens/LoginPage.tsx
import React, { useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Typography,
    Link,
} from '@mui/material';
import { ScreenLayout } from '@components/Auth/ScreenLayout';
import { FormField } from '@components/common/FormField';
import { styles } from './LoginComponentStyles';
import { LoginComponentProps } from "../../types/Auth"

export const LoginComponent = ({ onForgotPassword, onLogin }: LoginComponentProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setError('Email is required');
        } else if (!password) {
            setError('Password is required');
        } else if (password.length < 6) {
            setError('Password must be at least 6 characters');
        } else {
            setError('');
            onLogin(email, password, remember);
        }
    };

    return (
        <ScreenLayout>
            <Typography
                color="text.primary"
                sx={styles.title}
            >
                Log in
            </Typography>
            <Typography
                color="text.tertiary"
                sx={styles.subtitle}
            >
                Welcome back! Please enter your details.
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
                <FormField
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={setEmail}
                />

                <FormField
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    error={error}
                    onChange={setPassword}
                    marginTop="20px"
                />

                <Box
                    sx={styles.optionsBox}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                            />
                        }
                        label={<Typography color="text.tertiary" textAlign={"left"} fontSize={"14px"} fontWeight={"500"} >Remember for 30 days</Typography>}
                        sx={styles.formControlLabel}
                    />
                    <Link
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onForgotPassword();
                        }}
                        underline="none"
                        sx={styles.forgotLink}
                    >
                        Forgot password
                    </Link>
                </Box>

                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={styles.button}
                >
                    Sign in
                </Button>
            </Box>

            <Box sx={styles.infoBox}>
                <Typography color="text.lighterGrey" style={styles.infoText}>
                    Don't have an account?
                </Typography>
                <Typography color="text.secondary" style={styles.contactText}>
                    Contact your employer for access
                </Typography>
            </Box>
        </ScreenLayout>
    );
};

// Main container component - LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginComponent } from '@components/Auth/LoginComponent';
import { ForgotPasswordComponent } from '@components/Auth/ForgotPasswordComponent';
import { VerificationComponent } from '@components/Auth/VerificationComponent';
import { NewPasswordComponent } from '@components/Auth/NewPasswordComponent';

const LoginPage = () => {
    const [activeComponent, setActiveComponent] = useState<React.ReactNode>(null);
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string, remember: boolean) => {
        setActiveComponent(
            <VerificationComponent
                email={email}
                onBack={showLogin}
                onVerify={(code) => handleVerification(code, true)}
                onResend={handleResend}
            />
        );
    };

    const showForgotPassword = () => {
        setActiveComponent(
            <ForgotPasswordComponent
                onBack={showLogin}
                onContinue={handleForgotPasswordSubmit}
            />
        );
    };

    const handleForgotPasswordSubmit = (email: string) => {
        setUserEmail(email);
        setActiveComponent(
            <VerificationComponent
                email={email}
                onBack={showLogin}
                onVerify={(code) => handleVerification(code, false)} // Pass source directly
                onResend={handleResend}
            />
        );
    };

    const handleVerification = (code: string, isFromLogin: boolean) => {
        if (isFromLogin) {
            navigate('/');
        } else {
            setActiveComponent(
                <NewPasswordComponent
                    onBack={showLogin}
                    onConfirm={handleNewPassword}
                />
            );
        }
    };

    const handleNewPassword = (password: string, confirmPassword: string) => {
        navigate('/auth');
    };

    const showLogin = () => {
        setActiveComponent(
            <LoginComponent
                onForgotPassword={showForgotPassword}
                onLogin={handleLogin}
            />
        );
    };

    const handleResend = () => {
        //
    };

    if (!activeComponent) {
        return <LoginComponent onForgotPassword={showForgotPassword} onLogin={handleLogin} />;
    }

    return <>{activeComponent}</>;
};

export default LoginPage;
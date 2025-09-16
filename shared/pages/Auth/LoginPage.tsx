// Main container component - LoginPage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginComponent } from '@sharedComponents/Auth/LoginComponent';
import { ForgotPasswordComponent } from '@sharedComponents/Auth/ForgotPasswordComponent';
import { VerificationComponent } from '@sharedComponents/Auth/VerificationComponent';
import { NewPasswordComponent } from '@sharedComponents/Auth/NewPasswordComponent';

const LoginPage = () => {
    const [activeComponent, setActiveComponent] = useState<React.ReactNode>(null);
    const [userEmail, setUserEmail] = useState('');
    const [userType, setUserType] = useState('employee');
    const navigate = useNavigate();
    useEffect(() => {
        console.log("userType", userType)
    })
    const handleLogin = (email: string, password: string, remember: boolean, userType: string) => {
        // Store user type for later use
        setUserType(userType);

        setActiveComponent(
            <VerificationComponent
                email={email}
                onBack={showLogin}
                onVerify={(code) => handleVerification(code, true, userType)}
                onResend={handleResend}
            />
        );
    };
    const handleVerification = (code: string, isFromLogin: boolean, userTypeParam: string) => {
        console.log("in login function", userTypeParam)
        if (isFromLogin) {
            // Navigate based on user type
            if (userTypeParam === 'admin') {
                window.open("/admin", "_self")
                // navigate('/employee/hr/dashboard');
            } else {
                window.open("/employee", "_self")
                // navigate('/employee/hr/dashboard');
            }
        } else {
            setActiveComponent(
                <NewPasswordComponent
                    onBack={showLogin}
                    onConfirm={handleNewPassword}
                />
            );
        }
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
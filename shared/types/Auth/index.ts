export interface ForgotPasswordComponentProps {
    onBack: () => void;
    onContinue: (email: string) => void;
}

export interface LoginComponentProps {
    onForgotPassword: () => void;
    onLogin: (email: string, password: string, remember: boolean) => void;
}

export interface NewPasswordComponentProps {
    onBack: () => void;
    onConfirm: (password: string, confirmPassword: string) => void;
}
export interface ScreenLayoutProps {
    children: React.ReactNode;
}
export interface VerificationComponentProps {
    email: string;
    onBack: () => void;
    onVerify: (code: string,) => void;
    onResend: () => void;
}
export 
interface AuthStatusPageProps {
    status: boolean;
    onBackToLogin?: () => void;
    onTryAgain?: () => void;
}
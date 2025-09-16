import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "@sharedPages/NotFound";
import LoginPage from "@sharedPages/Auth/LoginPage";
import AuthStatusPage from "@sharedPages/Auth/AuthStatusPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/auth" element={<AuthStatusPage status={false} />} />

                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
}


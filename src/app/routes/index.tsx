import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@pages/Auth/LoginPage";
import NotFound from "@pages/NotFound";
import AuthStatusPage from "@pages/Auth/AuthStatusPage";
import DashboardPage from "@pages/HR/DashboardPage";
import DashboardAccess from "@pages/DashboardAccess";
import {
    ChatPage,
    EmailPage,
    RecruitmentPage,
    TrainingsPage,
    StaffManagementPage,
    PropertyInspectionPage,
    FormsPage,
    SettingsPage
} from "@pages/HR/pages";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Auth Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/auth" element={<AuthStatusPage status={false} />} />
                <Route path="/" element={<DashboardAccess />} />

                {/* Dashboard Routes - All use DashboardScreen HR layout */}
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/email" element={<EmailPage />} />
                <Route path="/recruitment" element={<RecruitmentPage />} />
                <Route path="/trainings" element={<TrainingsPage />} />
                <Route path="/staff-management" element={<StaffManagementPage />} />
                <Route path="/property-inspection" element={<PropertyInspectionPage />} />
                <Route path="/forms" element={<FormsPage />} />
                <Route path="/settings" element={<SettingsPage />} />

                {/* Catch-all route for 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}


import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardAccess from "@employeePages/DashboardAccess";

import {
    ChatPage,
    EmailPage,
    RecruitmentPage,
    TrainingsPage,
    StaffManagementPage,
    PropertyInspectionPage,
    FormsPage,
    SettingsPage,
    DashboardPage
} from "@employeePages/HR/pages";

export default function AppRoutes() {
    return (
        <BrowserRouter basename="/employee">
            <Routes>
                {/* <Route path="/" element={<DashboardAccess />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/auth" element={<AuthStatusPage status={false} />} /> */}
                <Route path="/hr/dashboard" element={<DashboardPage />} />
                <Route path="/" element={<DashboardAccess />} />
                <Route path="/dashboard" element={<DashboardAccess />} />
                <Route path="/hr/chat" element={<ChatPage />} />
                <Route path="/hr/email" element={<EmailPage />} />
                <Route path="/hr/recruitment" element={<RecruitmentPage />} />
                <Route path="/hr/trainings" element={<TrainingsPage />} />
                <Route path="/hr/staff-management" element={<StaffManagementPage />} />
                <Route path="/hr/property-inspection" element={<PropertyInspectionPage />} />
                <Route path="/hr/forms" element={<FormsPage />} />
                <Route path="/hr/settings" element={<SettingsPage />} />
                {/* Dashboard Routes - All use DashboardScreen HR layout */}
                {/* Catch-all route for 404 */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    );
}


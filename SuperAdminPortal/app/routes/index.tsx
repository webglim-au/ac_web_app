import { BrowserRouter, Routes, Route } from "react-router-dom";
import {

    AdminDashboardPage,
    AdminInventoryManagementPage,
    AdminMaintenanceRequestPage,
    AdminSiteConcernsPage,
    AdminTasksPage,
    AdminRolesPage,
    AdminUserManagementPage
} from "@adminPages/AdminSupport/pages";

export default function AppRoutes() {
    return (
        <BrowserRouter basename="/admin">
            <Routes>

                {/* Dashboard Routes - All use DashboardScreen HR layout */}
                <Route path="/" element={<AdminDashboardPage />} />
                <Route path="/dashboard" element={<AdminDashboardPage />} />
                <Route path="/user-management" element={<AdminUserManagementPage />} />
                <Route path="/roles" element={<AdminRolesPage />} />
                <Route path="/feature-permission" element={<AdminTasksPage />} />
                <Route path="/inventory" element={<AdminInventoryManagementPage />} />
                <Route path="/logs" element={<AdminMaintenanceRequestPage />} />
                <Route path="/feature-usage" element={<AdminSiteConcernsPage />} />
                {/* Catch-all route for 404 */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    );
}


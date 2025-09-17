import React, { useState } from 'react';
import { Box } from "@mui/material";
import ScreenTemplate from "@sharedComponents/common/ScreenTemplate";
import SuperAdminRole from "@assets/icons/SuperAdminRoleSVG.svg";
import AdminRole from "@assets/icons/AdminRoleSVG.svg";
import ManagerRole from "@assets/icons/ManagerRoleSVG.svg";

// Import components
import { SearchFilter } from '@adminComponents/AdminSupport/RolesAndPermissions/SearchFilter';
import { RoleTabs } from '@adminComponents/AdminSupport/RolesAndPermissions/RoleTabs';
import { TabContent } from '@adminComponents/AdminSupport/RolesAndPermissions/TabContent';
import { RoleCardProps } from '@shared/types/SuperAdmin';
// Main page styles
const adminRolesPageStyles = {
    container: {
        p: 2,
        backgroundColor: "#f9fafb",
        borderRadius: 2,
        m: 2
    }
};

export function AdminRolesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [activeTab, setActiveTab] = useState(0);

    const defaultRoles: RoleCardProps[] = [
        {
            icon: SuperAdminRole,
            title: "Super Admin",
            subtitle: "Full system access with all permissions",
            bgColor: "#FEF2F2",
            color: "#B91C1C",
            border: "#FECACA",
            totalUsers: 5,
            permissions: ["User Management", "System Config", "Data Access", "Reports"],
            moreCount: 12
        },
        {
            icon: AdminRole,
            title: "Admin",
            subtitle: "Administrative access with limited system controls",
            bgColor: "#EFF6FF",
            color: "#1D4ED8",
            border: "#BFDBFE",
            totalUsers: 12,
            permissions: ["User Management", "Content Management", "Basic Reports", "Settings"],
            moreCount: 8
        },
        {
            icon: ManagerRole,
            title: "Manager",
            subtitle: "Team management and operational oversight",
            bgColor: "#F0FDF4",
            color: "#15803D",
            border: "#BBF7D0",
            totalUsers: 20,
            permissions: ["Team Management", "Project Access", "Basic Reports", "Task Assignment"],
            moreCount: 6
        }
    ];
    const filteredRoles = defaultRoles.filter(role => {
        const matchesSearch = role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            role.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            role.permissions.some(permission =>
                permission.toLowerCase().includes(searchTerm.toLowerCase())
            );

        const matchesStatus = statusFilter === '' || statusFilter === 'all' ||
            (statusFilter === 'active' && role.totalUsers > 0) ||
            (statusFilter === 'inactive' && role.totalUsers === 0);

        return matchesSearch && matchesStatus;
    });

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <ScreenTemplate>
            <Box sx={adminRolesPageStyles.container}>
                {/* Search and Filter Section */}
                <SearchFilter
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                />

                {/* Tabs Section */}
                <RoleTabs
                    activeTab={activeTab}
                    handleTabChange={handleTabChange}
                    defaultRolesCount={defaultRoles.length}
                    filteredCount={filteredRoles.length}
                />

                {/* Tab Content */}
                <TabContent
                    activeTab={activeTab}
                    defaultRoles={filteredRoles}
                />
            </Box>
        </ScreenTemplate>
    );
}
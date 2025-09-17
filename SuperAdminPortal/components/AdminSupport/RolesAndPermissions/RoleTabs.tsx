import React from 'react';
import {
    Box,
    Tabs,
    Tab,
} from "@mui/material";
import roleTabsStyles from './RoleTabStyles';
import { RoleTabsProps } from "@shared/types/SuperAdmin"

export const RoleTabs: React.FC<RoleTabsProps> = ({
    activeTab,
    handleTabChange,
    defaultRolesCount,
    filteredCount
}) => {
    return (
        <Box sx={roleTabsStyles.tabsContainer}>
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={roleTabsStyles.tabs}
            >
                <Tab
                    label={
                        <Box sx={roleTabsStyles.tabLabel}>
                            Default Roles
                            <Box sx={roleTabsStyles.tabBadgeActive}>
                                {filteredCount}
                            </Box>
                        </Box>
                    }
                />
                <Tab
                    label={
                        <Box sx={roleTabsStyles.tabLabel}>
                            Custom Roles
                            <Box sx={roleTabsStyles.tabBadgeInactive}>
                                0
                            </Box>
                        </Box>
                    }
                />
            </Tabs>
        </Box>
    );
};
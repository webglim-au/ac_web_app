import React from 'react';
import { Box, Typography } from "@mui/material";
import { RoleCard } from './RoleCard';
import tabContentStyles from "./TabContentStyles";
import { TabContentProps } from '@shared/types/SuperAdmin';

export const TabContent: React.FC<TabContentProps> = ({
    activeTab,
    defaultRoles
}) => {
    return (
        <Box>
            {activeTab === 0 && (
                <>
                    {defaultRoles.length > 0 ? (
                        <Box sx={tabContentStyles.tabContent}>
                            {defaultRoles.map((role, index) => (
                                <Box key={index}>
                                    <RoleCard {...role} />
                                </Box>
                            ))}
                        </Box>
                    ) : (
                        <Box sx={tabContentStyles.emptySearchState}>
                            <Typography variant="h6" color="text.secondary">
                                No roles found
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={tabContentStyles.emptyStateSubtext}>
                                Try adjusting your search or filter criteria
                            </Typography>
                        </Box>
                    )}
                </>
            )}
            {activeTab === 1 && (
                <Box sx={tabContentStyles.emptyState}>
                    <Typography variant="h6" color="text.secondary">
                        No custom roles created yet
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={tabContentStyles.emptyStateSubtext}>
                        Click "Create Role" to add your first custom role
                    </Typography>
                </Box>
            )}
        </Box>
    );
};